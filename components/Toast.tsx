"use client";

type ToastProps = {
  message: string;
  show: boolean;
};

export default function Toast({ message, show }: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed top-20 right-5 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
}
