"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto8() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const calcular = () => {
    const numX = Number(x);
    const numY = Number(y);

    if (isNaN(numX) || isNaN(numY)) {
      setResultado("⚠️ Ingresa números válidos");
      return;
    }

    if (numY - 5 === 0) {
      setResultado("⚠️ División por cero no permitida");
      return;
    }

    const r = ((numX + 2) / (numY - 5)).toFixed(2);
    setResultado(r);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
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
          className="text-xl font-bold mb-6 text-purple-600"
        >
          8-) Calculadora de la fórmula:
          <br />
          y = (x + 2) / (y - 5) ✍️
        </motion.p>

        {/* Input X */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="number"
            placeholder="Ingresa el valor de x"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </motion.div>

        {/* Input Y */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="number"
            placeholder="Ingresa el valor de y"
            value={y}
            onChange={(e) => setY(e.target.value)}
            className="mb-6 px-4 py-2 border text-black border-black rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </motion.div>

        {/* Botón calcular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={calcular}
            className="px-6 py-2 bg-purple-500 text-white border border-black rounded-xl shadow hover:bg-purple-600 hover:scale-105 transition w-full"
          >
            Calcular
          </button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={resultado ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {resultado && (
            <motion.p
              className="mt-6 text-lg font-semibold text-center text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isNaN(Number(resultado))
                ? resultado
                : `El resultado de la fórmula es: ${resultado}`}
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
