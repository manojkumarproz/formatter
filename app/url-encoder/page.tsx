"use client";
import { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeUrl = () => {
    setOutput(encodeURIComponent(input));
  };

  const decodeUrl = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Invalid URL encoding");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">URL Encoder / Decoder</h1>

      <div className="flex gap-3 mb-4">
        <button onClick={encodeUrl} className="bg-blue-600 text-white px-4 py-2 rounded">
          Encode
        </button>

        <button onClick={decodeUrl} className="bg-green-600 text-white px-4 py-2 rounded">
          Decode
        </button>

        <button onClick={clearAll} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>

      <textarea
        placeholder="Enter text or URL..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-3 rounded w-full h-40 mb-4"
      />

      <textarea
        value={output}
        readOnly
        className="border p-3 rounded w-full h-40 bg-gray-50"
      />
    </div>
  );
}
