
import {setGlobalOptions} from "firebase-functions";
setGlobalOptions({ maxInstances: 10 });
import * as functions from "firebase-functions/v2"; 
import * as admin from "firebase-admin"; 
import {HttpsError} from "firebase-functions/v2/https";
import { onObjectFinalized } from "firebase-functions/storage";
import sharp from "sharp";

admin.initializeApp();

export const deleteDocumentsRecursively = functions.https 
    .onCall(async (request: functions.https.CallableRequest) => { 
    
    // Check that the user is authenticated 
    if (!request || !request.auth) { 
        throw new HttpsError("unauthenticated", "Must be logged in"); 
    } 
    console.log("Deleting " + request.data.path); 

    // Get reference to document from path that was passed in.
    const ref = admin.firestore().doc(request.data.path); 

    // Recursive delete
    await admin.firestore().recursiveDelete(ref);

    // Delete original parent document
    await ref.delete();
});

export const resizeImages = onObjectFinalized(
  { maxInstances: 5, timeoutSeconds: 300 }, 
  async (event ) => {
    const filePath = event.data.name;
 
    if (filePath.includes("_")) {
        console.log("Skipping already resized image");
        return;
    }
    // If image gallery is uploaded
    if (filePath.includes("/images/") ){
        await resizeHelper(filePath, 700, "_700x700");
        await resizeHelper(filePath, 2000, "_2000x2000");

        const documentRef = admin.firestore().doc(filePath);
        documentRef.update({fullSizedImageURL:filePath + "_2000x2000" , thumbnailURL:filePath + "_700x700" });
        await admin.storage().bucket().file(filePath).delete();
    }
    else if(filePath.includes("/cover")){
        await resizeHelper(filePath, 700, "_resized");

        const documentRef = admin.firestore().doc(filePath.substring(0, filePath.lastIndexOf("/")));
        documentRef.update({coverImageUrl: filePath + "_resized"});
        await admin.storage().bucket().file(filePath).delete();

    }
});

async function resizeHelper (filePath: string, maxPixelDimension: number, filePathAppendage: string ) {
    const bucket = admin.storage().bucket();
    const [fileBuffer] = await bucket.file(filePath).download();

    const resizedFileBuffer = await sharp(fileBuffer).resize(
        {height:maxPixelDimension, 
            width:maxPixelDimension, 
            fit: sharp.fit.inside, 
            withoutEnlargement:true})
            .jpeg({quality:80})
            .toBuffer();
    
    const file = bucket.file(filePath + filePathAppendage);

    await file.save(resizedFileBuffer, { contentType: "image/jpeg" });
}