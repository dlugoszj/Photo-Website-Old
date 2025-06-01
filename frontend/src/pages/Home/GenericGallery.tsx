import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "../../firebaseConfig"; // Ensure this points to your Firebase setup
import "./photogrid.css";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Modal from "../../components/Modal";
import AddAlbumModal from "../../components/AddModal";
import DeleteModal from "../../components/DeleteModal";
import EditModal from "../../components/EditModal";

const db = getFirestore(app);
const storage = getStorage(app);

interface GalleryItem {
  id: string;
  title: string;
  coverImageUrl: string;
}

type galleryType = {
  galleryType: string;
  collectionName?: string;
  galleryTitle?: string;
  adminMode?: boolean;
};

const handleDelete = async (collection: string, docId: string) => {
  await deleteDoc(doc(db, collection, docId))
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
  // Refresh your local state after deletion!
};

const handleUpdate = async (collection: string, docId: string, newTitle: string, newCoverImage: File | null) => {
  //TODO Implement logic to handle only updating one field. Might have to do this in the editModal component
  if (!newCoverImage && !newTitle) {
    console.log("bruh");
    return;
  }
  if (newCoverImage == null) {
    await updateDoc(doc(db, collection, docId), { title: newTitle });
  } else {
    const storageRef = await ref(storage, "/" + newCoverImage.name);
    await uploadBytes(storageRef, newCoverImage)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
    await updateDoc(doc(db, collection, docId), { coverImageUrl: newCoverImage.name, title: newTitle });
  }
  if (collection == "albumCategories") {
    await migrateGalleryDueToTitleChange(docId, newTitle);
  } else {
    const match = collection.match(/\/albumCategories\/([^/]+)\/albums/);
    if (match) {
      await migrateAlbumDueToTitleChange(docId, newTitle, match[1]);
    } else {
    }
  }

  // Refresh your local state after deletion!
};

const migrateAlbumDueToTitleChange = async (oldDocId: string, newDocId: string, albumCategory: string) => {
  const oldCollectionRef = doc(db, "albumCategories", albumCategory, "albums", oldDocId);
  const newCollectionRef = doc(db, "albumCategories", albumCategory, "albums", newDocId);
  console.log("Got here");

  const collectionSnapshot = await getDocs(collection(oldCollectionRef, "images"));
  console.log(collectionSnapshot);

  const hold = await getDoc(oldCollectionRef);
  await setDoc(newCollectionRef, hold.data());

  for (const docSnap of collectionSnapshot.docs) {
    await setDoc(newCollectionRef, docSnap.data());
  }
  await deleteDoc(oldCollectionRef);
};

const migrateGalleryDueToTitleChange = async (oldDocId: string, newDocId: string) => {
  const oldCollectionRef = doc(db, "albumCategories", oldDocId);
  const newCollectionRef = doc(db, "albumCategories", newDocId);

  const collectionSnapshot = await getDocs(collection(oldCollectionRef, "albums"));

  const hold = await getDoc(oldCollectionRef);
  await setDoc(newCollectionRef, hold.data());

  for (const docSnap of collectionSnapshot.docs) {
    const newAlbumRef = doc(newCollectionRef, "albums", docSnap.id);
    await setDoc(newAlbumRef, docSnap.data());

    const imagesSnap = await getDocs(collection(docSnap.ref, "images"));
    for (const imageDoc of imagesSnap.docs) {
      const newImageRef = doc(newAlbumRef, "images", imageDoc.id);
      await setDoc(newImageRef, imageDoc.data());
    }
  }
  await deleteDoc(oldCollectionRef);
};

const handleSaveAlbum = async (title: string, file: File | null, collectionPath: string) => {
  if (file == null) {
    return;
  }

  console.log(collectionPath);
  const storageRef = await ref(storage, "/" + file.name);
  await uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
  await setDoc(doc(db, collectionPath, title), {
    coverImageUrl: file.name,
    title: title,
    id: title,
  });
};

const GenericGallery: React.FC<galleryType> = ({
  galleryType,
  collectionName = "",
  galleryTitle = "",
  adminMode = false,
}) => {
  let pathLink = "";
  const { categoryId } = useParams();
  const adminPath: string = adminMode ? "admin/" : "";

  const [openModal, setOpenModal] = useState<null | "add" | "delete" | "edit">(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string>();

  // Open Add Modal
  const handleOpenAddModal = () => {
    setOpenModal("add");
  };

  // Open Delete Modal
  const handleOpenDeleteModal = (galleryName: string) => {
    setSelectedAlbum(galleryName);
    setOpenModal("delete");
  };

  // Open Edit Modal
  const handleOpenEditModal = (galleryName: string) => {
    setSelectedAlbum(galleryName);
    setOpenModal("edit");
  };

  // Close Modal
  const handleCloseModal = () => {
    setSelectedAlbum(undefined);
    setOpenModal(null);
  };

  if (galleryType == "album" && !categoryId) {
    return <div className="text-white">Invalid gallery ID</div>;
  }

  if (galleryType == "album") {
    pathLink = categoryId + "/";
    collectionName = "/albumCategories/" + categoryId + "/albums";
    galleryTitle = categoryId ?? "";
  }

  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), async (snapshot) => {
      const updatedAlbums = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const url = await getDownloadURL(ref(storage, data.coverImageUrl));
          return { id: doc.id, title: data.title, coverImageUrl: url };
        })
      );
      setGalleries(updatedAlbums);
    });

    return () => unsubscribe(); // clean up the listener on unmount
  }, [collectionName, location]);

  return (
    <div className="">
      <NavBar />
      <div className="albumHeading">{galleryTitle.toUpperCase().split("").join(" ")}</div>
      {adminMode && (
        <div className="admin-content text-neutral-200 ">
          <button onClick={handleOpenAddModal} className="add-button">
            Add
          </button>
          {openModal == "add" && (
            <AddAlbumModal onClose={handleCloseModal} onSave={handleSaveAlbum} collectionPath={collectionName} />
          )}
        </div>
      )}
      <div className="mx-auto container grid grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <div>
            <Link to={`/${adminPath}${pathLink}${gallery.id}`} className="group transition-all mb-2">
              <div className="flex flex-col items-center">
                <img src={gallery.coverImageUrl} alt={gallery.title} className="album-image" />
                <div className="mt-4 text-center text-neutral-200">
                  <strong>{gallery.title}</strong>
                  <p className="text-xs">{gallery.title}</p>
                </div>
              </div>
            </Link>
            {adminMode && (
              <div className="admin-content ">
                <div className="text-red-500">
                  <button onClick={() => handleOpenDeleteModal(gallery.id)} className="delete-button">
                    Delete
                  </button>
                  {openModal == "delete" && selectedAlbum == gallery.id && (
                    <DeleteModal
                      onClose={handleCloseModal}
                      onDelete={handleDelete}
                      collectionPath={collectionName}
                      galleryName={gallery.id}
                    />
                  )}
                </div>
                <div className="text-blue-500">
                  <button onClick={() => handleOpenEditModal(gallery.id)} className="edit-button">
                    Edit
                  </button>
                  {openModal == "edit" && selectedAlbum == gallery.id && (
                    <EditModal
                      onClose={handleCloseModal}
                      onEdit={handleUpdate}
                      collectionPath={collectionName}
                      galleryName={gallery.id}
                    />
                  )}
                </div>{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericGallery;
