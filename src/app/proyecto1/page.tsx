"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto1() {
  const [nombre, setNombre] = useState<string>("");
  const [cantidad, setCantidad] = useState<string>("");
  const [notas, setNotas] = useState<string[]>([]);
  const [promedio, setPromedio] = useState<string | null>(null);

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCantidad(value);
    const num = value === "" ? 0 : Number(value);
    setNotas(Array(num).fill(""));
  };

  const handleNotaChange = (index: number, value: string) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = value;
    setNotas(nuevasNotas);
  };

  const calcularPromedio = () => {
    const numeros = notas.map((n) => Number(n)).filter((n) => !isNaN(n));
    if (numeros.length === 0) {
      setPromedio("⚠️ Ingresa al menos una nota válida");
      return;
    }
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    const resultado = (suma / numeros.length).toFixed(2);
    setPromedio(resultado);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      {/* Contenedor principal */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Texto informativo animado */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold text-purple-600 mb-6"
        >
          1-) En esta sección, vamos a calcular el promedio de notas de un alumno 📘:
        </motion.p>

        {/* Input nombre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Nombre del alumno"
            className="w-full px-4 py-2 mb-4 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
          />
        </motion.div>

        {/* Input cantidad de notas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="number"
            min="0"
            value={cantidad}
            onChange={handleCantidadChange}
            placeholder="Cantidad de notas"
            className="w-full px-4 py-2 mb-6 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
          />
        </motion.div>

        {/* Inputs de notas */}
        <motion.div
          className="grid grid-cols-2 gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {notas.map((nota, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Nota ${index + 1}`}
              value={nota}
              onChange={(e) => handleNotaChange(index, e.target.value)}
              className="px-3 py-2 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
            />
          ))}
        </motion.div>

        {/* Botón calcular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={calcularPromedio}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Calcular Promedio
          </button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={promedio ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {promedio && (
            <motion.div
              className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-purple-500 mb-1">El resultado del promedio es:</p>
              <p className="text-lg font-semibold text-purple-700">
                {nombre
                  ? `${nombre} tiene un promedio de ${promedio}, ${
                      Number(promedio) >= 10
                        ? "Aprobaste pero a qué costo"
                        : "Reprobaste eres un inútil"
                    }`
                  : `Promedio: ${promedio}, ${
                      Number(promedio) >= 10
                        ? "Aprobaste pero a qué costo"
                        : "Reprobaste eres un inútil"
                    }`}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Botón regresar */}
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
