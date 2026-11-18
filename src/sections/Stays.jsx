import { useState } from "react";
import { ArrowUpRight, Minus, Plus, Users } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { stays } from "../data/content.js";

const SIGNATURE_COUNT = 3;

export default function Stays({ onSelectStay }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? stays : stays.slice(0, SIGNATURE_COUNT);

  return (
    <section className="stays-section section-shell" id="stays">
      <div className="section-heading reveal">
        <div>
          <Eyebrow>STAY A LITTLE LONGER</Eyebrow>
          <h2>
            <span className="heading-phrase">Find your kind</span>{" "}
            <span className="heading-phrase">
              {"of "}
              <em>quiet.</em>
            </span>
          </h2>
        </div>
        <p>
          {"No two hideaways are quite the same. "}
          <br />
          Every one feels a world away.
        </p>
      </div>
      <div className="stay-grid">
        {visible.map((stay, index) => (
          <article key={stay.name} className="stay-card">
            <div className="stay-image-button">
              <img src={stay.image} loading="lazy" alt={stay.alt ?? `${stay.name} at Top Mountain Resort`} />
              <span className="image-label">
                0{index + 1}
                {" / "}
                {stay.type}
              </span>
              <span className="image-arrow" aria-hidden="true">
                <ArrowUpRight size={21} />
              </span>
            </div>
            <p className="card-eyebrow">{stay.tag}</p>
            <button type="button" className="stay-title" aria-label={`View ${stay.name}`} onClick={() => onSelectStay(stay)}>
              {stay.name}
            </button>
            <div className="stay-meta">
              <span>
                <Users size={14} /> {stay.guests}
              </span>
              <span>{stay.area}</span>
              <span>Mountain living</span>
            </div>
            <div className="stay-bottom">
              <span>
                {"From "}
                <strong>
                  {"LKR "}
                  {stay.price}
                </strong>
                <small>{" / night"}</small>
              </span>
              <span className="stay-card-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="stays-foot">
        <span>Made for two. Made for the whole family. Made for you.</span>
        <button type="button" className="text-link" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show our signature stays" : "Explore all stays"}{" "}
          {showAll ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>
    </section>
  );
}
