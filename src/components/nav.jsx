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

  
}

export default Navbar;
