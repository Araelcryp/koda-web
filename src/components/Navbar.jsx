"use client";

import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaIndustry,
  FaAtom
} from "react-icons/fa";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mostrar dropdown
  const handleEnter = (menu) => {
    if (isMobile) return; // En móvil no se usa hover
    setIsClosing(false);
    setActiveMenu(menu);
  };

  // Ocultar dropdown
  const handleLeave = () => {
    if (isMobile) return;
    setIsClosing(true);
    setTimeout(() => {
      setActiveMenu(null);
      setIsClosing(false);
    }, 250);
  };

  // Click/tap en móviles
  const handleClick = (menu) => {
    if (!isMobile) return; // Solo aplica en móvil
    if (activeMenu === menu) {
      // Si vuelves a tocar el mismo → se cierra
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  // Cerrar si se toca contacto
  const handleContactClick = () => {
    if (isMobile) setActiveMenu(null);
  };

  return (
    <nav className="navbar" onMouseLeave={handleLeave}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>
            Koda<span>.</span>
          </h1>
        </div>

        <ul className="navbar-links">
          <li
            onMouseEnter={() => handleEnter("servicios")}
            onClick={() => handleClick("servicios")}
          >
            <a href="#servicios">Servicios</a>
          </li>

          <li
            onMouseEnter={() => handleEnter("industrias")}
            onClick={() => handleClick("industrias")}
          >
            <a href="#industrias">Industrias</a>
          </li>

          {/* “Nosotros” solo visible en escritorio */}
          {!isMobile && (
            <li onMouseEnter={handleLeave}>
              <a href="#nosotros">Nosotros</a>
            </li>
          )}

          <li>
            <a
              href="#contacto"
              className="contact-link"
              onClick={handleContactClick}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {(activeMenu || isClosing) && (
        <div
          className={`mega-dropdown ${
            isClosing ? "animate-slideUp" : "animate-slideDown"
          }`}
        >
          <div className="mega-content">
            {activeMenu === "servicios" && (
              <>
                <div>
                  <h3><FaCode /> Desarrollo</h3>
                  <ul>
                    <li><a href="#">Software a la Medida</a></li>
                    <li><a href="#">Sitios Web</a></li>
                    <li><a href="#">Aplicaciones Móviles</a></li>
                  </ul>
                </div>
                <div>
                  <h3><FaCloud /> Infraestructura</h3>
                  <ul>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">Ciberseguridad</a></li>
                    <li><a href="#">DevOps & Automatización</a></li>
                  </ul>
                </div>
                <div>
                  <h3><FaRobot /> Innovación</h3>
                  <ul>
                    <li><a href="#">Inteligencia Artificial</a></li>
                    <li><a href="#">Análisis de Datos</a></li>
                    <li><a href="#">Consultoría Digital</a></li>
                  </ul>
                </div>
              </>
            )}

            {activeMenu === "industrias" && (
              <>
                <div>
                  <h3><FaIndustry /> Sectores</h3>
                  <ul>
                    <li><a href="#">Salud</a></li>
                    <li><a href="#">Educación</a></li>
                    <li><a href="#">Construcción</a></li>
                  </ul>
                </div>
                <div>
                  <h3><FaAtom /> Aplicaciones</h3>
                  <ul>
                    <li><a href="#">Android</a></li>
                    <li><a href="#">iOS</a></li>
                    <li><a href="#">Aplicaciones web</a></li>
                  </ul>
                </div>
                <div>
                  <h3><FaRobot /> Transformación</h3>
                  <ul>
                    <li><a href="#">Automatización</a></li>
                    <li><a href="#">Experiencia Digital</a></li>
                    <li><a href="#">Ecosistemas Cloud</a></li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
