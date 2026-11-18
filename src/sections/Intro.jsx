import { ArrowUpRight, Mountain, TreePine } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";

export default function Intro() {
  return (
    <section className="intro section-shell reveal" id="resort">
      <div className="intro-heading">
        <Eyebrow>NOT FAR AWAY. A WORLD APART.</Eyebrow>
        <h2>
          <span className="heading-phrase">Some places ask you</span>
          <br />
          <span className="heading-phrase">to do more.</span>
          <br />
          <span className="heading-phrase">
            {"Here, "}
            <em>just be.</em>
          </span>
        </h2>
        <div className="intro-signature">
          <Mountain size={32} strokeWidth={1} />
          <span>A HIGHER KIND OF EVERYDAY</span>
        </div>
      </div>
      <div className="intro-story">
        <p className="lead">Tucked into the pine-covered hills of Diyatalawa, a quieter kind of luxury is waiting.</p>
        <p>
          Three acres of open skies, handcrafted hideaways, and the warmth of Sri Lankan hospitality. At Top
          Mountain Resort, we believe the best escapes don’t fill your days. They give them back to you.
        </p>
        <a href="#experiences" className="text-link">
          {"Meet your mountain escape "}
          <ArrowUpRight size={19} />
        </a>
        <div className="intro-facts">
          <div>
            <span>03</span>
            <small>ACRES OF SERENITY</small>
          </div>
          <div>
            <span>01</span>
            <small>EXTRAORDINARY ESCAPE</small>
          </div>
          <TreePine strokeWidth={0.8} size={55} />
        </div>
      </div>
    </section>
  );
}
