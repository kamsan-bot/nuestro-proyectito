import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 */}
        <div>
          <h4 className="text-xl font-bold mb-2">TechBloom</h4>
          <p className="text-gray-400">
            Cambiando el mundo con ciencia, tecnología y bienestar.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-xl font-bold mb-2">Síguenos</h4>
          <p className="text-gray-400">
            Instagram: @techbloom <br />
            YouTube: TechBloom oficial
          </p>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-xl font-bold mb-2">Contacto</h4>
          <p className="text-gray-400">
            info@techbloom.org <br />
            +51 987 654 399
          </p>
        </div>
      </div>

      {/* Íconos */}
      <div className="mt-8 flex justify-center md:justify-end gap-6 text-2xl">
        <a
          href="https://www.whatsapp.com/?lang=es_LA"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-500 transition-colors"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TechBloom — Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
