import { ArrowUpRight, MapPin } from "lucide-react";
import Brand from "../components/Brand.jsx";
import { contact } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <div>
          <Brand />
          <p>Your quiet corner of the world.</p>
        </div>
        <a href={`tel:${contact.phoneTel}`} className="footer-phone">
          Let’s make it happen.
          <span>
            {`${contact.phoneDisplay} `}
            <ArrowUpRight size={20} />
          </span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          {"© "}
          {new Date().getFullYear()}
          {" Top Mountain Resort"}
        </span>
        <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
          <MapPin size={13} />
          {" Diyatalawa, Sri Lanka"}
        </a>
        <a href="#home">
          {"A LITTLE CLOSER TO NATURE "}
          <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
