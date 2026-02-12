"use client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Toast from "@/components/Toast";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [autoFormat, setAutoFormat] = useState(true);
  const [showToast, setShowToast] = useState(false);


  // Manual format function
  const formatJSON = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError("");
    } catch {
      setError("Invalid JSON format");
      setOutput("");
    }
  };

  // Auto format when input changes
  useEffect(() => {
    if (!autoFormat) return;
    formatJSON();
  }, [input, autoFormat]);

    const copyOutput = () => {
        navigator.clipboard.writeText(output);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">

      {/* Toolbar */}
      <div className="sticky top-0 z-10 bg-white border-b p-3 flex gap-3 flex-wrap">
        
        <button
          onClick={formatJSON}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Format
        </button>

        <button
          onClick={copyOutput}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Copy
        </button>

        <button
          onClick={clearAll}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Clear
        </button>

        <label className="flex items-center gap-2 ml-4 text-sm">
          <input
            type="checkbox"
            checked={autoFormat}
            onChange={() => setAutoFormat(!autoFormat)}
          />
          Auto Format
        </label>

        {error && (
          <span className="text-red-500 ml-4 font-medium">
            {error}
          </span>
        )}
      </div>

      {/* Editors */}
      <div className="grid md:grid-cols-2 flex-1">
        <Editor
          height="100%"
          defaultLanguage="json"
          value={input}
          onChange={(value) => setInput(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
          }}
        />

        <Editor
          height="100%"
          defaultLanguage="json"
          value={output}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
          }}
        />
      </div>

      {/* Status bar */}
      <div className="bg-gray-900 text-white text-sm px-4 py-2 flex justify-between">
        <span>Input Characters: {input.length}</span>
        <span>Output Characters: {output.length}</span>
      </div>

      <Toast message="Copied to clipboard" show={showToast} />
    </div>
  );
}
