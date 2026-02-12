"use client";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-4">
      <button
        onClick={() => router.back()}
        className="text-blue-600 font-bold text-sm hover:underline"
      >
        ← Back
      </button>

      <span className="ml-4 text-gray-500">
        Home / {title}
      </span>
    </div>
  );
}
