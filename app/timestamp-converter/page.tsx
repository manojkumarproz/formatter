"use client";
import { useState } from "react";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [result, setResult] = useState("");

  const convertTimestamp = () => {
    try {
      const date = new Date(Number(timestamp) * 1000);
      if (isNaN(date.getTime())) {
        setResult("Invalid timestamp");
      } else {
        setResult(date.toString());
      }
    } catch {
      setResult("Invalid timestamp");
    }
  };

  const clearAll = () => {
    setTimestamp("");
    setResult("");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Timestamp Converter</h1>

      <div className="flex gap-3 mb-4">
        <button onClick={convertTimestamp} className="bg-blue-600 text-white px-4 py-2 rounded">
          Convert
        </button>

        <button onClick={clearAll} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter Unix timestamp (e.g. 1700000000)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        className="border p-3 rounded w-full mb-4"
      />

      <textarea
        value={result}
        readOnly
        className="border p-3 rounded w-full h-32 bg-gray-50"
      />
    </div>
  );
}
