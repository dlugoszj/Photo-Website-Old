import { useState } from "react";
import Modal from "./Modal";
import "./css/Modal.css";

interface AddAlbumModalProps {
  onClose: () => void;
  onSave: (imageHeight: number, imageWidth: number, file: File | null, collectionPath: string) => void;
  collectionPath: string;
}

const AddImageModal: React.FC<AddAlbumModalProps> = ({ onClose, onSave, collectionPath }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const isSaveDisabled = !file;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setWidth(img.naturalWidth);
          setHeight(img.naturalHeight);
          console.log(`Image dimensions: ${img.width}x${img.height}`);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      console.log("selfile null");
      setWidth(0);
      setHeight(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(height, width, file, collectionPath);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2>Add Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={isSaveDisabled} className="save-button">
          Save
        </button>
        <button type="button" onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default AddImageModal;
