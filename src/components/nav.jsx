import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="backdrop-blur-md bg-white/70 shadow-lg">
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

export default Navbar;
