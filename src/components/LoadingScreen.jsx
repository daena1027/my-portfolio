import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const globeEl = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Slow automatic rotation
      let angle = 0;
      const rotationSpeed = 0.002; // radians per frame

      const animate = () => {
        angle += rotationSpeed;
        globeEl.current.pointOfView({ lat: 0, lng: angle * (180 / Math.PI), altitude: 2 });
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center
      bg-gradient-to-br from-green-800 via-brown-700 to-blue-800
      text-white z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-48 h-48 mb-6">
        <Globe
          ref={globeEl}
          globeImageUrl="//cdn.jsdelivr.net/npm/three-globe@2.24.5/example/img/earth-day.jpg"
          backgroundColor="rgba(19, 150, 104, 0)" // transparent background inside div
          width={192}
          height={192}
          animateIn={true}
        />
      </div>
      <p className="text-lg tracking-wide">Welcome!</p>
    </div>
  );
}
