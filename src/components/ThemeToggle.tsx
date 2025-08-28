"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-700"
    >
      {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}