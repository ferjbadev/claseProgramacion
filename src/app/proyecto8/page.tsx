"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto8() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const calcular = () => {
    const numX = Number(x);
    const numY = Number(y);

    if (isNaN(numX) || isNaN(numY)) {
      setResultado("⚠️ Ingresa números válidos.");
      return;
    }

    if (numY - 5 === 0) {
      setResultado("⚠️ División por cero no permitida.");
      return;
    }

    const r = ((numX + 2) / (numY - 5)).toFixed(2);
    setResultado(r);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          🔢 Calculadora de y = (x+2)/(y-5)
        </h1>

        {/* Input X */}
        <input
          type="number"
          placeholder="Ingresa x"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Input Y */}
        <input
          type="number"
          placeholder="Ingresa y"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={calcular}
          className="w-full px-6 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition"
        >
          Calcular
        </button>

        {/* Resultado */}
        {resultado !== null && (
          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-lg font-semibold text-purple-700">
              {typeof resultado === "string"
                ? resultado
                : `Resultado: y = ${resultado}`}
            </p>
          </div>
        )}
      </div>
         <div className="mt-24">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
