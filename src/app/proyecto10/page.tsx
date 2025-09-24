"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto10() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [mayor, setMayor] = useState<string | null>(null);

  const compararNumeros = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    const n3 = Number(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      setMayor("⚠️ Ingresa números válidos");
      return;
    }

    const max = Math.max(n1, n2, n3);
    setMayor(`El número mayor es: ${max}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
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
          className="text-xl font-bold mb-6 text-green-600 text-center"
        >
          10-) En esta sección, vamos a comparar tres números 🔢
        </motion.p>

        {/* Inputs animados */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <input
            type="number"
            placeholder="Número 3"
            value={num3}
            onChange={(e) => setNum3(e.target.value)}
            className="mb-6 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
          />
        </motion.div>

        {/* Botón animado */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <button
            onClick={compararNumeros}
            className="px-6 py-2 bg-green-500 text-white border border-black rounded-xl shadow hover:bg-green-600 hover:scale-105 transition-all w-full"
          >
            Comparar
          </button>
        </motion.div>

        {/* Resultado animado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={mayor ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {mayor && (
            <motion.p
              className="mt-6 text-lg font-semibold text-center text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {mayor}
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver
        </Link>
      </motion.div>
    </div>
  );
}
