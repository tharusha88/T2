import { ArrowDown, ArrowUpRight, MapPin, Play } from "lucide-react";
import { images } from "../data/content.js";

export default function Hero({ onWatchFilm }) {
  return (
    <section className="hero" aria-label="Welcome to Top Mountain Resort">
      <img
        className="hero-image"
        src={images.hero}
        alt="Layers of lush green mountains and forest in Sri Lanka's hill country"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="hero-top">
        <span>
          <MapPin size={13} />
          {" DIYATALAWA, SRI LANKA"}
        </span>
        <span className="hero-coordinate">{"6°48′ N   80°57′ E"}</span>
      </div>
      <div className="hero-content">
        <span className="hero-kicker">A DIFFERENT PERSPECTIVE ON GETTING AWAY</span>
        <h1>
          <span className="heading-phrase">A little closer</span>
          <br />
          <span className="heading-phrase">
            {"to "}
            <em>nature.</em>
          </span>
        </h1>
        <p>
          Less rush. More wonder. Your own quiet corner
          <br className="desktop-break" />
          {" of Sri Lanka’s beautiful hill country."}
        </p>
        <a className="button button-cream" href="#stays">
          {"Find your hideaway "}
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="hero-bottom">
        <a href="#resort" className="scroll-link">
          <span className="circle-arrow">
            <ArrowDown size={17} />
          </span>
          {" A slower story starts here"}
        </a>
        <button type="button" className="film-button" onClick={onWatchFilm}>
          <span className="film-thumbnail">
            <img src={images.estate} alt="" />
            <Play size={17} fill="currentColor" />
          </span>
          <span>
            A glimpse of the good life
            <small>
              {"WATCH THE FILM "}
              <ArrowUpRight size={12} />
            </small>
          </span>
        </button>
      </div>
      <span className="hero-side-note">NATURE SETS THE PACE. YOU JUST FOLLOW.</span>
    </section>
  );
}
