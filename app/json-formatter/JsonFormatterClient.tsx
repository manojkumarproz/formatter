"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError("");
    } catch {
      setError("Invalid JSON");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JSON Formatter</h1>

      <div className="flex gap-3 mb-4">
        <button onClick={formatJSON} className="bg-blue-600 text-white px-4 py-2 rounded">
          Format
        </button>

        <button onClick={copyOutput} className="bg-green-600 text-white px-4 py-2 rounded">
          Copy
        </button>

        <button onClick={clearAll} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

        <div className="grid md:grid-cols-2 gap-4">
            <Editor
                height="400px"
                defaultLanguage="json"
                value={input}
                onChange={(value) => setInput(value || "")}
                theme="vs-dark"
            />

            <Editor
                height="400px"
                defaultLanguage="json"
                value={output}
                options={{
                readOnly: true,
                minimap: { enabled: false },
                }}
                theme="vs-dark"
            />
        </div>

    </div>
  );
}
