import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const features = [
  {
    title: "Proyectos Interactivos",
    text: "Explora proyectos guiados de programación, robótica y ciencia de forma práctica y creativa.",
    img: "https://cdn-icons-png.flaticon.com/512/11258/11258690.png",
    alt: "icono de foco",
  },
  {
    title: "Bienestar Emocional",
    text: "Herramientas de salud emocional, mindfulness y diarios digitales. Tu mente es tan importante como tus ideas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeI0OXILUg1tOEFBaqsXihqN4ivfVZMgUYbA&s",
    alt: "icono de cerebro",
  },
  {
    title: "Inspiración Femenina",
    text: "Descubre historias de científicas y creadoras que rompen barreras. ¡Si ellas pudieron, tú también puedes!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiPoTDp-HSKatEiUm5wS0DCkUVQ3W5ZPeqg&s",
    alt: "icono de mujer",
  },
];

const cards = [
  {
    title: "Nuestra Identidad",
    text: "Promovemos la inclusión, el trabajo en equipo y la creatividad para que más chicas puedan descubrir su potencial.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWm2tLvx2qd2MyR0nk6R8qh16vxP-7GjqOanNmwK4EcsXfHoT9uEV5rH_3EL4DEuFcf1I&usqp=CAU",
    link: "/quienes",
  },
  {
    title: "Nuestra Historia",
    text: "Creamos este espacio para romper barreras, impulsar vocaciones STEM y fortalecer el bienestar emocional.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaTkXGBFXWco4i78ZbkGjTx8P-MdPcEWA3w&s",
    link: "/quienes",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="backdrop-blur-md bg-white/70 shadow-lg animate-fadeIn">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/personaje-robot-con-inteligencia-artificial-y-expresion-iluminada-3d-icon-png-download-11431320.png"
            alt="TechBloom logo"
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold text-gray-800">TechBloom</span>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* LINKS */}
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-6 absolute lg:static bg-white left-0 w-full lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-16 opacity-100 visible"
              : "top-[-400px] opacity-0 lg:opacity-100 lg:visible"
          }`}
        >
          <li>
            <a
              href="/"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/quienes"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              Quiénes somos
            </a>
          </li>
          <li>
            <a
              href="/valores"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              Nuestros valores
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div>
      <section className="relative flex items-center justify-center text-white text-center min-h-[80vh] bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 animate-fadeIn">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative container mx-auto px-4 animate-slideUp reveal-delay-100">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-scaleIn reveal-delay-200">
            TechBloom
          </h1>

          <h4 className="text-xl md:text-2xl font-light mb-6 max-w-2xl mx-auto animate-fadeIn reveal-delay-300">
            Donde las mentes brillantes florecen: Ciencia, Tecnología y
            Bienestar para chicas que quieren cambiar el mundo.
          </h4>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8 animate-fadeIn reveal-delay-400">
            TechBloom es una plataforma digital interactiva creada para niñas y
            adolescentes que sueñan con transformar el mundo a través de la
            ciencia, la tecnología y la creatividad.
          </p>

          <a
            href="/valores"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg animate-slideUp reveal-delay-500"
          >
            Descubre Más
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-gray-800 animate-fadeIn">
        <div className="container mx-auto px-6 animate-slideUp reveal-delay-100">
          {/* Título */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold inline-block animate-scaleIn reveal-delay-200">
              ¿Qué ofrecemos en TechBloom?
            </h2>
            <div className="w-16 h-1 mt-3 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slideUp reveal-delay-300"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-md text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slideUp reveal-delay-${
                  100 + index * 100
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 animate-slideUp reveal-delay-100">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shadow-md bg-gray-50 rounded-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-slideUp reveal-delay-${
                100 + index * 100
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1">
                  <h5 className="text-xl font-bold mb-2 text-gray-800">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-600">{card.text}</p>
                  <a
                    href={card.link}
                    className="inline-block bg-blue-600 text-white font-semibold mt-4 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Saber más
                  </a>
                </div>
                <div className="flex-shrink-0 w-32">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Formulario() {
  const [sugerencia, setSugerencia] = useState("");
  const [mensaje, setMensaje] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (sugerencia.trim().length < 5) {
      setMensaje("La sugerencia debe tener al menos 5 caracteres.");
      return;
    }
    setMensaje("Gracias por tu sugerencia!");
    setSugerencia("");
  }

  return (
    <div>
      <form
        id="form-sugerencia"
        onSubmit={onSubmit}
        noValidate
        className="max-w-md mx-auto shadow-lg p-6 rounded-2xl bg-white animate-fadeIn reveal-delay-200"
      >
        <div className="mb-4">
          <label
            htmlFor="sugerencia"
            className="block text-gray-700 font-medium mb-2"
          >
            Tu sugerencia
          </label>
          <textarea
            id="sugerencia"
            name="sugerencia"
            rows={3}
            value={sugerencia}
            onChange={(e) => setSugerencia(e.target.value)}
            required
            minLength={5}
            placeholder="¿Qué te gustaría ver en TechBloom?"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
          />
          {mensaje && <p className="text-red-500 text-sm mt-1">{mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Enviar sugerencia
        </button>

        <div
          id="respuesta-sugerencia"
          className="mt-3 text-center font-semibold text-gray-700"
        >
          {mensaje && mensaje.includes("Gracias") ? mensaje : null}
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 animate-fadeIn">
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
            Instagram: @techbloom <br /> YouTube: TechBloom oficial
          </p>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-xl font-bold mb-2">Contacto</h4>
          <p className="text-gray-400">
            info@techbloom.org <br /> +51 987 654 399
          </p>
        </div>
      </div>

      {/* Íconos */}
      <div className="mt-8 flex justify-center md:justify-end gap-6 text-2xl animate-slideUp reveal-delay-200">
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

export default function Inicio() {
  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Formulario />
        </div>
      </section>
    </div>
  );
}
