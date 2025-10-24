import "../styles/Services.css";
import { FaCode, FaMobileAlt, FaCogs, FaCloud } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Desarrollo Web & SaaS",
      desc: "Construimos plataformas escalables y seguras, con una experiencia de usuario impecable y un diseño de alto nivel.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Aplicaciones Móviles",
      desc: "Apps rápidas, modernas y atractivas para Android y iOS, hechas para crecer junto a tu negocio.",
    },
    {
      icon: <FaCogs />,
      title: "Automatización & APIs",
      desc: "Optimizamos tus procesos con integraciones inteligentes, automatización de flujos y APIs eficientes.",
    },
    {
      icon: <FaCloud />,
      title: "Soluciones en la Nube",
      desc: "Infraestructura moderna, segura y flexible para desplegar tus aplicaciones sin límites.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones tecnológicas que impulsan la innovación, eficiencia y crecimiento de tu empresa.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="icon-wrapper">
              <span className="icon">{s.icon}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
