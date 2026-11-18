import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { contact, nearby } from "../data/content.js";

const mapsSearch = (place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + " Sri Lanka")}`;

export default function Surroundings() {
  return (
    <section className="surroundings-section section-shell reveal" id="surroundings">
      <div>
        <Eyebrow>WONDER, IN EVERY DIRECTION</Eyebrow>
        <h2>
          <span className="heading-phrase">A hidden gem.</span>
          <br />
          <span className="heading-phrase">Not a</span>{" "}
          <span className="heading-phrase">
            {"world "}
            <em>away.</em>
          </span>
        </h2>
      </div>
      <div className="surroundings-copy">
        <p>
          Find us in Diyatalawa, in the heart of Sri Lanka’s hill country. Close enough to explore Ella, Haputale,
          and Horton Plains. Far enough to feel like it’s just you and the mountains.
        </p>
        <div className="nearby-list">
          {nearby.map(([place, note, distance]) => (
            <a key={place} href={mapsSearch(place)} target="_blank" rel="noreferrer">
              <span>
                <strong>{place}</strong>
                <small>{note}</small>
              </span>
              <span>
                {distance} <ArrowUpRight size={17} />
              </span>
            </a>
          ))}
        </div>
        <a className="text-link" href={contact.mapsUrl} target="_blank" rel="noreferrer">
          {"Find your way to us "}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
