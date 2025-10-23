"use client";

import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleEnter = (menu) => {
    setIsClosing(false);
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    // Inicia animación de salida
    setIsClosing(true);
    setTimeout(() => {
      setActiveMenu(null);
      setIsClosing(false);
    }, 250); // Duración igual a la animación CSS
  };

  return (
    <nav className="navbar" onMouseLeave={handleLeave}>
      {/* --- NAV MAIN BAR --- */}
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Koda</h1>
        </div>

        <ul className="navbar-links">
          <li>
            <a
              href="#servicios"
              onMouseEnter={() => handleEnter("servicios")}
            >
              Servicios
            </a>
          </li>
          <li
            onMouseEnter={() => handleEnter("industrias")}
          >
            <a href="#industrias">Industrias</a>
          </li>
          <li onMouseEnter={handleLeave}>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>

      {/* --- MEGA DROPDOWN --- */}
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
                  <h3>Desarrollo</h3>
                  <ul>
                    <li><a href="#">Software a la Medida</a></li>
                    <li><a href="#">Aplicaciones Web</a></li>
                    <li><a href="#">Aplicaciones Móviles</a></li>
                  </ul>
                </div>
                <div>
                  <h3>Infraestructura</h3>
                  <ul>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">Ciberseguridad</a></li>
                    <li><a href="#">DevOps & Automatización</a></li>
                  </ul>
                </div>
                <div>
                  <h3>Innovación</h3>
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
                  <h3>Sectores</h3>
                  <ul>
                    <li><a href="#">Salud</a></li>
                    <li><a href="#">Educación</a></li>
                    <li><a href="#">Finanzas</a></li>
                  </ul>
                </div>
                <div>
                  <h3>Tecnología</h3>
                  <ul>
                    <li><a href="#">Blockchain</a></li>
                    <li><a href="#">IoT</a></li>
                    <li><a href="#">Realidad Aumentada</a></li>
                  </ul>
                </div>
                <div>
                  <h3>Transformación</h3>
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
