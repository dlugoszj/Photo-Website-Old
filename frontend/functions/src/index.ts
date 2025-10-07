
import {setGlobalOptions} from "firebase-functions";
setGlobalOptions({ maxInstances: 10, memory: "1GiB", });
import * as functions from "firebase-functions/v2"; 
import admin from "firebase-admin"; 
// import {HttpsError} from "firebase-functions/v2/https";
// import { onObjectFinalized } from "firebase-functions/storage";
import sharp from "sharp";
import heicConvert from "heic-convert";
import { fileTypeFromBuffer } from "file-type";


admin.initializeApp();

export const deleteDocumentsRecursively = functions.https
    .onCall(async (request: functions.https.CallableRequest) => { 
    
    // Check that the user is authenticated 
    if (!request || !request.auth) { 
        throw new functions.https.HttpsError("unauthenticated", "Must be logged in"); 
    } 
    console.log("Deleting " + request.data.path); 

    // Get reference to document from path that was passed in.
    const ref = admin.firestore().doc(request.data.path); 

    // Recursive delete
    await admin.firestore().recursiveDelete(ref);

    // Delete original parent document
    await ref.delete();
});

export const testFunction = functions.https.onCall((req) => {
  console.log("testFunction called", req.data);
  return { success: true };
});

export const processImage =  functions.https.onCall(async (request: functions.https.CallableRequest) => { 
    console.log("Cloud Function triggered!", request.data);


    if (!request || !request.auth) { 
        throw new functions.https.HttpsError("unauthenticated", "Must be logged in"); 
    } 
    const filePath = request.data.filePath;
 
    // If image gallery is uploaded
    if (filePath.includes("/images/") ){
        await resizeHelper(filePath, 700, "_700x700");
        let [image2000Height, image2000Width] = await resizeHelper(filePath, 2000, "_2000x2000");

        const documentRef = admin.firestore().doc(filePath);
        documentRef.set({
            imageURL: filePath,
            fullSizedImageURL:filePath + "_2000x2000" , 
            thumbnailURL:filePath + "_700x700", 
            height: image2000Height, 
            width: image2000Width 
        })
        await admin.storage().bucket().file(filePath).delete();
    }
    else if(filePath.includes("/cover")){
        if(filePath.includes("/cover_resized")){
            await resizeHelper(filePath, 700, "");

        }
        else{
            await resizeHelper(filePath, 700, "_resized");
            await admin.storage().bucket().file(filePath).delete();


        }
        console.log("Is this running?")
        const documentRef = admin.firestore().doc(filePath.substring(0, filePath.lastIndexOf("/")));

        if (request.data.albumDescription == "" || request.data.albumTitle == ""){
            console.log("Cloud Update Moment")
            documentRef.update({updatedAt: Date.now()})
        }
        else{
            documentRef.set({
                coverImageUrl: filePath + "_resized",
                description: request.data.albumDescription,
                title: request.data.albumTitle,
                id: request.data.docRef,
                updatedAt: Date.now()
            })        
        }

    }
});

async function resizeHelper (filePath: string, maxPixelDimension: number, filePathAppendage: string ) {
    const bucket = admin.storage().bucket();
    console.log("filepath " + filePath);
    let [fileBuffer] = await bucket.file(filePath).download();
    const fileType = await fileTypeFromBuffer(fileBuffer);

    if (fileType && (fileType.mime == "image/heic" || fileType.mime == "image/heif" )){
        console.log("Detected HEIC Image, converting it to JPEG");
        fileBuffer = await heicConvert({
            buffer: fileBuffer,
            format: "JPEG",
            quality: 1
        });    
    }

    const resizedFileBuffer = await sharp(fileBuffer).resize(
        {height:maxPixelDimension, 
            width:maxPixelDimension, 
            fit: sharp.fit.inside, 
            withoutEnlargement:true})
            .jpeg({quality:80})
            .toBuffer();
    
    const metadata = await sharp(resizedFileBuffer).metadata();
    
    const file = bucket.file(filePath + filePathAppendage);
    
    await file.save(resizedFileBuffer, { contentType: "image/jpeg" });

    return [metadata.height, metadata.width];
}