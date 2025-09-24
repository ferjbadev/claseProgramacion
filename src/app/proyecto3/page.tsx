"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    }
  };

  const resultVariants: Variants = {
    hidden: { 
      opacity: 0, 
      height: 0 
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 p-6">
      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Contenido con animación escalonada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Título */}
          <motion.h1 
            className="text-2xl font-bold text-blue-600 mb-2"
            variants={itemVariants}
          >
            Conversor de Temperatura
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 mb-6"
            variants={itemVariants}
          >
            Convierte de °C a °F fácilmente
          </motion.p>

          {/* Input */}
          <motion.div variants={itemVariants}>
            <input
              type="number"
              placeholder="Temperatura en °C"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              className="w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-xl text-center text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
          </motion.div>

          {/* Botón */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={convertir}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Convertir a Fahrenheit
            </motion.button>
          </motion.div>

          {/* Resultado */}
          <AnimatePresence>
            {fahrenheit && (
              <motion.div 
                className="mt-6 overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={resultVariants}
              >
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-xl">
                  <p className="text-sm text-blue-500 font-medium mb-1">
                    Resultado en Fahrenheit:
                  </p>
                  <p className="text-xl font-bold text-blue-700">
                    {typeof fahrenheit === "string"
                      ? fahrenheit
                      : `${celsius} °C = ${fahrenheit} °F`}
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
        transition={{ delay: 0.3, duration: 0.5 }}
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
