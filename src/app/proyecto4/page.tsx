"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto4() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);

  const generarSaludo = () => {
    if (!nombre.trim() || !edad.trim() || isNaN(Number(edad))) {
      setMensaje("⚠️ Ingresa un nombre y una edad válida.");
      return;
    }

    setMensaje(`Hola, ${nombre}. Tienes ${edad} años 🎉`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 p-6">
      
      {/* Contenedor principal */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

        {/* Texto informativo animado */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold mb-6 text-pink-600"
        >
          4-) En esta sección, vamos a generar un saludo personalizado 👋
        </motion.p>

        {/* Input nombre */}
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-black text-black rounded-lg text-center"
        />

        {/* Input edad */}
        <input
          type="number"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-black text-black rounded-lg text-center"
        />

        {/* Botón */}
        <button
          onClick={generarSaludo}
          className="w-full px-6 py-2 bg-pink-500 text-white border border-black rounded-xl shadow hover:bg-pink-600 transition"
        >
          Generar Saludo
        </button>

        {/* Resultado */}
        {mensaje && (
          <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <p className="text-lg font-semibold text-pink-700">
              {mensaje}
            </p>
          </div>
        )}

      </div>

      {/* Botón de regresar fuera del contenedor */}
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 border border-black"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
