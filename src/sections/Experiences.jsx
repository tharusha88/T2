import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { experiences } from "../data/content.js";

export default function Experiences() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section className="experience-section" id="experiences">
      <div className="experience-inner section-shell">
        <div className="experience-copy reveal">
          <Eyebrow light>THE LUXURY OF LESS</Eyebrow>
          <h2>
            <span className="heading-phrase">A full heart.</span>
            <br />
            <span className="heading-phrase">
              {"An empty "}
              <em>agenda.</em>
            </span>
          </h2>
          <p className="experience-intro">
            Nothing scheduled. Everything to remember.
            <br />
            Let the little moments become the big ones.
          </p>
          <div className="experience-accordion">
            {experiences.map((experience, index) => {
              const isActive = index === active;
              const Icon = experience.icon;
              return (
                <div key={experience.title} className={`experience-item ${isActive ? "active" : ""}`}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`experience-${index}`}
                    onClick={() => setActive(index)}
                  >
                    <span>0{index + 1}</span>
                    {experience.title}
                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {isActive && (
                    <div id={`experience-${index}`} className="experience-description">
                      <p>{experience.description}</p>
                      <span>
                        <Icon size={14} /> {experience.subtitle}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="experience-visual">
          <img key={current.image} src={current.image} loading="lazy" alt={current.title} />
          <div className="experience-image-label">
            <span>THE TOP MOUNTAIN WAY OF LIFE</span>
            <span>
              0{active + 1}
              {" / 03"}
            </span>
          </div>
          <span className="experience-seal">
            LESS DOING<span>more being</span>
            <svg viewBox="0 0 60 30" aria-hidden="true">
              <path d="M3 25 22 3 36 21 44 11 57 25" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
