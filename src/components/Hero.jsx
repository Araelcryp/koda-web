import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-centered">
      <div className="hero-overlay"></div>

      <div className="hero-inner animate-in delay-0">
        <h1>
          Impulsamos tu <span className="highlight">presencia digital</span>
        </h1>
        <p>
          En <span className="highlight">Koda</span> convertimos ideas en experiencias tecnológicas excepcionales: 
          software a medida, sitios web y soluciones inteligentes.
        </p>
        <div className="hero-buttons animate-in delay-1">
          <a href="#servicios" className="btn-primary">Explorar servicios</a>
          {/* <a href="#contacto" className="btn-secondary">Contacto</a> */}
        </div>
      </div>
    </section>
  );
}
