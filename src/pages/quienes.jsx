import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

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

      <section id="team" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold animate-scaleIn mb-2">
            Nuestro Equipo
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slideUp reveal-delay-200" />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className={`bg-white rounded-2xl p-6 shadow-lg transform transition hover:-translate-y-3 duration-300 animate-slideUp reveal-delay-${
                  100 + idx * 100
                }`}
              >
                <img
                  src={member.img}
                  alt={`Foto de ${member.name}`}
                  className="w-44 h-44 object-cover rounded-full mx-auto shadow-sm"
                />
                <div className="mt-4">
                  <h5 className="text-xl font-bold">{member.name}</h5>
                  <p className="text-gray-500">{member.role}</p>

                  <div className="mt-3 flex items-center justify-center gap-4 text-2xl text-gray-700">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold animate-scaleIn">
            Nuestros Pilares
          </h2>
          <div
            className="mx-auto my-6"
            style={{
              width: "90px",
              height: "6px",
              background: "linear-gradient(to right, #e05f99, #007aff)",
              borderRadius: "5px",
            }}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-3 transition-all duration-300 animate-slideUp reveal-delay-200">
              <img
                src="../img/tiro-al-blanco.jpg"
                alt="Nuestra Visión"
                className="mx-auto mb-4 object-contain w-[120px] h-[120px] animate-scaleIn reveal-delay-200"
              />
              <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
              <p className="text-gray-600">
                Impulsamos un futuro donde las niñas encuentren en la ciencia y
                la tecnología un espacio para aprender, innovar y liderar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-3 transition-all duration-300 animate-slideUp reveal-delay-300">
              <img
                src="../img/diamante.jpg"
                alt="Nuestros Valores"
                className="mx-auto mb-4 object-contain w-[120px] h-[120px] animate-scaleIn reveal-delay-300"
              />
              <h3 className="text-xl font-bold mb-2">Nuestros Valores</h3>
              <p className="text-gray-600">
                Fomentamos la curiosidad, la creatividad y el trabajo en equipo
                para que cada chica descubra su verdadero potencial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm animate-slideUp reveal-delay-400">
              <img
                src="../img/check.jpg"
                alt="Nuestro Compromiso"
                className="mx-auto mb-4 object-contain w-[120px] h-[120px] animate-scaleIn reveal-delay-400"
              />
              <h3 className="text-xl font-bold mb-2">Nuestro Compromiso</h3>
              <p className="text-gray-600">
                Creamos experiencias que inspiran, fortalecen habilidades y
                construyen un camino hacia la inclusión y la innovación.
              </p>
            </div>
          </div>
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
