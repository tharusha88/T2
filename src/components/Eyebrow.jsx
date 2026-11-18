/** Small uppercase label shown above section headings. */
export default function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
