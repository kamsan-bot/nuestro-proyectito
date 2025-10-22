import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import proyectos from "../data/proyectos.json";
import habilidades from "../data/habilidades.json";
import equipo from "../data/equipo.json";
import { motion } from "framer-motion";

function Quienes() {
  const team = [
    {
      name: "Ariana",
      role: "Fundadora",
      img: "../img/Ariana.png",
      linkedin: "https://pe.linkedin.com/",
      twitter: "https://x.com/?lang=es",
    },
    {
      name: "Luana",
      role: "Líder",
      img: "../img/Luana.png",
      linkedin: "https://pe.linkedin.com/",
      twitter: "https://x.com/?lang=es",
    },
    {
      name: "Kamila",
      role: "Coordinadora",
      img: "../img/Kamila.png",
      linkedin: "https://pe.linkedin.com/",
      twitter: "https://x.com/?lang=es",
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
    <main className="bg-gray-50">
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center animate-fadeIn">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6">
    
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Conoce nuestra misión, historia y el equipo que lo hace posible.
          </p>
        </div>
      </section>
      <section id="habilidades" className="py-12 bg-rose-50">
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
              className="bg-yellow-100 px-5 py-3 rounded-full text-gray-800 font-medium hover:bg-rose-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {h.nombre} — {h.nivel}
            </motion.li>
          ))}
        </ul>
      </section>
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

      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slideUp reveal-delay-200">
            <h2 className="text-3xl font-bold animate-scaleIn">
              Nuestro Camino
            </h2>
            <p className="mt-3 text-gray-600">
              Desde sus inicios, TechBloom ha crecido con la convicción de que
              cada niña merece oportunidades para explorar, crear y soñar en
              grande. Seguimos construyendo un espacio donde la ciencia y la
              tecnología florecen con inclusión y confianza.
            </p>
          </div>
          <div className="animate-slideUp reveal-delay-300">
            <img
              src="https://www.shutterstock.com/image-vector/program-code-computer-background-numbers-600nw-2477227603.jpg"
              alt="Ilustración de código y programación"
              className="w-full rounded shadow-sm animate-scaleIn"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Quienes;
