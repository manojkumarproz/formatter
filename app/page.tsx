"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Hero */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Free Online Developer Tools
        </h1>
        <p className="text-gray-600 mb-6">
          Format JSON, encode Base64, and use powerful developer tools online.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg p-3 shadow-sm"
        />
      </section>

      <AdPlaceholder />

      {/* Tools Grid */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tools</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredTools.map((tool, index) => (
            <Link key={index} href={tool.link}>
              <div className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="text-gray-500 mt-4">No tools found</p>
        )}
      </section>
    </div>
  );
}
