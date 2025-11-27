import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/nav";
import "./App.css";

import app from "./firebase";

import Formulario from "./components/form";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Inicio from "./pages/inicio";
import Valores from "./pages/valores";
import Quienes from "./pages/quienes";
import Contacto from "./pages/contacto";
//mis paginas//
import Comunidad from "./components/comunidad";
import Login from "./components/login";
import NavbarUsuario from "./components/navbarUsuario";
import RegistrarUsuario from "./components/registrarUsuario";
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
          <Route
            path="/prueba"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarUsuario" element={<RegistrarUsuario />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sesion" element={<NavbarUsuario />} />
          <Route path="/comunidad" element={<Comunidad />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
