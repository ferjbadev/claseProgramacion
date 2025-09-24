"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto6() {
  const [palabra, setPalabra] = useState("");
  const [contador, setContador] = useState<number | string | null>(null);

  const contarLetras = () => {
    if (!palabra.trim()) {
      setContador("⚠️ Ingresa una palabra válida.");
      return;
    }

    // Quitamos espacios y contamos longitud
    const cantidad = palabra.replace(/\s+/g, "").length;
    setContador(cantidad);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-200 p-6">
      
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
          className="text-xl font-bold mb-6 text-green-600"
        >
          6-) En esta sección, vamos a contar las letras de una palabra 🔤
        </motion.p>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Escribe una palabra"
            value={palabra}
            onChange={(e) => setPalabra(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-green-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
          />
        </motion.div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={contarLetras}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Contar Letras
          </button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={contador !== null ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {contador !== null && (
            <motion.div
              className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg font-semibold text-green-700">
                {typeof contador === "string"
                  ? contador
                  : `La palabra "${palabra}" tiene ${contador} letras.`}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Botón volver */}
      <motion.div
        className="mt-8"
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
