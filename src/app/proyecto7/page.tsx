"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto7() {
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);

  const verificarEdad = () => {
    const e = Number(edad);

    if (isNaN(e) || e <= 0) {
      setMensaje("⚠️ Ingresa una edad válida.");
      return;
    }

    if (e >= 18) {
      setMensaje("✅ Eres mayor de 18 años.");
    } else {
      setMensaje("⚠️ No eres mayor de 18 años.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">
          🎂 Verificador de Edad
        </h1>

        {/* Input de edad */}
        <input
          type="number"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={verificarEdad}
          className="w-full px-6 py-2 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600 transition"
        >
          Verificar
        </button>

        {/* Resultado */}
        {mensaje && (
          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <p className="text-lg font-semibold text-indigo-700">{mensaje}</p>
          </div>
        )}
      </div>
      {/* Botón de regresar */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
