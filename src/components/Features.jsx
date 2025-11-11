import "../styles/Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* --- Feature 1 --- */}
        <div className="feature-item">
          <div className="feature-image animate-in delay-0">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
              alt="Equipo desarrollando software"
            />
          </div>
          <div className="feature-text animate-in delay-1">
            <h2>Soluciones de software a medida</h2>
            <p>
              Diseñamos y desarrollamos software personalizado que impulsa la productividad 
              y la eficiencia de tu negocio, adaptado exactamente a tus necesidades.
            </p>
            <a href="#contacto" className="btn-primary small">Conoce más</a>
          </div>
        </div>

        {/* --- Feature 2 --- */}
        <div className="feature-item reverse">
          <div className="feature-image animate-in delay-2">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Diseño web moderno"
            />
          </div>
          <div className="feature-text animate-in delay-3">
            <h2>Diseño web profesional</h2>
            <p>
              Creamos sitios web atractivos, responsivos y optimizados para generar impacto y 
              fortalecer tu presencia digital frente a tus clientes.
            </p>
            <a href="#contacto" className="btn-primary small">Solicitar demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
