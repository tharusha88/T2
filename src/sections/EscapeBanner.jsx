import { ArrowUpRight } from "lucide-react";
import { images } from "../data/content.js";

export default function EscapeBanner({ onPlanEscape }) {
  return (
    <section className="escape-banner">
      <img src={images.hero} loading="lazy" alt="A peaceful panorama across Sri Lanka's green mountain valleys" />
      <div className="escape-content reveal">
        <span className="eyebrow light">SOMEWHERE YOU’LL WANT TO COME BACK TO</span>
        <h2>
          <span className="heading-phrase">The hills</span>{" "}
          <span className="heading-phrase">are calling.</span>
          <br />
          <em className="heading-phrase">Take your time.</em>
        </h2>
        <button type="button" className="button button-cream" onClick={onPlanEscape}>
          {"Let’s plan your escape "}
          <ArrowUpRight size={18} />
        </button>
        <p>No crowds. No rush. Just a little more you.</p>
      </div>
    </section>
  );
}
