import "../styles/About.css";

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>Quiénes somos</h2>
          <p>
            Somos <span className="highlight">Koda</span>, especialistas en desarrollo de software empresarial, 
            soluciones web y servicios en la nube, enfocados en calidad, innovación y seguridad. 
            Nuestro compromiso es acompañar tu empresa en su transformación digital.
          </p>
          <p>
            Nuestra metodología combina diseño centrado en el usuario, ingeniería ágil y tecnologías modernas 
            para entregar productos que funcionen, escalen y sean mantenibles.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Equipo NexusTech trabajando"
          />
        </div>
      </div>
    </section>
  );
}
