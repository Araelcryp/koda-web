import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "Desarrollo Web & SaaS",
      desc: "Creamos plataformas escalables con interfaces atractivas y seguras.",
      icon: "💻",
    },
    {
      title: "Aplicaciones Móviles",
      desc: "Apps nativas e híbridas que ofrecen experiencias fluidas y modernas.",
      icon: "📱",
    },
    {
      title: "Cloud & DevOps",
      desc: "Arquitectura, despliegue e infraestructura optimizada en la nube.",
      icon: "☁️",
    },
    {
      title: "Ciberseguridad",
      desc: "Protegemos tus sistemas con auditorías, cifrado y buenas prácticas.",
      icon: "🔒",
    },
    {
      title: "Data & AI",
      desc: "Transformamos datos en decisiones inteligentes mediante IA.",
      icon: "🤖",
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="services-container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
