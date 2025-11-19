import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function NavbarUsuario() {
    const auth = getAuth()
    const navigate = useNavigate()
    //Funcion para cerrar sesion
    const cerrarSesion = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <header className="w-full bg-pink-200 shadow-lg border-b border-pink-300/50 mt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-4xl font-bold text-white drop-shadow font-serif tracking-wide">
                    ¡Bienvenido!
                </h1>

                <nav>
                    <ul className="flex gap-8 text-white text-lg font-semibold">
                        <li className="hover:text-pink-600 transition-all hover:scale-105">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="hover:text-pink-600 transition-all hover:scale-105">
                            <Link to="/caracteristicas">Características</Link>
                        </li>
                        <li className="hover:text-pink-600 transition-all hover:scale-105">
                            <Link to="/contacto">Contacto</Link>
                        </li>
                        <li className="hover:text-pink-600 transition-all hover:scale-105">
                            <Link to="/peliculas">Películas</Link>
                        </li>
                        <li className="hover:text-pink-600 transition-all hover:scale-105">
                            <Link to="/comunidad">Comunidad</Link>
                        </li>
                        <li>
                            <button
                                onClick={cerrarSesion}
                                className="bg-white text-pink-600 px-6 py-2 rounded-full shadow font-bold hover:bg-pink-50 hover:scale-105 transition"
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavbarUsuario