"use client";

import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const { useState, useEffect } = React;

const buttons = [
  { href: "/proyecto1", label: "1", color: "bg-blue-500", text: "text-white" },
  { href: "/proyecto2", label: "2", color: "bg-green-500", text: "text-white" },
  { href: "/proyecto3", label: "3", color: "bg-purple-500", text: "text-white" },
  { href: "/proyecto4", label: "4", color: "bg-red-500", text: "text-white" },
  { href: "/proyecto5", label: "5", color: "bg-yellow-500", text: "text-black" },
  { href: "/proyecto6", label: "6", color: "bg-pink-500", text: "text-white" },
  { href: "/proyecto7", label: "7", color: "bg-indigo-500", text: "text-white" },
  { href: "/proyecto8", label: "8", color: "bg-teal-500", text: "text-white" },
  { href: "/proyecto9", label: "9", color: "bg-orange-500", text: "text-white" },
  { href: "/proyecto10", label: "10", color: "bg-cyan-500", text: "text-white" },
  { href: "/proyecto11", label: "11", color: "bg-lime-500", text: "text-black" },
];

const RADIUS = 150; // radio del círculo

const item: Variants = {
  hidden: { 
    opacity: 1, 
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0
  },
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  },
  circle: (index: number) => {
    const angle = (index / buttons.length) * 2 * Math.PI;
    return {
      x: RADIUS * Math.cos(angle),
      y: RADIUS * Math.sin(angle),
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.5 + (index * 0.05)
      }
    };
  }
};

export default function Home() {
  const [animationStage, setAnimationStage] = useState('center');

  useEffect(() => {
    // Iniciar la animación del círculo después de que los botones estén en su lugar
    const timer = setTimeout(() => setAnimationStage('circle'), 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      {/* Texto superior */}
      <motion.h1 
        className="mb-12 text-4xl font-bold text-black px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selecciona un 
        <br />
        Proyecto
      </motion.h1>

      {/* Círculo con botones */}
      <motion.div
        className="relative w-[500px] h-[500px] rounded-full"
        animate={{ rotate: animationStage === 'circle' ? 360 : 0 }}
        transition={{ 
          rotate: { 
            repeat: animationStage === 'circle' ? Infinity : 0, 
            duration: 30, 
            ease: "linear",
            delay: 2
          }
        }}
      >
        {buttons.map((btn, index) => {
          return (
            <motion.div
              key={index}
              variants={item}
              custom={index}
initial="center"
              animate={animationStage}
              className={`absolute px-6 py-4 rounded-full shadow-lg cursor-pointer ${btn.color} ${btn.text} border-2 border-white/20 hover:border-white/50 transition-all`}
              style={{ 
                top: "50%", 
                left: "50%", 
                translateX: "-50%", 
                translateY: "-50%"
              }}
              whileHover={{ 
                scale: 1.2,
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
                zIndex: 10
              }}
            >
              <Link href={btn.href}>{btn.label}</Link>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}
