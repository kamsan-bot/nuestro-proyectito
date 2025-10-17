import App from "../App.jsx"

function Formulario() {
return(
    <div>
    <form
  id="form-sugerencia"
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
      rows="2"
      required
      minLength="5"
      placeholder="¿Qué te gustaría ver en TechBloom?"
      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
    ></textarea>
    <p
      className="text-red-500 text-sm mt-1 hidden"
      id="feedback"
    >
      La sugerencia debe tener al menos 5 caracteres.
    </p>
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
  ></div>
</form>

    </div>
 
 )
}

export default Formulario