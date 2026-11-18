import { ArrowLeft, ArrowRight } from "lucide-react";
import Modal from "../components/Modal.jsx";
import { gallery } from "../data/content.js";

const pad = (n) => String(n).padStart(2, "0");

export default function Lightbox({ index, onChange, onClose }) {
  const photo = gallery[index];
  const count = gallery.length;

  return (
    <Modal label="Resort photo gallery" onClose={onClose} className="lightbox-modal">
      <img src={photo.src} alt={photo.title} />
      <div className="lightbox-footer">
        <button
          type="button"
          className="round-button"
          aria-label="Previous photo"
          onClick={() => onChange((index - 1 + count) % count)}
        >
          <ArrowLeft size={20} />
        </button>
        <span>
          {photo.title}
          <small>
            {pad(index + 1)}
            {" / "}
            {pad(count)}
          </small>
        </span>
        <button type="button" className="round-button" aria-label="Next photo" onClick={() => onChange((index + 1) % count)}>
          <ArrowRight size={20} />
        </button>
      </div>
    </Modal>
  );
}
