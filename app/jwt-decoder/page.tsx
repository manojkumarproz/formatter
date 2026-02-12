"use client";
import { useState } from "react";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");

  const decodeJWT = () => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        setDecoded("Invalid JWT format");
        return;
      }

      const payload = atob(parts[1]);
      const formatted = JSON.stringify(JSON.parse(payload), null, 2);
      setDecoded(formatted);
    } catch {
      setDecoded("Invalid JWT token");
    }
  };

  const clearAll = () => {
    setToken("");
    setDecoded("");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">JWT Decoder</h1>

      <div className="flex gap-3 mb-4">
        <button onClick={decodeJWT} className="bg-blue-600 text-white px-4 py-2 rounded">
          Decode
        </button>

        <button onClick={clearAll} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>

      <textarea
        placeholder="Paste JWT token..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="border p-3 rounded w-full h-40 mb-4"
      />

      <textarea
        value={decoded}
        readOnly
        className="border p-3 rounded w-full h-60 bg-gray-50"
      />
    </div>
  );
}
