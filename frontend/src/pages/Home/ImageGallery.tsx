import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./home.css";
import "/src/assets/css/fonts.css";
import React, { useCallback, useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, setDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "../../firebaseConfig"; // Ensure this points to your Firebase setup
import "./photogrid.css";
import Gallery from "react-photo-gallery";
import ImageStyle from "./ImageStyle";
import { RenderImageProps } from "react-photo-gallery";
import DeleteImageModal from "../../components/DeleteImageModal";
import AddImageModal from "../../components/AddImageModal";

const db = getFirestore(app);
const storage = getStorage(app);

interface Photo {
  src: string;
  width: number;
  height: number;
  name: string;
}

interface ImageGalleryInfo {
  adminMode?: boolean;
}
const handleSaveAlbum = async (imageHeight: number, imageWidth: number, file: File | null, collectionPath: string) => {
  if (file == null) {
    return;
  }
  //TODO change slightly to fit image upload
  console.log(collectionPath);
  const storageRef = await ref(storage, "/" + file.name);
  await uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
  await setDoc(doc(db, collectionPath, file.name), {
    imageUrl: file.name,
    width: imageWidth,
    height: imageHeight,
  });
};

const handleDelete = async (collection: string, docId: string) => {
  console.log(collection);
  console.log(docId);
  await deleteDoc(doc(db, collection, docId))
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
  // Refresh your local state after deletion!
};

const ImageGallery: React.FC<ImageGalleryInfo> = ({ adminMode = false }) => {
  const { categoryId, galleryId } = useParams();
  if (!galleryId) {
    return <div className="text-white">Invalid gallery ID</div>;
  }

  const [Photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    // const unsubscribe = onSnapshot(collection(db, collectionName), async (snapshot) => {

    const unsubscribe = onSnapshot(
      collection(db, `albumCategories/${categoryId}/albums/${galleryId}/images/`),
      async (querySnapshot) => {
        // const querySnapshot = await getDocs(collection(db, `albumCategories/${categoryId}/albums/${galleryId}/images/`));
        // const querySnapshot = await getDocs(collection(db, `galleries/Michigan/images`));
        const photoData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            console.log(data.imageUrl);
            const url = await getDownloadURL(ref(storage, data.imageUrl));
            const w = data.width;
            const h = data.height;
            const title = data.imageUrl;
            return { src: url, width: Number(w), height: Number(h), name: title };
          })
        );
        setPhotos(photoData);
        console.log(Photos);
      }
    );
    return () => unsubscribe();
  }, [categoryId, galleryId]);

  const [openModal, setOpenModal] = useState<null | "add" | "delete" | "edit">(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string>();

  // Open Add Modal
  const handleOpenAddModal = () => {
    setOpenModal("add");
  };

  // // Open Delete Modal
  // const handleOpenDeleteModal = (galleryName: string) => {
  //   setSelectedAlbum(galleryName);
  //   setOpenModal("delete");
  // };

  // // Open Edit Modal
  // const handleOpenEditModal = (galleryName: string) => {
  //   setSelectedAlbum(galleryName);
  //   setOpenModal("edit");
  // };

  // Close Modal
  const handleCloseModal = () => {
    setSelectedAlbum(undefined);
    setOpenModal(null);
  };

  // const customRenderImage: React.FC<RenderImageProps> = (props) => <ImageStyle {...props} />;
  const customRenderImage: React.FC<RenderImageProps> = ({ photo, index, left, top, margin, direction }) => {
    const customPhoto = photo as Photo;
    return (
      <div
        style={{
          margin: margin,
          cursor: "pointer",
          position: direction === "column" ? "absolute" : "relative",
          left: left,
          top: top,
          backgroundColor: "#eee",
          overflow: "hidden",
        }}
        onClick={() => openImageModal(photo.src, customPhoto.name)} // 👈 Click handler
      >
        <img src={photo.src} width={photo.width} height={photo.height} alt={`Image ${index}`} />
      </div>
    );
  };
  const [selectedImage, setSelectedImage] = useState<[string, string] | [null, null]>([null, null]);

  const openImageModal = (imageSrc: string, imageName: string) => setSelectedImage([imageSrc, imageName]);
  const closeModal = () => setSelectedImage([null, null]);
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="albumHeading">{galleryId.toUpperCase().split("").join(" ")}</div>
      {adminMode && (
        <div className="admin-content text-neutral-200 ">
          <button onClick={handleOpenAddModal} className="add-button">
            Add
          </button>
          {openModal == "add" && (
            <AddImageModal
              onClose={handleCloseModal}
              onSave={handleSaveAlbum}
              collectionPath={`albumCategories/${categoryId}/albums/${galleryId}/images/`}
            />
          )}
        </div>
      )}
      {Photos.length > 0 && <Gallery photos={Photos} direction="column" renderImage={customRenderImage} />}
      {selectedImage[0] && (
        <DeleteImageModal
          onDelete={handleDelete}
          collectionPath={`albumCategories/${categoryId}/albums/${galleryId}/images/`}
          galleryName={selectedImage[1]}
          adminMode={adminMode}
          imageSrc={selectedImage[0]}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
