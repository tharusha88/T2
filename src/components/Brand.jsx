export default function Brand({ light = false }) {
  return (
    <a href="#home" className={`brand ${light ? "brand-light" : ""}`} aria-label="Top Mountain Resort home">
      <svg viewBox="0 0 58 45" fill="none" aria-hidden="true">
        <path d="M3 34 21 7l12 18 7-11 15 20H3Z" />
        <path d="m14 18 7 5 5-8M10 41h39M33 25l6 9" />
      </svg>
      <span>
        TOP MOUNTAIN<small>R E S O R T · D I Y A T A L A W A</small>
      </span>
    </a>
  );
}
