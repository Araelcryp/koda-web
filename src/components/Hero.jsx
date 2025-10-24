import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-text animate-in delay-0">
          <h1>
            Impulsamos tu <span className="highlight">presencia digital</span>
          </h1>
          <p>
            En <span className="highlight">Koda</span> convertimos ideas en experiencias tecnológicas excepcionales: 
            software a medida, sitios web y soluciones inteligentes.
          </p>
          <a href="#servicios" className="btn-primary animate-in delay-1">
            Explorar servicios
          </a>
        </div>

        <div className="hero-image animate-in delay-2">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tecnología moderna representando innovación digital"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
