import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import proyectos from "../data/proyectos.json";
import { motion } from "framer-motion";

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
    <header className="backdrop-blur-md bg-white/70 shadow-lg animate-fadeIn relative z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 relative">
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
          className="lg:hidden text-gray-700 focus:outline-none z-50"
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
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-6 absolute lg:static bg-white left-0 w-full lg:w-auto transition-all duration-300 ease-in-out shadow-md lg:shadow-none z-40 ${
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
const proyectos = [
  {
    imagen: "data:image/jpeg;base64,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",
    titulo: "Landing Page para startup",
    descripcion: "Diseño responsive con HTML, CSS y JS.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://lh3.googleusercontent.com/proxy/0cwvcPGPpw5EHknJYXXfrTm4mKd4NGb0c0lTDb66PbcTTtnA5Xu2HuSl0QpTwidryPAKckEjb5eo59bWMm6HMz8TYcUidcB_j0tWzKUi70nncelRLxo",
  },
  {
    imagen: "data:image/jpeg;base64,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",
    titulo: "App de proyectos",
    descripcion: "Aplicación interactiva con almacenamiento local.",
    tecnologias: ["React", "LocalStorage"],
    link: "https://encuentrodemujeres.com.ar/wp-content/uploads/2024/06/mujeres-programacion.jpg",
  },
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDrm0en_z5ybp2CSKy7MEqgoaxOzGjGU7eA&s",
    titulo: "Portafolio Colectivo Interactivo",
    descripcion: "Plataforma digital que muestra los proyectos y talentos del equipo de forma dinámica, usando JSON como base de datos simulada.",
    tecnologias: ["React", "TailwindCSS", "JavaScript"],
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDDJPBR9V_gTW9eVTWn0BhUUN3wHZAssDxw&s",
  },
];
return (
    <main className="bg-gray-50 text-gray-800 min-h-screen p-8">
      {/* Proyectos del equipo */}
       <section id="proyectos" className="py-12">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold inline-block animate-scaleIn reveal-delay-200">
             🚀 Proyectos del equipo
            </h2>
            <div className="w-16 h-1 mt-3 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slideUp reveal-delay-300"></div>
          </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {proyectos.map((p, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={p.imagen}
                alt={p.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
                <p className="text-gray-600 mb-4">{p.descripcion}</p>
                <p className="text-sm text-indigo-600 mb-4">
                  <strong>Tecnologías:</strong> {p.tecnologias.join(", ")}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  Ver más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
