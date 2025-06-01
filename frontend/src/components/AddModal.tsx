import { useState } from "react";
import Modal from "./Modal";
import "./css/Modal.css";

interface AddAlbumModalProps {
  onClose: () => void;
  onSave: (title: string, file: File | null, collectionPath: string) => void;
  collectionPath: string;
}

const AddAlbumModal: React.FC<AddAlbumModalProps> = ({ onClose, onSave, collectionPath }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const isSaveDisabled = !title.trim() || !file;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, file, collectionPath);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2>Add New Gallery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Album Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
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

export default AddAlbumModal;
