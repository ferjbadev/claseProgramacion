"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto9() {
  const [nota, setNota] = useState("");
  const [calificacion, setCalificacion] = useState<string | null>(null);

  const calcularCalificacion = () => {
    const n = Number(nota);

    if (isNaN(n) || n < 0 || n > 100) {
      setCalificacion("⚠️ Ingresa una calificación válida (0-100).");
      return;
    }

    let letra = "";

    if (n >= 90) letra = "A";
    else if (n >= 80) letra = "B";
    else if (n >= 70) letra = "C";
    else if (n >= 60) letra = "D";
    else letra = "F";

    setCalificacion(`Tu calificación es: ${letra}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-200 via-cyan-100 to-indigo-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          📝 Calificador de Notas
        </h1>

        {/* Input */}
        <input
          type="number"
          placeholder="Ingresa tu calificación (0-100)"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={calcularCalificacion}
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Calcular Calificación
        </button>

        {/* Resultado */}
        {calificacion && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg font-semibold text-blue-700">{calificacion}</p>
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
