"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto2() {
  const [radio, setRadio] = useState("");
  const [area, setArea] = useState<string | null>(null);

  const calcularArea = () => {
    const r = Number(radio);

    if (isNaN(r) || r <= 0) {
      setArea("⚠️ Ingresa un número válido mayor a 0.");
      return;
    }

    const pi = 3.14159;
    const resultado = (pi * r * r).toFixed(2); // Fórmula: π * r²
    setArea(resultado);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
        {/* Mensaje informativo */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold text-purple-600 mb-6">
          2-) En esta sección vamos a calcular el área de un circulo:
        </motion.p>

        {/* Input para radio */}
        <input
          type="number"
          placeholder="Ingresa el radio"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={calcularArea}
          className="w-full px-6 py-2 cursor-pointer bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition"
        >
          Calcular Área
        </button>

        {/* Resultado */}
          {area && (
            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-500 mb-2">
                El resultado del área es:
              </p>
              <p className="text-lg font-semibold text-purple-700">
                {typeof area === "string" ? area : `${area} unidades²`}
              </p>
            </div>
          )}
        </div>

      {/* Botón de regresar */}
      <div className="mt-6">
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
