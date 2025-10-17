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
      link: "./assets/html/quienes-somos.html",
    },
    {
      title: "Nuestra Historia",
      text: "Creamos este espacio para romper barreras, impulsar vocaciones STEM y fortalecer el bienestar emocional.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaTkXGBFXWco4i78ZbkGjTx8P-MdPcEWA3w&s",
      link: "./assets/html/quienes-somos.html",
    },
  ];
function Hero() {
return (
    <div>
 <section className="relative flex items-center justify-center text-white text-center min-h-[80vh] bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 animate-fadeIn">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          TechBloom
        </h1>

        <h4 className="text-xl md:text-2xl font-light mb-6 max-w-2xl mx-auto">
          Donde las mentes brillantes florecen: Ciencia, Tecnología y Bienestar
          para chicas que quieren cambiar el mundo.
        </h4>

        <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
          TechBloom es una plataforma digital interactiva creada para niñas y
          adolescentes que sueñan con transformar el mundo a través de la
          ciencia, la tecnología y la creatividad.
        </p>

        <a
          href="/valores"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg"
        >
          Descubre Más
        </a>

      </div>
    </section>
    <section className="py-16 bg-gray-50 text-gray-800 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold inline-block">
            ¿Qué ofrecemos en TechBloom?
          </h2>
          <div className="w-16 h-1 mt-3 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-md bg-gray-50 rounded-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h5 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h5>
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

export default Hero
