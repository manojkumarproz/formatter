"use client";
import { useState } from "react";
import bcrypt from "bcryptjs";
import Toast from "@/components/Toast";

export default function BcryptGenerator() {
  const [text, setText] = useState("");
  const [cost, setCost] = useState(10);
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const generateHash = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const salt = await bcrypt.genSalt(cost);
      const hashed = await bcrypt.hash(text, salt);
      setHash(hashed);
    } catch (err) {
      setHash("Error generating hash");
    }

    setLoading(false);
  };

    const copyHash = () => {
    navigator.clipboard.writeText(hash);
    setShowToast(true);

    setTimeout(() => {
        setShowToast(false);
    }, 2000);
    };

  const clearAll = () => {
    setText("");
    setHash("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Bcrypt Hash Generator
      </h1>

      {/* Input */}
      <label className="block mb-2 font-medium">Plain Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-3 w-full mb-4"
        placeholder="Enter text or password"
      />

      {/* Cost Factor */}
      <label className="block mb-2 font-medium">Cost Factor</label>
      <input
        type="number"
        value={cost}
        min={4}
        max={15}
        onChange={(e) => setCost(Number(e.target.value))}
        className="border rounded p-3 w-full mb-6"
      />

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={generateHash}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Generating..." : "Generate Hash"}
        </button>

        <button
          onClick={clearAll}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {/* Output */}
      {hash && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium">Output</label>
            <button
              onClick={copyHash}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
          </div>

          <textarea
            value={hash}
            readOnly
            className="border rounded p-3 w-full h-32 bg-gray-50"
          />
        </div>
      )}
      <Toast message="Copied to clipboard" show={showToast} />
    </div>
  );
}
