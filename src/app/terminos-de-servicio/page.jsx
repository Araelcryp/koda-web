"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation"; // Importamos useRouter
import "../politica-de-privacidad/PrivacyPolicy.css"; // Usamos los mismos estilos

export default function TerminosDeServicio() {
  const router = useRouter(); // Usamos useRouter para manejar la navegación

  const handleBackClick = () => {
    router.back(); // Esto permite al usuario regresar a la página anterior
  };

  return (
    <>
      <Navbar />

      <section className="privacy-hero">
        <div className="privacy-container">
          <h1>Términos de servicio</h1>
          <p>
            En <strong>Koda</strong>, queremos asegurarnos de que entiendas los términos y condiciones bajo los cuales proporcionamos nuestros servicios.
          </p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-container">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al utilizar nuestros servicios, aceptas estos Términos de Servicio y nuestra Política de Privacidad. Si no estás de acuerdo con estos términos, no debes utilizar nuestros servicios.
          </p>

          <h2>2. Uso de nuestros servicios</h2>
          <p>
            Te otorgamos una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar nuestros servicios conforme a estos términos.
          </p>

          <h2>3. Responsabilidades del usuario</h2>
          <p>
            El usuario se compromete a utilizar los servicios de forma responsable y de acuerdo con las leyes aplicables. No puedes utilizar nuestros servicios para actividades ilegales o no autorizadas.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual sobre el contenido y los servicios ofrecidos por Koda son propiedad exclusiva de la empresa, a menos que se indique lo contrario.
          </p>

          <h2>5. Modificaciones en los términos</h2>
          <p>
            Koda se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en este sitio.
          </p>

          <h2>6. Limitación de responsabilidad</h2>
          <p>
            Koda no se hace responsable de los daños directos, indirectos o incidentales que puedan surgir del uso o imposibilidad de uso de nuestros servicios.
          </p>

          <h2>7. Resolución de disputas</h2>
          <p>
            Cualquier disputa relacionada con estos términos será resuelta mediante arbitraje en el lugar donde se haya contratado el servicio.
          </p>

          <h2>8. Terminación del servicio</h2>
          <p>
            Koda se reserva el derecho de suspender o terminar el acceso de un usuario a los servicios si considera que se ha violado cualquiera de estos términos.
          </p>

          <p className="privacy-update">
            Última actualización: <strong>Octubre 2025</strong>
          </p>

          {/* Botón de regreso */}
          <button className="back-button" onClick={handleBackClick}>
            Regresar
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
