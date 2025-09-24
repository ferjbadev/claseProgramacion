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
      setResultado("⚠️ Ingresa números válidos.");
      return;
    }

    if (numY - 5 === 0) {
      setResultado("⚠️ División por cero no permitida.");
      return;
    }

    const r = ((numX + 2) / (numY - 5)).toFixed(2);
    setResultado(r);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          🔢 Calculadora de y = (x+2)/(y-5)
        </h1>

        {/* Input X */}
        <input
          type="number"
          placeholder="Ingresa x"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Input Y */}
        <input
          type="number"
          placeholder="Ingresa y"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={calcular}
          className="w-full px-6 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition"
        >
          Calcular
        </button>

        {/* Resultado */}
        {resultado !== null && (
          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-lg font-semibold text-purple-700">
              {typeof resultado === "string"
                ? resultado
                : `Resultado: y = ${resultado}`}
            </p>
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
