import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- LOGO & DESCRIPTION --- */}
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">Koda</h3>
          <p>
            Desarrollamos soluciones digitales a la medida para empresas que buscan
            innovar, optimizar y crecer en la era tecnológica.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* --- LINKS --- */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* --- LEGAL --- */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
            <li><a href="#">Aviso de Cookies</a></li>
          </ul>
        </div>

        {/* --- CONTACT INFO --- */}
        <div className="footer-col">
          <h4>Contáctanos</h4>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> San José Iturbide, GTO.</li>
            <li><FaPhone /> +52 442-846-9631</li>
            <li><FaEnvelope /> koda.connect.io@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Koda — Innovación y tecnología sin límites.</p>
      </div>
    </footer>
  );
}
