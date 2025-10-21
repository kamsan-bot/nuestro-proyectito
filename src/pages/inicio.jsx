import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import proyectos from "../data/proyectos.json";
import habilidades from "../data/habilidades.json";
import equipo from "../data/equipo.json";
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
const proyectos = [
  {
    imagen: "data:image/jpeg;base64,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",
    titulo: "Landing Page para startup",
    descripcion: "Diseño responsive con HTML, CSS y JS.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "data:image/jpeg;base64,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",
  },
  {
    imagen: "data:image/jpeg;base64,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",
    titulo: "App de proyectos",
    descripcion: "Aplicación interactiva con almacenamiento local.",
    tecnologias: ["React", "LocalStorage"],
    link: "data:image/jpeg;base64,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",
  },
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDrm0en_z5ybp2CSKy7MEqgoaxOzGjGU7eA&s",
    titulo: "Portafolio Colectivo Interactivo",
    descripcion: "Plataforma digital que muestra los proyectos y talentos del equipo de forma dinámica, usando JSON como base de datos simulada.",
    tecnologias: ["React", "TailwindCSS", "JavaScript"],
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDDJPBR9V_gTW9eVTWn0BhUUN3wHZAssDxw&s",
  },
];

const habilidades = [
  { nombre: "HTML", nivel: "Avanzado" },
  { nombre: "CSS", nivel: "Intermedio" },
  { nombre: "JavaScript", nivel: "Avanzado" },
  { nombre: "React", nivel: "Intermedio" },
];

const equipo = [
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQa70z60Do9vtDFaKI33S6Ts3At-fewwUZgtwSwrfpIp-NarCCyj_esu4KEYRJmECsWY&usqp=CAU",
    nombre: "Kamila",
    rol: "Desarrolladora Frontend",
    descripcion: "Apasionada por el diseño y la experiencia de usuario.",
  },
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-IrlE_SxWFCsGjkyDvAGkT_zxDN4VQn3cimLxTHw2xNiGYIB9RUWLearBXYUawK16DY&usqp=CAU",
    nombre: "luana",
    rol: "Backend Developer",
    descripcion: "Le gusta automatizarlo todo y optimizar el rendimiento.",
  },
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOGBo3aUb24191tEq5nHk2PIr5GTT1-qRG4Z39Ss40cRngZNTFG6NtHdSe_0RxWkJUR8&usqp=CAU",
    nombre: "Ariana",
    rol: "Desarrolladora Frontend",
    descripcion: "Apasionada por el diseño y la experiencia de usuario.",
  },
];
return (
    <main className="bg-gray-50 text-gray-800 min-h-screen p-8">
      {/* 🚀 Proyectos del equipo */}
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

      {/* 💡 Habilidades */}
      <section id="habilidades" className="py-12 bg-yellow-50">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold inline-block animate-scaleIn reveal-delay-200">
           💡 Habilidades del equipo
            </h2>
            <div className="w-16 h-1 mt-3 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slideUp reveal-delay-300"></div>
          </div>
        <ul className="flex flex-wrap justify-center gap-4">
          {habilidades.map((h, index) => (
            <motion.li
              key={index}
              className="bg-yellow-100 px-5 py-3 rounded-full text-gray-800 font-medium hover:bg-yellow-200 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {h.nombre} — {h.nivel}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* 👥 Equipo */}
      <section id="equipo" className="py-12">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold inline-block animate-scaleIn reveal-delay-200">
           👥Nuestro Equipo
            </h2>
            <div className="w-16 h-1 mt-3 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slideUp reveal-delay-300"></div>
          </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {equipo.map((persona, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center w-72 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-200"
              />
              <h4 className="text-lg font-semibold">{persona.nombre}</h4>
              <p className="text-pink-500 font-medium">{persona.rol}</p>
              <p className="text-gray-600 mt-2">{persona.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
