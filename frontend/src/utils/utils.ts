import {
  getFirestore,
  collection,
  updateDoc,
  doc,
  setDoc,
  getDoc,
  DocumentReference,
  or,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject, listAll, StorageReference } from "firebase/storage";
import { app } from "../firebaseConfig";
import { getFunctions, httpsCallable } from "firebase/functions";
import pica from "pica";
import heic2any from "heic2any";

const functions = getFunctions();



const db = getFirestore(app);
const storage = getStorage(app);


export const handleUpdate = async (collection: string, docId: string, newTitle: string, newDescription: string, newCoverImage: File | null) => {

  // Check if either new title or new cover image were provided
  if (!newCoverImage && !newTitle  && !newDescription) {
    return;
  }


  // Only update the title
  if (newTitle != "") {
    await updateDoc(doc(db, collection, docId), { title: newTitle, updatedAt: Date.now()});
  }
  if (newDescription != "") {
    await updateDoc(doc(db, collection, docId), { description: newDescription, updatedAt: Date.now()});
  }  
  if(newCoverImage != null ) {

    const docRef = doc(db, collection, docId);
    const docObject =  await getDoc(docRef);

    if (docObject.exists()){
      const deleteRef = ref(storage, docObject.data().coverImageUrl);
      await deleteObject(deleteRef)
      .then(() => {
          console.log("File deleted successfully");
      })
      .catch((error) => {
          console.error("Error occurred in deleting file from Firebase storage", error);
      });
      const storageRef = await ref(storage, docObject.data().coverImageUrl);
      await uploadImage(newCoverImage, storageRef)
      await updateDoc(doc(db, collection, docId), { updatedAt: Date.now() });
    }

  }
};


// This function handles adding an album/category to firebase
export const handleSaveAlbum = async (title: string, description: string, file: File | null, collectionPath: string) => {
  if (file == null) {
    return;
  }

  const docRef = doc(collection(db, collectionPath));

  const firebaseStorageRef = await ref(storage, "/" + collectionPath + "/" + docRef.id + "/cover");

  await uploadImage(file, firebaseStorageRef);

  await setDoc(docRef, {
    coverImageUrl:  collectionPath + "/" + docRef.id + "/cover",
    title: title,
    description: description,
    id: docRef.id,
    updatedAt: Date.now()
  });
};

export const handleDeleteStorage = async (firebaseStoragePath: string) => {
  const res = await listAll(ref(storage, firebaseStoragePath));

  await Promise.all(res.items.map((itemRef) => deleteObject(itemRef)));

  await Promise.all(res.prefixes.map((folderRef) => handleDeleteStorage(folderRef.fullPath)));
}


export const handleDelete = async (collection: string, docId: string) => {

  const docRef = doc(db, collection, docId);

  await handleDeleteStorage(collection + "/" + docRef.id);

  const deleteDocumentsRecursively = httpsCallable(functions, "deleteDocumentsRecursively");
  let path = collection + "/" + docRef.id;
  try{
    await deleteDocumentsRecursively({path:path})
    console.log("Succesfully deleted " + path)
  }
  catch (error){
    console.log("Error deleting" + docRef);
  }
};

export const getDocumentName = async (firebaseDocumentPath: string) => {
    const docRef = doc(db, firebaseDocumentPath);
    const docObject =  await getDoc(docRef);

    if (docObject.exists()){
        return docObject.data().title;
    }
    return "asd";
}



export const uploadImage = async (file: File, storageRef: StorageReference) => {
    let processedFile: Blob = file;

    if(file.type == "image/heic" && file.type == "image/heic"){
      processedFile = await convertHEICtoJPEG(file);
    }
    const resizedBlob = await resizeImage(processedFile);

    await uploadBytes(storageRef, resizedBlob)
      .then((_snapshot) => {
        console.log("Uploaded an album/category NEWNEWN");
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
}


// Initial resize function to prevent uploading huge files to firebase
export const resizeImage = async(file :Blob) => {
  
    const maxWidth = 2000;
    const maxHeight = 2000;
    const img = await loadImage(file);
    console.log("Loaded Image")
    const originalWidth = img.width;
    const originalHeight = img.height;
    let newWidth = 0;
    let newHeight = 0;

    if(originalWidth <= 2000 && originalHeight <= 2000){
      console.log("Image small enough");
      return file;
    }

    let scale = Math.min(maxWidth / originalWidth, maxHeight / originalHeight);
    newWidth = originalWidth * scale;
    newHeight = originalHeight * scale;

      // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Resize with Pica
    const picaInstance = pica();
    await picaInstance.resize(img, canvas);
    console.log("Resized Image")


    // Convert canvas to Blob
    const blob = await picaInstance.toBlob(canvas, "image/jpeg", 1.0);
    return blob;
}

// Converts a File to an HTMLImageElement
export function loadImage(file: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

async function convertHEICtoJPEG(file: File): Promise<Blob> {
  const convertedImage = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 1.0,
  });

  if(Array.isArray(convertedImage)){
    return convertedImage[0];
  }
  else{
    return convertedImage;
  }

}
