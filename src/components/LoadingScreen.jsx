import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000); // Show for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center
        bg-gradient-to-br from-green-800 via-brown-700 to-blue-800 
        text-white z-50 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="w-20 h-20 mb-6 animate-spin-slow">
        {/* Simple stylized Earth SVG */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="32" cy="32" r="30" fill="#2c6e49" stroke="#1f4d34" strokeWidth="2" />
          {/* Land masses (simplified) */}
          <path
            d="M20 20c5 1 6 5 4 8s-2 5 2 6c4 1 5-3 7-5s4-6 1-9-10-4-14 0z"
            fill="#a7d49b"
          />
          <path
            d="M40 40c3-2 6-1 7 1s-2 5-6 5-6-3-5-5 2-2 4-1z"
            fill="#a7d49b"
          />
        </svg>
      </div>
      <p className="text-lg tracking-wide">Welcome!</p>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
