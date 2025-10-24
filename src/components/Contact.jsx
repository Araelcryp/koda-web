"use client";
import "../styles/Contact.css";
import { useEffect } from "react";

export default function Contact() {
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
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="contact">
      <div className="contact-container fade-in">
        <h2>Conectemos</h2>
        <p>
          ¿Tienes una idea o proyecto en mente? En{" "}
          <span className="highlight">Koda</span> te ayudamos a convertirla en
          una solución digital sólida, escalable y de alto impacto.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
          </div>
          <textarea
            placeholder="Describe tu proyecto o idea..."
            rows="5"
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
