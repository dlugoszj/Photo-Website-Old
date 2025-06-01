import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ImageGallery from "./pages/Home/ImageGallery";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import AlbumGallery from "./pages/Home/AlbumGallery";
import GenericGallery from "./pages/Home/GenericGallery";

function App() {
  // const { imageCategories, images } = getCategoryImages();
  // console.log("cats");
  // console.log(imageCategories);
  // console.log("imgs");
  // console.log(images);
  return (
    <>
      <div className="gradient_background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryId" element={<GenericGallery galleryType="album" />} />
          <Route path="/:categoryId/:galleryId" element={<ImageGallery />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <GenericGallery
                  galleryType="gallery"
                  collectionName="albumCategories"
                  galleryTitle="GALLERY"
                  adminMode={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/:categoryId"
            element={
              <ProtectedRoute>
                <GenericGallery
                  galleryType="album"
                  // collectionName="albumCategories"
                  // galleryTitle="GALLERY"
                  adminMode={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/:categoryId/:galleryId"
            element={
              <ProtectedRoute>
                <ImageGallery adminMode={true} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <script src="../dist/bundle.js"></script>
      </div>
    </>
  );
}

export default App;
