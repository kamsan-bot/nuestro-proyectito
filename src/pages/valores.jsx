import React from "react";
import "../styles/valores.css";

function Valores() {
  return (
    <main className="px-4 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Donde empieza nuestra fuerza
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              En TechBloom creemos que el empoderamiento no es un destino, sino
              un camino que se recorre cada día. Aquí, cada acción y aprendizaje
              está guiado por principios que inspiran, fortalecen y transforman
              a todas las que forman parte de esta comunidad.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-plana-dia-internacional-mujer_23-2149271231.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Ilustración de mujeres colaborando"
              className="w-full rounded-xl shadow-lg animate-fadeIn"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/** Card 1 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:translate-y-[-6px] transition-transform duration-300 animate-pop">
            <img src="/img/solidaridad.png" className="mx-auto h-28 w-28 object-contain mb-4" alt="Solidaridad" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Solidaridad femenina</h3>
            <p className="text-sm text-gray-600">Defendemos el valor de apoyarnos unas a otras, creando redes de colaboración y hermandad que multiplican oportunidades.</p>
          </article>

          {/** Card 2 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-pop">
            <img src="/img/confianza.jpg" className="mx-auto h-28 w-28 object-cover mb-4 rounded-full" alt="Confianza" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Confianza en una misma</h3>
            <p className="text-sm text-gray-600">Promovemos la seguridad interior como motor para enfrentar desafíos, romper estereotipos y avanzar con determinación.</p>
          </article>

          {/** Card 3 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-pop">
            <img src="/img/exito.jpg" className="mx-auto h-28 w-28 object-cover mb-4 rounded-md" alt="Educación" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Educación y crecimiento</h3>
            <p className="text-sm text-gray-600">Impulsamos el aprendizaje continuo como la herramienta clave para transformar realidades y abrir nuevas puertas.</p>
          </article>

          {/** Card 4 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-pop">
            <img src="/img/igualdad.jpg" className="mx-auto h-28 w-28 object-cover mb-4 rounded-md" alt="Igualdad" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Igualdad y respeto</h3>
            <p className="text-sm text-gray-600">Defendemos un trato justo, libre de prejuicios, y celebramos la increíble diversidad de voces y experiencias.</p>
          </article>

          {/** Card 5 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-pop">
            <img src="/img/resiliencia.png" className="mx-auto h-28 w-28 object-contain mb-4" alt="Resiliencia" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Resiliencia</h3>
            <p className="text-sm text-gray-600">Reconocemos la fuerza que nace al superar obstáculos y convertirlos en oportunidades para nuestra evolución.</p>
          </article>

          {/** Card 6 */}
          <article className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-pop">
            <img src="/img/educacion.png" className="mx-auto h-28 w-28 object-contain mb-4" alt="Autonomía" onError={(e)=>{e.target.src='/img/placeholder.png'}} />
            <h3 className="font-semibold text-lg mb-2">Autonomía</h3>
            <p className="text-sm text-gray-600">Fomentamos la capacidad de tomar decisiones libres y responsables, sin depender de la validación externa.</p>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center py-12 rounded-xl mx-4 md:mx-8 lg:mx-16 mt-8">
        <div className="max-w-3xl mx-auto">
          <figure>
            <blockquote className="text-lg md:text-xl font-medium italic drop-shadow-sm">
              "Si eres mujer y has escuchado en tu cabeza una voz que te dice: '¿Quién eres tú para decir algo?'. Recuerda que eres un ser humano que puede cambiar el mundo."
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/80">Una voz de inspiración para todas</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">La manera en que lo hacemos posible</h2>
            <div className="mx-auto mt-4 w-14 h-1 rounded-full" style={{background: 'linear-gradient(to right, #f72585, #007aff)'}}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition">
              <h5 className="font-semibold mb-2">De las palabras a la acción ✨</h5>
              <p className="text-gray-600">Fomentamos redes de apoyo entre participantes y mentoras. Organizamos círculos de colaboración donde compartir oportunidades y recursos es una costumbre.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition">
              <h5 className="font-semibold mb-2">Nuestra forma de hacerlo 👌</h5>
              <p className="text-gray-600">Ofrecemos capacitaciones, charlas y recursos que amplían conocimientos en liderazgo, finanzas, habilidades digitales y desarrollo personal.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition">
              <h5 className="font-semibold mb-2">Aquí se siente así 💯</h5>
              <p className="text-gray-600">Aplicamos políticas de inclusión en todas nuestras actividades, asegurando que la diversidad cultural, generacional y profesional sea siempre bienvenida.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition">
              <h5 className="font-semibold mb-2">Cómo se vive desde adentro 😄</h5>
              <p className="text-gray-600">Creamos espacios seguros donde cada mujer pueda expresarse libremente, compartir sus experiencias y recibir retroalimentación constructiva y positiva.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Valores;