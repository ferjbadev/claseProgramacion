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
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        
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
        <input
          type="text"
          placeholder="Escribe una palabra"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-black text-black rounded-lg text-center"
        />

        {/* Botón */}
        <button
          onClick={contarLetras}
          className="w-full px-6 py-2 bg-green-500 text-white border border-black rounded-xl shadow hover:bg-green-600 transition"
        >
          Contar Letras
        </button>

        {/* Resultado */}
        {contador !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-lg font-semibold text-green-700">
              {typeof contador === "string"
                ? contador
                : `La palabra "${palabra}" tiene ${contador} letras.`}
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
