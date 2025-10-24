import "../styles/Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Koda</h3>

        <p className="footer-text">
          Innovación, tecnología y desarrollo a la medida para empresas que buscan crecer digitalmente.
        </p>

        <div className="footer-links">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Koda — Innovación sin límites.
        </p>
      </div>
    </footer>
  );
}
