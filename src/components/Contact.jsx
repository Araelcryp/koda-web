import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact-container">
        <h2>Conectemos</h2>
        <p>
          ¿Tienes una idea o proyecto en mente? En <span>Koda</span> te ayudamos a transformarla 
          en una solución tecnológica real y de alto impacto.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Tu nombre"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <textarea
            placeholder="Describe tu proyecto"
            rows="4"
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
