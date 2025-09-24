"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto11() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);

  const verificarLogin = () => {
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      setMensaje("✅ Acceso concedido");
    } else {
      setMensaje("❌ Acceso denegado");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">
          🔐 Verificador de Login
        </h1>

        {/* Input Usuario */}
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-center"
        />

        {/* Input Contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={verificarLogin}
          className="w-full px-6 py-2 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-800 transition"
        >
          Iniciar Sesión
        </button>

        {/* Resultado */}
        {mensaje && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-lg font-semibold text-gray-700">{mensaje}</p>
          </div>
        )}
      </div>
         <div className="mt-24">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
