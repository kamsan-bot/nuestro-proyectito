import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/nav'
import './App.css'

import app from "./firebase";

import Formulario from './components/form'
import Hero from './components/hero'
import Footer from './components/footer'
import Inicio from "./pages/inicio";
import Valores from './pages/valores'
import Quienes from './pages/quienes'
import Contacto from './pages/contacto'
<<<<<<< HEAD

import Comunidad from "./components/comunidad";
import RutaPrivada from "./components/rutaprivada";

import Login from "./components/login";

=======
//mis paginas//
import Comunidad from "./components/comunidad";
import Login from "./components/login";
import NavbarUsuario from "./components/navbarUsuario";
import RegistrarUsuario from "./components/registrarUsuario";
>>>>>>> 2b6652c1068931b5084ed027833e90e0c459c8b6
function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />     
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/prueba" element={
              <>
                <Login />
              </>
<<<<<<< HEAD
            } />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/comunidad" element={
            <>
              <RutaPrivada>
                <Comunidad />
              </RutaPrivada>
            </>
          } />
        </Routes>

        <Footer />
      </BrowserRouter>
=======
            } /> 
            <Route path="/login" element={<Login />} />
            <Route path="/registrarUsuario" element={<RegistrarUsuario />} />
            <Route path="/valores" element={<Valores />} />    
            <Route path="/quienes" element={<Quienes />} /> 
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sesion" element={<NavbarUsuario/>} />
            <Route path="/comunidad" element={<Comunidad/>} />
          </Routes>
        </main>
        <Footer />          
      </Router>
>>>>>>> 2b6652c1068931b5084ed027833e90e0c459c8b6
    </>
  )
}

export default App
