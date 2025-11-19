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

import Comunidad from "./components/comunidad";
import RutaPrivada from "./components/rutaprivada";

import Login from "./components/login";

function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/prueba" element={
              <>
                <Login />
              </>
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
    </>
  )
}

export default App
