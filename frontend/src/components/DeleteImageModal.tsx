import { useState } from "react";
import Modal from "./Modal";
import "./css/Modal.css";

interface DeleteImageModalProps {
  onClose: () => void;
  onDelete: (collectionPath: string, galleryName: string) => void;
  collectionPath: string;
  galleryName: string;
  imageSrc?: string;
  adminMode?: boolean;
}

const DeleteImageModal: React.FC<DeleteImageModalProps> = ({
  onClose,
  onDelete,
  collectionPath,
  galleryName,
  imageSrc,
  adminMode = false,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDelete(collectionPath, galleryName);
    onClose();
  };
  console.log("Del MODAL!");
  console.log(collectionPath);
  console.log("Gname");
  console.log(galleryName);
  console.log("endGname");
  return (
    <Modal onClose={onClose} backgroundClassName="image-modal-background" contentClassName="image-modal-content">
      <img src={imageSrc}></img>
      {adminMode && (
        <button className="delete-button" onClick={handleSubmit}>
          Delete Image
        </button>
      )}
    </Modal>
  );
};

export default DeleteImageModal;
