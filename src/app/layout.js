import "./globals.css";
import "../styles/Navbar.css";
import "../styles/Hero.css";
import "../styles/About.css";
import "../styles/Services.css";
import "../styles/Contact.css";
import "../styles/Footer.css";

export const metadata = {
  title: "NexusTech - Innovación y Tecnología",
  description: "Desarrollo de software, soluciones web y transformación digital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
