import Modal from "../components/Modal.jsx";
import { images } from "../data/content.js";
import { asset } from "../lib/asset.js";

export default function FilmModal({ onClose }) {
  return (
    <Modal label="A glimpse of Top Mountain Resort" onClose={onClose} className="film-modal">
      <video controls autoPlay playsInline poster={images.estate} src={asset("resort-film.mp4")}>
        <track kind="captions" srcLang="en" label="Scenic film — no dialogue" src={asset("film-captions.vtt")} default />
      </video>
      <p>A glimpse of the good life at Top Mountain Resort.</p>
    </Modal>
  );
}
