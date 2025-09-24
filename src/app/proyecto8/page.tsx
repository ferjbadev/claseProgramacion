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
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Texto animado */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold mb-6 text-purple-600 text-center"
        >
          8-) Calculadora de la fórmula:
          <br />
          y = (x + 2) / (y - 5) ✍️
        </motion.p>

        {/* Input X */}
        <input
          type="number"
          placeholder="Ingresa el valor de x"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        {/* Input Y */}
        <input
          type="number"
          placeholder="Ingresa el valor de y"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="mb-6 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        {/* Botón calcular */}
        <button
          onClick={calcular}
          className="px-6 py-2 bg-purple-500 text-white border border-black rounded-xl shadow hover:bg-purple-600 transition w-full"
        >
          Calcular
        </button>

        {/* Resultado */}
        {resultado && (
          <p className="mt-6 text-lg font-semibold text-center text-black">
            {isNaN(Number(resultado))
              ? resultado
              : `El resultado de la fórmula es: ${resultado}`}
          </p>
        )}
      </div>

      {/* Botón de regresar */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
