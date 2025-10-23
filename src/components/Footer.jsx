import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Koda — Innovación y tecnología sin límites.</p>
      <div className="footer-links">
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">GitHub</a>
      </div>
    </footer>
  );
}
