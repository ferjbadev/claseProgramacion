"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto10() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [mayor, setMayor] = useState<string | null>(null);

  const compararNumeros = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    const n3 = Number(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      setMayor("⚠️ Ingresa números válidos.");
      return;
    }

    const max = Math.max(n1, n2, n3);
    setMayor(`El número mayor es: ${max}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-green-200 via-emerald-100 to-teal-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-6">
          🔢 Comparador de Números
        </h1>

        {/* Inputs */}
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
        />
        <input
          type="number"
          placeholder="Número 3"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={compararNumeros}
          className="w-full px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
        >
          Comparar
        </button>

        {/* Resultado */}
        {mayor && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-lg font-semibold text-green-700">{mayor}</p>
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
