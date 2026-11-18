import { ArrowUpRight, Coffee, Flame } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { images } from "../data/content.js";

export default function Dining({ onEnquire }) {
  return (
    <section className="dining-section section-shell reveal">
      <div className="dining-photo">
        <img src={images.balcony} loading="lazy" alt="An open-air veranda at the resort, surrounded by lush gardens" />
        <span className="photo-caption">GOOD FOOD. EVEN BETTER COMPANY.</span>
      </div>
      <div className="dining-copy">
        <Eyebrow>A TASTE OF WHERE YOU ARE</Eyebrow>
        <h2>
          <span className="heading-phrase">From our kitchen.</span>
          <br />
          <span className="heading-phrase">
            {"With "}
            <em>love.</em>
          </span>
        </h2>
        <p>
          Honest food, local flavours, and a view that makes you linger. From a warming Sri Lankan curry to tea as
          the sun slips behind the hills, every meal is a moment worth staying for.
        </p>
        <div className="dining-notes">
          <span>
            <Coffee size={17} />
            {" Sunset Ceylon tea"}
          </span>
          <span>
            <Flame size={17} />
            {" Campfire BBQ"}
          </span>
        </div>
        <button type="button" className="text-link" onClick={onEnquire}>
          {"Come hungry. Leave happy. "}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
