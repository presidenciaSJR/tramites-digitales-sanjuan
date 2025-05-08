"use client";

import { useState } from "react";

export default function LoginForm() {
  const [curp, setCurp] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CURP:", curp, "Password:", password);
    // Aquí puedes hacer el fetch al backend para validar el login
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 mt-6">
      <div>
        <input
          type="text"
          value={curp}
          onChange={(e) => setCurp(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Curp"
          required
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Contraseña"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0b3b60] text-white py-3 rounded-full hover:bg-blue-800 transition"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}
