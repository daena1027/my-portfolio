import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000); // Show for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a23] text-white z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-20 h-20 border-4 border-dotted border-white rounded-full animate-spin mb-6"></div>
      <p className="text-lg tracking-wide">Welcome!</p>
    </div>
  );
}
