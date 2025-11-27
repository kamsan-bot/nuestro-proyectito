import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from '../firebase'; 

import NavbarUsuario from './navbarUsuario';
import NavbarVisitante from './navbarVisitante';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null)

<<<<<<< HEAD
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
          <li>
            <a
              href="/comunidad"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              comunidad
            </a>
          </li>
          <li>
            <a
              href="/navbarUsuario"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio sesion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
=======
  useEffect(()=>{
        const auth = getAuth(app);

        //Detectar usuario
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUsuario(user)
            } else {
                setUsuario(null)
            }
        });
        return () => unsubscribe();
    },[]);
  
  if (usuario) {
    return <NavbarUsuario />
  }else{
    return <NavbarVisitante />
  }

  
>>>>>>> 2b6652c1068931b5084ed027833e90e0c459c8b6
}

export default Navbar;
