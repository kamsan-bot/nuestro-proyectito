import React, { useState } from "react";
import { div } from "framer-motion/client";

function Formulario() {
  const [sugerencia, setSugerencia] = useState("");
  const [error, setError] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [success, setSuccess] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (sugerencia.trim().length < 5) {
      setError("La sugerencia debe tener al menos 5 caracteres.");
      return;
    }

    const nuevo = {
      id: Date.now(),
      text: sugerencia.trim(),
      createdAt: new Date().toISOString(),
    };

    setComentarios((c) => [nuevo, ...c]);
    setSuccess("Gracias por tu sugerencia!");
    setSugerencia("");

    // limpiar mensaje de éxito después de 3s
    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <>
    <div>
      <form
        id="form-sugerencia"
        onSubmit={onSubmit}
        noValidate
        className="max-w-md mx-auto shadow-lg p-6 rounded-2xl bg-white animate-fadeIn"
      >
        <div className="mb-4">
          <label
            htmlFor="sugerencia"
            className="block text-gray-700 font-medium mb-2"
          >
            Tu sugerencia
          </label>
          <textarea
            id="sugerencia"
            name="sugerencia"
            rows={3}
            value={sugerencia}
            onChange={(e) => setSugerencia(e.target.value)}
            required
            minLength={5}
            placeholder="¿Qué te gustaría ver en TechBloom?"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
          />
          {error && (
            <p className="text-red-500 text-sm mt-1" id="feedback">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Enviar sugerencia
        </button>

        <div
          id="respuesta-sugerencia"
          className="mt-3 text-center font-semibold text-gray-700"
        >
          {success && <span className="text-green-600">{success}</span>}
        </div>
      </form>

      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>

        <div className="divider">o</div>

        <button className="google-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google Logo"
          />
          Iniciar sesión con Google
        </button>
      </div>


      {/* Lista de comentarios enviados */}
      <div className="max-w-md mx-auto mt-6 space-y-4">
        {comentarios.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-2xl p-4 shadow-md animate-slideUp reveal-delay-200"
          >
            <div className="text-sm text-gray-500 mb-2">
              Enviado: {new Date(c.createdAt).toLocaleString()}
            </div>
            <p className="text-gray-800">{c.text}</p>
          </article>
        ))}
      </div>
    </div>
   </>
  )
}

export default Formulario;
