"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto9() {
  const [nota, setNota] = useState("");
  const [calificacion, setCalificacion] = useState<string | null>(null);

  const calcularCalificacion = () => {
    const n = Number(nota);

    if (isNaN(n) || n < 0 || n > 100) {
      setCalificacion("⚠️ Ingresa una calificación válida (0-100), ni eso puedes hacer imbecil");
      return;
    }

    let letra = "";

    if (n >= 90) letra = "A, eres un pro";
    else if (n >= 80) letra = "B, eres un medio pro";
    else if (n >= 70) letra = "C, eres un promedio, estudia mas nojoda";
    else if (n >= 60) letra = "D, eres un inutil";
    else letra = "F, no puedes ni hacer eso, eres un inutil";

    setCalificacion(`Tu calificación es: ${letra}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      {/* Contenedor principal */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Texto animado */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold mb-6 text-blue-600 text-center"
        >
          9-) En esta sección, calcularemos tu calificación en letras 📝
        </motion.p>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="number"
            placeholder="Ingresa tu nota (0-100)"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={calcularCalificacion}
            className="px-6 py-2 bg-blue-500 text-white border border-black rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition-all w-full"
          >
            Calcular Calificación
          </button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={calificacion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {calificacion && (
            <motion.p
              className="mt-6 text-lg font-semibold text-center text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {calificacion}
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Botón volver debajo del contenedor */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver
        </Link>
      </motion.div>
    </div>
  );
}
