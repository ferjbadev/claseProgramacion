"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Home() {
  const radius = 150; // radio del círculo

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Texto superior */}
      <h1 className="mb-12 text-3xl font-bold text-gray-800">Selecciona un Número!</h1>

      {/* Círculo con botones */}
      <motion.div
        className="relative w-[400px] h-[400px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {buttons.map((btn, index) => {
          const angle = (index / buttons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className={`absolute px-6 py-4 rounded-full shadow cursor-pointer ${btn.color} ${btn.text} border border-black`}
              style={{ top: "50%", left: "50%", x, y, translateX: "-50%", translateY: "-50%" }}
              whileHover={{ scale: 1.2 }}
            >
              <Link href={btn.href}>{btn.label}</Link>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}
