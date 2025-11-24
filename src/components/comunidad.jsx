import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
  arrayRemove,
  increment
} from "firebase/firestore";

function Comunidad() {
  // Estados del usuario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [uid, setUid] = useState("");
  const [cargando, setCargando] = useState(true);

  // Editar perfil
  const [editandoPerfil, setEditandoPerfil] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState("");

  // Posts
  const [contenidoPost, setContenidoPost] = useState("");
  const [urlImagenPost, setUrlImagenPost] = useState("");
  const [posts, setPosts] = useState([]);

  // Editar posts
  const [editandoID, setEditandoID] = useState(null);
  const [nuevoContenido, setNuevoContenido] = useState("");

  // Comentarios
  const [comentarios, setComentarios] = useState({});
  const [nuevoComentario, setNuevoComentario] = useState({});

  // Alertas
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const auth = getAuth();

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 3000);
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    const d = fecha.toDate();
    const ahora = new Date();
    const diff = Math.floor((ahora - d) / 1000);

    if (diff < 60) return "Ahora";
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d`;

    return d.toLocaleDateString("es-PE", {
      day: "numeric",
      month: "short"
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        setNombre(user.displayName || "Usuario sin nombre");
        setFoto(
          user.photoURL ||
            "https://ui-avatars.com/api/?name=" + (user.displayName || "User")
        );
        setNuevoNombre(user.displayName || "");
        setNuevaFoto(user.photoURL || "");
      } else {
        setUid("");
        setEmail("");
        setNombre("");
        setFoto("");
      }
      setCargando(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(lista);
    });
    return () => unsubscribe();
  }, []);

  const actualizarPerfil = async () => {
    const user = auth.currentUser;
    if (!user) return showAlert("error", "No hay usuario activo");

    try {
      await updateProfile(user, {
        displayName: nuevoNombre || user.displayName,
        photoURL: nuevaFoto || user.photoURL
      });

      setNombre(nuevoNombre);
      setFoto(nuevaFoto);
      setEditandoPerfil(false);
      showAlert("success", "¡Perfil actualizado correctamente!");
    } catch (error) {
      showAlert("error", "Error al actualizar perfil");
    }
  };

  const crearPost = async () => {
    if (contenidoPost.trim() === "" && urlImagenPost.trim() === "") {
      showAlert("error", "Escribe algo o agrega una imagen");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        contenido: contenidoPost,
        imagen: urlImagenPost || null,
        fecha: new Date(),
        autor: nombre,
        autorFoto: foto,
        autorUid: uid,
        likes: [],
        cantidadLikes: 0,
        comentarios: []
      });

      setContenidoPost("");
      setUrlImagenPost("");
      showAlert("success", "¡Publicación creada!");
    } catch (error) {
      showAlert("error", "Error al crear publicación");
      console.error(error);
    }
  };

  const toggleLike = async (postId, likesArray) => {
    const postRef = doc(db, "posts", postId);
    const yaLeDioLike = likesArray?.includes(uid);

    if (yaLeDioLike) {
      await updateDoc(postRef, {
        likes: arrayRemove(uid),
        cantidadLikes: increment(-1)
      });
    } else {
      await updateDoc(postRef, {
        likes: arrayUnion(uid),
        cantidadLikes: increment(1)
      });
    }
  };

  const guardarEdicion = async (id) => {
    if (nuevoContenido.trim() === "") {
      showAlert("error", "El contenido no puede estar vacío");
      return;
    }

    await updateDoc(doc(db, "posts", id), {
      contenido: nuevoContenido
    });

    setEditandoID(null);
    setNuevoContenido("");
    showAlert("success", "Post actualizado");
  };

  const eliminarPost = async (id) => {
    if (confirm("¿Eliminar esta publicación?")) {
      await deleteDoc(doc(db, "posts", id));
      showAlert("success", "Publicación eliminada");
    }
  };

  const agregarComentario = async (postId) => {
    const texto = nuevoComentario[postId];
    if (!texto || texto.trim() === "") return;

    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      comentarios: arrayUnion({
        texto,
        autor: nombre,
        autorFoto: foto,
        autorUid: uid,
        fecha: new Date()
      })
    });

    setNuevoComentario({ ...nuevoComentario, [postId]: "" });
    setComentarios({ ...comentarios, [postId]: false });
  };

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando comunidad...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {alert.show && (
        <div className="fixed inset-0 flex items-start justify-center pt-20 z-[9999] pointer-events-none">
          <div
            className={`px-8 py-6 rounded-xl shadow-2xl transform transition-all duration-500 pointer-events-auto ${
              alert.type === "success"
                ? "bg-green-500 text-white scale-110"
                : "bg-red-500 text-white"
            }`}
          >
            <div className="flex items-center gap-4">
              {alert.type === "success" ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <p className="font-bold text-lg">{alert.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Perfil del usuario */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={foto}
                alt="perfil"
                className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{nombre}</h1>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
            <button
              onClick={() => setEditandoPerfil(!editandoPerfil)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editandoPerfil ? "Cancelar" : "Editar Perfil"}
            </button>
          </div>

          {editandoPerfil && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <input
                type="text"
                placeholder="Nuevo nombre"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="URL de foto de perfil"
                value={nuevaFoto}
                onChange={(e) => setNuevaFoto(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={actualizarPerfil}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Guardar cambios
              </button>
            </div>
          )}
        </div>

        {/* Crear publicación */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ¿Qué estás pensando?
          </h2>
          <textarea
            placeholder="Comparte algo con la comunidad..."
            value={contenidoPost}
            onChange={(e) => setContenidoPost(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            rows="3"
          />

          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="URL de imagen (opcional)"
              value={urlImagenPost}
              onChange={(e) => setUrlImagenPost(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {urlImagenPost && (
              <div className="text-sm text-gray-600">
                <p className="mb-2">Vista previa:</p>
                <img
                  src={urlImagenPost}
                  alt="preview"
                  className="w-full max-h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            <button
              onClick={crearPost}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Publicar
            </button>
          </div>
        </div>

        {/* Feed de publicaciones */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
            >
              {/* Cabecera del post */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.autorFoto}
                    alt={post.autor}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{post.autor}</p>
                    <p className="text-sm text-gray-500">
                      {formatearFecha(post.fecha)}
                    </p>
                  </div>
                </div>

                {post.autorUid === uid && editandoID !== post.id && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditandoID(post.id);
                        setNuevoContenido(post.contenido);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => eliminarPost(post.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Contenido */}
              {editandoID === post.id ? (
                <div className="space-y-3">
                  <textarea
                    value={nuevoContenido}
                    onChange={(e) => setNuevoContenido(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    rows="3"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => guardarEdicion(post.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditandoID(null)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-800 mb-4 whitespace-pre-wrap">
                    {post.contenido}
                  </p>
                  {post.imagen && (
                    <img
                      src={post.imagen}
                      alt="post"
                      className="w-full rounded-lg mb-4 max-h-96 object-cover"
                    />
                  )}
                </>
              )}

              {/* Likes y comentarios */}
              <div className="border-t pt-3 mt-3">
                <div className="flex items-center gap-6 mb-3">
                  <button
                    onClick={() => toggleLike(post.id, post.likes || [])}
                    className="flex items-center gap-2 hover:text-red-600 transition group"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        post.likes?.includes(uid)
                          ? "fill-red-600 text-red-600"
                          : "text-gray-600 group-hover:fill-red-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="font-semibold">
                      {post.cantidadLikes || 0}
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      setComentarios({
                        ...comentarios,
                        [post.id]: !comentarios[post.id]
                      })
                    }
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-semibold">
                      {post.comentarios?.length || 0}
                    </span>
                  </button>
                </div>

                {/* Sección de comentarios */}
                {comentarios[post.id] && (
                  <div className="mt-4 space-y-3">
                    {post.comentarios?.map((com, idx) => (
                      <div key={idx} className="flex gap-3 bg-gray-50 p-3 rounded-lg">
                        <img
                          src={com.autorFoto}
                          alt={com.autor}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-gray-800">
                            {com.autor}
                          </p>
                          <p className="text-gray-700">{com.texto}</p>
                        </div>
                      </div>
                    ))}

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Escribe un comentario..."
                        value={nuevoComentario[post.id] || ""}
                        onChange={(e) =>
                          setNuevoComentario({
                            ...nuevoComentario,
                            [post.id]: e.target.value
                          })
                        }
                        onKeyPress={(e) => {
                          if (e.key === "Enter") agregarComentario(post.id);
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <button
                        onClick={() => agregarComentario(post.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
              <p className="text-gray-500 text-lg">
                No hay publicaciones aún. ¡Sé el primero en publicarr!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comunidad;