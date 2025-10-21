function Contacto() {
const services = [
  {
    titulo: "Diseño Web Personalizado",
    descripcion: "Creamos sitios modernos y adaptables para destacar tu marca digital.",
    icono: "💻",
  },
  {
    titulo: "Gestión de Portafolios",
    descripcion: "Organizamos tus proyectos de manera visual e interactiva.",
    icono: "🗂️",
  },
  {
    titulo: "Asesoría Digital Colectiva",
    descripcion: "Ayudamos a equipos a crear una identidad digital sólida y coherente.",
    icono: "🚀",
  },
];

  return (
    <main className="bg-gray-50">
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center animate-fadeIn">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 animate-slideUp reveal-delay-100">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-scaleIn reveal-delay-200">
            ¡Conectemos!
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-100 animate-fadeIn reveal-delay-300">
            ¿Quieres aprender, crear y compartir tus ideas en ciencia y
            tecnología? En TechBloom encontrarás talleres, mentorías y una
            comunidad que te inspira a crecer y soñar en grande.
          </p>
        </div>
      </section>
      <section className="mb-10">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mt-6 animate-scaleIn mb-6">
              ¿En qué podemos ayudarte?
            </h2>
            <div
              className="mx-auto animate-slideUp reveal-delay-200 mt-4"
              style={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(to right, #f72585, #007aff)",
                borderRadius: "5px",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {services.map((s, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slideUp reveal-delay-${
                  100 + idx * 100
                } border border-transparent hover:border-gray-100`}
              >
                <div className="flex items-start gap-5">
  <span className="text-4xl">{s.icono}</span>
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{s.titulo}</h3>
    <p className="text-sm text-gray-600">{s.descripcion}</p>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold animate-scaleIn mb-4">
              ¿Por qué elegirnos?
            </h2>
            <div
              className="mx-auto animate-slideUp reveal-delay-200 mt-3"
              style={{
                width: "50px",
                height: "4px",
                background: "linear-gradient(to right, #f72585, #007aff)",
                borderRadius: "5px",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slideUp reveal-delay-200 border border-transparent hover:border-gray-100">
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                Empoderamiento Real y Emocional
              </h5>
              <p className="mt-2 text-gray-600">
                Nos enfocamos en fortalecer tanto el conocimiento tecnológico
                como el bienestar emocional, creando un espacio seguro y
                motivador.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slideUp reveal-delay-300 border border-transparent hover:border-gray-100">
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                Atención Personalizada y Cercana
              </h5>
              <p className="mt-2 text-gray-600">
                Valoramos cada paso del aprendizaje, acompañando a las
                estudiantes con apoyo constante y herramientas para su
                crecimiento integral.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slideUp reveal-delay-200 border border-transparent hover:border-gray-100">
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                Compromiso con el Futuro Femenino
              </h5>
              <p className="mt-2 text-gray-600">
                Fomentamos vocaciones STEM desde la infancia, cultivando líderes
                y científicas que transformarán el mundo con creatividad y
                pasión.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slideUp reveal-delay-300 border border-transparent hover:border-gray-100">
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                El Camino que Florece
              </h5>
              <p className="mt-2 text-gray-600">
                Queremos que TechBloom sea más que una plataforma: un movimiento
                que impulse a miles de niñas a sentirse cómodas en el mundo de
                la tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
