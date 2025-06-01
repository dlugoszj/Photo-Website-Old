import NavBar from "../../components/NavBar";
import "./home.css";
import "/src/assets/css/fonts.css";
import AlbumGallery from "./AlbumGallery";
import CategoryGallery from "./CategoryGallery";
import GenericGallery from "./GenericGallery";

const Home = () => {
  return (
    <div>
      <div>
        <GenericGallery galleryType="" collectionName="albumCategories" galleryTitle="GALLERY" />
      </div>
    </div>
  );
};

export default Home;
