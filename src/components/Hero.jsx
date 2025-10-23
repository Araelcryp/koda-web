import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Innovamos el futuro con tecnología y estrategia
          </h1>
          <p>
            En <span className="highlight">Koda</span> impulsamos la transformación digital 
            con soluciones de software personalizadas, eficientes y seguras.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">
              Ver servicios
            </a>
            <a href="#contacto" className="btn-outline">
              Contáctanos
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
            alt="Equipo de desarrollo trabajando"
          />
        </div>
      </div>
    </section>
  );
}
