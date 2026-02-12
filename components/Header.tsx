"use client";
import Link from "next/link";
import { useState } from "react";
import { tools } from "@/lib/tools";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-xl font-bold">
          DevTools
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-800 px-4 py-2 rounded"
          >
            Tools ▼
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
              {tools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.link}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
