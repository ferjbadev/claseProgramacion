"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Proyecto2() {
  const [radio, setRadio] = useState("");
  const [area, setArea] = useState<string | null>(null);
  
  const calcularArea = () => {
    const r = Number(radio);

    if (isNaN(r) || r <= 0) {
      setArea("⚠️ Ingresa un número válido mayor a 0");
      return;
    }

    const pi = 3.14159;
    const resultado = (pi * r * r).toFixed(2); // Fórmula: π * r²
    setArea(resultado);
  };

  // Animación para los elementos de entrada
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // cubic-bezier(0.16, 1, 0.3, 1)
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1] // cubic-bezier(0.33, 1, 0.68, 1)
      }
    }
  };

  const resultVariants: Variants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1.5rem",
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] // cubic-bezier(0.16, 1, 0.3, 1)
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 p-6">
      {/* Contenedor principal con animación de entrada */}
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center border border-white/20 overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Calculadora de Área
            </h1>
            <p className="text-gray-600">
              Ingresa el radio para calcular el área del círculo
            </p>
          </motion.div>

          {/* Input */}
          <motion.div variants={itemVariants}>
            <input
              type="number"
              placeholder="Ingresa el radio"
              value={radio}
              onChange={(e) => setRadio(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 text-center"
              step="any"
              min="0"
            />
          </motion.div>

          {/* Botón */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={calcularArea}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3.5 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Calcular Área
            </motion.button>
          </motion.div>

          {/* Resultado */}
          <AnimatePresence>
            {area && (
              <motion.div
                variants={resultVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100 rounded-xl">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-purple-600">
                      El área del círculo es:
                    </p>
                  </div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {typeof area === "string" ? area : `${area} u²`}
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
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
