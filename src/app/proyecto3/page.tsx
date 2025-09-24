"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto3() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState<string | null>(null);

  const convertir = () => {
    const c = Number(celsius);
    if (isNaN(c)) {
      setFahrenheit("⚠️ Ingresa un número válido.");
      return;
    }
    const resultado = ((c * 9) / 5 + 32).toFixed(2); // Fórmula
    setFahrenheit(resultado);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 p-6">
      
      {/* Contenedor principal */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

        {/* Texto informativo animado */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold mb-6 text-blue-600"
        >
          3-) En esta sección, vamos a convertir una temperatura de °C a °F 🌡️
        </motion.p>

        {/* Input */}
        <input
          type="number"
          placeholder="Temperatura en °C"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-black text-black rounded-lg text-center"
        />

        {/* Botón */}
        <button
          onClick={convertir}
          className="w-full px-6 py-2 bg-blue-500 text-white border border-black rounded-xl shadow hover:bg-blue-600 transition"
        >
          Convertir a Fahrenheit
        </button>

        {/* Resultado */}
        {fahrenheit && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-500 mb-2">
              Resultado de la conversión:
            </p>
            <p className="text-lg font-semibold text-blue-700">
              {typeof fahrenheit === "string"
                ? fahrenheit
                : `${celsius} °C = ${fahrenheit} °F`}
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
