"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyecto4() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const generarSaludo = () => {
    if (!nombre.trim() || !edad.trim() || isNaN(Number(edad))) {
      setMensaje("⚠️ Ingresa un nombre y una edad válida.");
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 p-6">
      
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
          className="text-xl font-bold mb-6 text-pink-600"
        >
          4-) En esta sección, vamos a generar un saludo personalizado 👋
        </motion.p>

        {/* Input nombre */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-pink-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-center"
          />
        </motion.div>

        {/* Input edad */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-pink-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-center"
          />
        </motion.div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={generarSaludo}
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={animating}
          >
            {animating ? 'Generando...' : 'Generar Saludo'}
          </motion.button>
        </motion.div>

        {/* Resultado */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={mensaje ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {mensaje && (
            <motion.div 
              className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg font-semibold text-pink-700">
                {mensaje.includes('⚠️') ? (
                  <span className="text-red-500">{mensaje}</span>
                ) : (
                  <>
                    <span className="block text-sm text-pink-500 mb-1">¡Saludo personalizado!</span>
                    <span className="text-xl">{mensaje}</span>
                  </>
                )}
              </p>
            </motion.div>
          )}
        </motion.div>

      </motion.div>

      {/* Botón de regresar */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
