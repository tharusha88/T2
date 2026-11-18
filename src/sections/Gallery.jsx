import { Expand } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { gallery } from "../data/content.js";

const GRID_COUNT = 4;

export default function Gallery({ onOpenPhoto }) {
  return (
    <section className="gallery-section">
      <div className="gallery-heading section-shell reveal">
        <div>
          <Eyebrow>POSTCARDS FROM UP HERE</Eyebrow>
          <h2>
            <span className="heading-phrase">No filter.</span>{" "}
            <span className="heading-phrase">
              {"Just "}
              <em>feeling.</em>
            </span>
          </h2>
        </div>
        <span>A few little reasons to get away.</span>
      </div>
      <div className="gallery-track">
        {gallery.slice(0, GRID_COUNT).map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`gallery-photo gallery-photo-${index}`}
            onClick={() => onOpenPhoto(index)}
            aria-label={`Enlarge photo: ${photo.title}`}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <span>
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
