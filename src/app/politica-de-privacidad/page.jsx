"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../politica-de-privacidad/PrivacyPolicy.css";

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Navbar />

      <section className="privacy-hero">
        <div className="privacy-container">
          <h1>Política de privacidad</h1>
          <p>
            En <strong>Koda</strong>, nos comprometemos a proteger tu información personal y garantizar la transparencia sobre cómo la usamos.
          </p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-container">
          <h2>1. Información que recopilamos</h2>
          <p>
            Recopilamos información personal que nos proporcionas directamente, como nombre, correo electrónico, teléfono y datos de tu empresa,
            cuando solicitas información o utilizas nuestros servicios.
          </p>

          <h2>2. Uso de la información</h2>
          <p>
            La información recopilada se utiliza para ofrecer y mejorar nuestros servicios, personalizar la experiencia del usuario, procesar solicitudes,
            y cumplir con nuestras obligaciones legales.
          </p>

          <h2>3. Protección de datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.
            Sin embargo, ningún sistema es completamente seguro, por lo que te recomendamos mantener tus dispositivos protegidos.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación. Puedes configurar tu navegador para rechazar las cookies
            si así lo prefieres.
          </p>

          <h2>5. Enlaces a terceros</h2>
          <p>
            Este sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios.
          </p>

          <h2>6. Tus derechos</h2>
          <p>
            Puedes acceder, rectificar o eliminar tus datos personales enviando un correo a{" "}
            <a href="mailto:contacto@koda.com.mx">contacto@koda.com.mx</a>.
          </p>

          <h2>7. Cambios en esta política</h2>
          <p>
            Koda puede actualizar esta política ocasionalmente. Publicaremos cualquier cambio en esta misma página con la fecha de actualización.
          </p>

          <p className="privacy-update">
            Última actualización: <strong>Octubre 2025</strong>
          </p>
        </div>
      </section>
    </>
  );
}
