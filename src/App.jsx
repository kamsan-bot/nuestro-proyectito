import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/nav'
import './App.css'
import Formulario from './components/form'
import Hero from './components/hero'
import Footer from './components/footer'
import Inicio from "./pages/inicio";
import Valores from './pages/valores'
import Quienes from './pages/quienes'
import Contacto from './pages/contacto'
function App() {
  return (
    <>
      <Router>
          <Navbar />
          <main className="min-h-screen">
          <Routes>
            <Route path="/" element={
              <>
              <Hero />
              <Inicio />
               <Formulario />
              </>
            } /> 
            <Route path="/valores" element={<Valores />} />    
            <Route path="/quienes" element={<Quienes />} /> 
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />          
      </Router>
    </>
  )
}

export default App
