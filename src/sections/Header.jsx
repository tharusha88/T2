import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "../components/Brand.jsx";
import { navLinks } from "../data/content.js";

export default function Header({ menuOpen, onToggleMenu, onCloseMenu, onPlanEscape }) {
  return (
    <>
      <header className="site-header" id="home">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <button type="button" className="button button-dark header-book" onClick={onPlanEscape}>
          {"Plan your escape "}
          <ArrowUpRight size={16} />
        </button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={onCloseMenu}>
              {label}
              <ArrowUpRight size={20} />
            </a>
          ))}
          <button type="button" className="button button-dark" onClick={onPlanEscape}>
            {"Plan your escape "}
            <ArrowUpRight size={17} />
          </button>
        </nav>
      )}
    </>
  );
}
