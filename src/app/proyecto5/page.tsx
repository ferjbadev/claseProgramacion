"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<string | number | null>(null);

  const calcularSuma = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("⚠️ Ingresa números válidos");
      return;
    }

    setResultado(n1 + n2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-yellow-100 via-orange-100 to-red-100 p-6">
      
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
          className="text-xl font-bold mb-6 text-orange-600"
        >
          5-) En esta sección, vamos a sumar dos números ➕
        </motion.p>

        {/* Input número 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="number"
            placeholder="Ingresa el primer número"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-orange-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-center"
          />
        </motion.div>

        {/* Input número 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="number"
            placeholder="Ingresa el segundo número"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-orange-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-center"
          />
        </motion.div>

        {/* Botón calcular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={calcularSuma}
            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Calcular Suma
          </button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={resultado !== null ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {resultado !== null && (
            <motion.div
              className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg font-semibold text-orange-700">
                {typeof resultado === "string"
                  ? resultado
                  : `Resultado: ${num1} + ${num2} = ${resultado}`}
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
