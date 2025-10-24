"use client";
import "../styles/About.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <div className="about-text fade-in">
          <h2>Quiénes somos</h2>
          <p>
            En <span className="highlight">Koda</span> impulsamos la innovación
            digital desarrollando soluciones de software personalizadas,
            seguras y escalables. Acompañamos a las empresas en su camino hacia
            la transformación tecnológica con visión estratégica y humana.
          </p>
          <p>
            Nuestro equipo combina ingeniería, diseño y agilidad para crear
            productos digitales con alto impacto, cuidando cada detalle desde la
            experiencia de usuario hasta la arquitectura del sistema.
          </p>
        </div>

        <div className="about-image fade-in">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Equipo Koda colaborando en desarrollo de software"
          />
        </div>
      </div>
    </section>
  );
}
