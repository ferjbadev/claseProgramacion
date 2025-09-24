"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Proyecto1() {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
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

  // Animación para los elementos de entrada
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const;

  const resultVariants: Variants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1.5rem",
      transition: { 
        duration: 0.5, 
        ease: [0.04, 0.62, 0.23, 0.98] 
      }
    }
  };

  const noteInputVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-6">
      {/* Contenedor principal con animación de entrada */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1] as const
        }}
      >
        {/* Contenido con animación escalonada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Título */}
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Calculadora de Promedio
            </h1>
            <p className="text-gray-600">
              Ingresa el nombre del alumno y sus notas para calcular el promedio
            </p>
          </motion.div>

          {/* Input nombre */}
          <motion.div variants={itemVariants}>
            <input
              type="text"
              value={nombre}
              onChange={handleNombreChange}
              placeholder="Nombre del alumno"
              className="w-full px-4 py-3 text-lg border-2 border-blue-100 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-center"
            />
          </motion.div>

          {/* Input cantidad de notas */}
          <motion.div variants={itemVariants}>
            <input
              type="number"
              min="0"
              value={cantidad}
              onChange={handleCantidadChange}
              placeholder="Cantidad de notas"
              className="w-full px-4 py-3 text-lg border-2 border-blue-100 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-center"
            />
          </motion.div>

          {/* Inputs de notas */}
          {notas.length > 0 && (
            <motion.div 
              className="space-y-3 mb-6"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <p className="text-sm font-medium text-gray-500">Ingresa las notas:</p>
              <div className="grid grid-cols-2 gap-3">
                {notas.map((nota, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={noteInputVariants}
                    className="w-full"
                  >
                    <input
                      type="number"
                      placeholder={`Nota ${index + 1}`}
                      value={nota}
                      onChange={(e) => handleNotaChange(index, e.target.value)}
                      className="w-full px-3 py-2 text-center border-2 border-blue-100 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      min="0"
                      max="20"
                      step="0.01"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Botón */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={calcularPromedio}
              disabled={notas.length === 0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-6 py-3.5 text-lg font-semibold text-white rounded-xl shadow-lg transition-all ${
                notas.length > 0 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-xl hover:shadow-blue-100' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Calcular Promedio
            </motion.button>
          </motion.div>

          {/* Resultado */}
          <AnimatePresence>
            {promedio && (
              <motion.div 
                className="overflow-hidden"
                variants={resultVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className={`p-5 rounded-xl border-2 ${
                  Number(promedio) >= 10 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                    : 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200'
                }`}>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <svg 
                      className={`w-5 h-5 ${Number(promedio) >= 10 ? 'text-green-500' : 'text-rose-500'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {Number(promedio) >= 10 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      )}
                    </svg>
                    <p className={`text-sm font-medium ${Number(promedio) >= 10 ? 'text-green-600' : 'text-rose-600'}`}>
                      {nombre ? `${nombre}, tu promedio es:` : 'El promedio es:'}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center space-x-2">
                    <p className={`text-3xl font-bold ${Number(promedio) >= 10 ? 'text-green-700' : 'text-rose-700'}`}>
                      {promedio}
                    </p>
                    <p className="text-sm text-gray-500">/ 20</p>
                  </div>
                  <p className={`mt-2 text-sm font-medium ${Number(promedio) >= 10 ? 'text-green-600' : 'text-rose-600'}`}>
                    {Number(promedio) >= 10 
                      ? '¡Aprobado! 🎉' 
                      : 'Reprobado 😢'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Botón de regresar con animación */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1] as const 
        }}
      >
        <Link
          href="/"
          className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
