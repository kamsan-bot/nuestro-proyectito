import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/nav'
import './App.css'
import Formulario from './components/form'
import Footer from './components/footer'
import Hero from './components/hero'
function App() {
   return (
    <>
      <h1>Vite + React</h1>
      <Navbar />
      <Hero />
      <Formulario />
      <Footer />
      
    </>
  )
}

export default App
