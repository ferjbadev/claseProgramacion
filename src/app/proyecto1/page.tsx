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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      {/* Contenedor principal */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Texto que aparece poco a poco */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold mb-6 text-blue-600 text-center"
        >
          1-) En esta sección, vamos a calcular el promedio de notas de un alumno 📘:
        </motion.p>

        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre del alumno"
          className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        <input
          type="number"
          min="0"
          value={cantidad}
          onChange={handleCantidadChange}
          placeholder="Cantidad de notas"
          className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        <div className="grid grid-cols-2 gap-3 mb-6">
          {notas.map((nota, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Nota ${index + 1}`}
              value={nota}
              onChange={(e) => handleNotaChange(index, e.target.value)}
              className="px-3 py-2 border text-black border-black rounded-lg text-center"
            />
          ))}
        </div>

        <button
          onClick={calcularPromedio}
          className="px-6 py-2 bg-blue-500 text-white border border-black rounded-xl shadow hover:bg-blue-600 transition w-full"
        >
          Calcular Promedio
        </button>

        {promedio && (
          <p className="mt-6 text-lg font-semibold text-center text-black">
            {nombre
              ? `${nombre} tiene un promedio de ${promedio}, ${
                  Number(promedio) >= 10
                    ? "Aprobaste pero a que costo"
                    : "Reprobaste eres un inútil"
                }`
              : `Promedio: ${promedio}, ${
                  Number(promedio) >= 10
                    ? "Aprobaste pero a que costo"
                    : "Reprobaste eres un inútil"
                }`}
          </p>
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
