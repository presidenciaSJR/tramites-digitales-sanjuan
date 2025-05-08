// components/Header.jsx
"use client";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <FaUserCircle size={30} />
      </div>
    </header>
  );
}
