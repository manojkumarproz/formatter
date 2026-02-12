import Link from "next/link";

export default function Home() {
  const tools = [
    {
      name: "JSON Formatter",
      description: "Format and validate JSON instantly",
      link: "/json-formatter",
    },
    {
      name: "Base64 Encoder",
      description: "Encode and decode Base64 strings",
      link: "/base64-encoder",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Developer Tools</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Link key={index} href={tool.link}>
            <div className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">
                {tool.name}
              </h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
