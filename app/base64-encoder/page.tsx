"use client";
import { useState } from "react";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeText = () => {
    setOutput(btoa(input));
  };

  const decodeText = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Base64 Encoder / Decoder</h1>

      <div className="flex gap-3 mb-4">
        <button
          onClick={encodeText}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Encode
        </button>

        <button
          onClick={decodeText}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Decode
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <textarea
          placeholder="Enter text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-3 rounded h-96 w-full"
        />

        <textarea
          value={output}
          readOnly
          className="border p-3 rounded h-96 w-full bg-gray-50"
        />
      </div>
    </div>
  );
}
