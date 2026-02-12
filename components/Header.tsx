import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          DevTools
        </Link>

        {/* <nav className="flex gap-6 text-sm">
          <Link href="/json-formatter" className="hover:text-gray-300">
            JSON Formatter
          </Link>

          <Link href="/base64-encoder" className="hover:text-gray-300">
            Base64 Tool
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
