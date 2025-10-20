import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/nav'
import './App.css'
import Formulario from './components/form'
import Footer from './components/footer'
import Hero from './components/hero'
import Valores from './pages/valores'
import Quienes from './pages/quienes'
import Contacto from './pages/contacto'
function App() {
  return (
    <>
      <Router>
        <Nav />           
        <main className="min-h-screen">
          <Routes>
            <Route path="/hero" element={<Hero />} /> 
            <Route path="/formulario" element={<Formulario />} />
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
