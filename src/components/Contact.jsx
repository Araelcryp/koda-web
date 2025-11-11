"use client";
import "../styles/Contact.css";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/koda.connect.io@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setModalMessage("Gracias por tu mensaje. ¡Te contactaremos pronto!");
        form.reset();
      } else {
        setModalMessage(
          "❌ Ocurrió un error al enviar tu mensaje. Intenta de nuevo."
        );
      }
    } catch (error) {
      setModalMessage("❌ Error de conexión. Intenta más tarde.");
    }

    setModalVisible(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-container fade-up">
        <h2>Conectemos</h2>
        <p>
          ¿Tienes una idea o proyecto en mente? En{" "}
          <span className="highlight">Koda</span> te ayudamos a convertirla en
          una solución digital sólida, escalable y de alto impacto.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group fade-up delay-1">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              aria-label="Tu nombre"
              required
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              required
            />

            <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            aria-label="Número de teléfono"
            pattern="(\+52)?[0-9]{10}"
            title="Debe ser un número de 10 dígitos, opcionalmente con +52 al inicio"
            required
            />

            
          <select name="tipo_proyecto" aria-label="Tipo de proyecto" required>
            <option value="">Selecciona un tipo de proyecto</option>
            <option value="web">Desarrollo Web</option>
            <option value="mobile">Desarrollo Móvil</option>
            <option value="branding">Branding</option>
            <option value="otro">Otro</option>
          </select>

          </div>

          <textarea
            name="mensaje"
            placeholder="Describe tu proyecto o idea..."
            rows="5"
            aria-label="Mensaje"
            required
          ></textarea>

          <button type="submit" className="fade-up delay-2">
            Enviar mensaje
          </button>
        </form>

        {/* --- Redes sociales (react-icons) --- */}
        <div className="social fade-up delay-2">

          <p>Contáctanos directamente</p>

          <div className="social-icons">
            <a className="social-link facebook" href="https://www.facebook.com/profile.php?id=61582350671322" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
            <a className="social-link instagram" href="https://www.instagram.com/koda.develop/" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a className="social-link whatsapp" href="https://wa.me/524191202525" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {modalVisible && (
        <div className="modal-overlay" onClick={() => setModalVisible(false)}>
          <div className="modal fade-up visible" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}