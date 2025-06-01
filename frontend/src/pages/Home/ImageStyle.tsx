import "../../components/css/Modal.css";
import { RenderImageProps } from "react-photo-gallery";
import "./photogrid.css";

const imageStyle: React.FC<RenderImageProps> = ({ index, left, top, photo, margin, direction }) => {
  console.log(photo);
  const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
  };
  //   const style: React.CSSProperties = {
  //     margin,
  //     position: direction === "column" ? "absolute" : "relative",
  //     left,
  //     top,
  //     cursor: "pointer",
  //   };
  const containerStyle: React.CSSProperties = {
    margin,
    position: direction === "column" ? "absolute" : "relative",
    left,
    top,
    cursor: "pointer",
    backgroundColor: "#eee",
    overflow: "hidden",
  };
  return (
    <div style={containerStyle}>
      <img src={photo.src} width={photo.width} height={photo.height}></img>
      {/* <button className="delete-button">BALLS</button> */}
    </div>
  );
};

export default imageStyle;
