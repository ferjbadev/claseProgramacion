<<<<<<< HEAD
"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Proyecto4() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const generarSaludo = () => {
    if (!nombre.trim() || !edad.trim() || isNaN(Number(edad))) {
      setMensaje("⚠️ Ingresa un nombre y una edad válida");
      return;
    }

    setAnimating(true);
    
    // Resetear animación
    setMensaje(null);
    
    // Pequeño retraso para permitir que la animación de reset se complete
    setTimeout(() => {
      setMensaje(`Hola, ${nombre}. Tienes ${edad} años 🎉`);
      setAnimating(false);
    }, 100);
  };

  // Animación para los elementos de entrada
  const containerVariants: Variants = {
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
  } as const;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
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
        ease: [0.04, 0.62, 0.23, 0.98] as const
      }
    }
  } as const;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 p-6">
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Generador de Saludos
            </h1>
            <p className="text-gray-600">
              Ingresa tu nombre y edad para recibir un saludo personalizado
            </p>
          </motion.div>

          {/* Input nombre */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa tu nombre"
                className="w-full px-4 py-3 text-lg border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 text-center"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Input edad */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="120"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                placeholder="Ingresa tu edad"
                className="w-full px-4 py-3 text-lg border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 text-center pl-12"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Botón */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={generarSaludo}
              disabled={animating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-6 py-3.5 text-lg font-semibold text-white rounded-xl shadow-lg transition-all ${
                !animating 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl hover:shadow-pink-100' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {animating ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Generando...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  <span>Generar Saludo</span>
                </div>
              )}
            </motion.button>
          </motion.div>

          {/* Resultado */}
          <AnimatePresence>
            {mensaje && (
              <motion.div 
                className="overflow-hidden"
                variants={resultVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={mensaje}
              >
                {mensaje.includes('⚠️') ? (
                  <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 rounded-xl">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-red-600 font-medium">{mensaje}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-100 rounded-xl">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium text-pink-600">¡Saludo personalizado!</p>
                    </div>
                    <p className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {mensaje}
                    </p>
                  </div>
                )}
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
=======
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
>>>>>>> parent of b9c0996 (proyecto4)
}

export default page