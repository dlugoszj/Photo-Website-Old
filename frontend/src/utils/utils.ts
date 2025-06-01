// import { ref, getDownloadURL, listAll } from "firebase/storage";
// import { projectStorage } from "../config/firebase-config";
// import { useEffect, useState } from "react";
// import { FilesManager } from 'turbodepot-node';
// //import * as path from 'node:path';
// import { readdir } from 'node:fs/promises';

// async function getImageURL(filePath: string) {
//     const imageRef = ref(projectStorage, filePath);
//     const url = await getDownloadURL(imageRef);
//     return url;

// }

//  const fs = require("fs")
//  const path = require("path")

function getImageCategories() {
    const fs = require("fs")
    let test:String[] = [];
    fs.readdir("../assets/images", test );
    console.log(test);
}

//  const getAllFiles = function(dirPath:string, extension:string, arrayOfFiles:string[]) {
//   let files = fs.readdirSync(dirPath);

//   arrayOfFiles = arrayOfFiles || [];

//   files.forEach(function(file:string) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + "/" + file, 'jpeg', arrayOfFiles);
//     } else if (file.endsWith(extension)){
//       arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
//     }
//   });

//   return arrayOfFiles;
// }







export { getImageCategories };