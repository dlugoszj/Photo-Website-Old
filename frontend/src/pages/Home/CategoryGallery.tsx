import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../../firebaseConfig"; // Ensure this points to your Firebase setup
import "./photogrid.css";
import { Link, useParams } from "react-router-dom";

const db = getFirestore(app);
const storage = getStorage(app);

interface CategoryItem {
  id: string;
  title: string;
  coverImageUrl: string;
}

const AlbumGallery: React.FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  console.log(useParams().length);
  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "albumCategories"));
      const galleryData = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();

          const url = await getDownloadURL(ref(storage, data.coverImageUrl));
          return { id: data.id, title: data.title, coverImageUrl: url };
        })
      );
      setCategories(galleryData);
    };

    fetchCategories().catch(console.error);
  }, []);

  return (
    <div className="">
      <div className="text-5xl text-center my-8 text-neutral-200">G A L L E R Y</div>
      <div className="mx-auto container grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link to={`/${category.id}`} className="group transition-all mb-2">
            <div className="flex flex-col items-center">
              <img src={category.coverImageUrl} alt={category.title} className="album-image" />
              <div className="mt-4 text-center text-neutral-200">
                <strong>{category.title}</strong>
                <p className="text-xs">{category.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumGallery;
