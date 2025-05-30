import { motion } from 'framer-motion';

export default function Divider({ type }) {
  if (type === 'flight') {
    return (
      <section className="relative h-40 bg-gradient-to-b from-blue-300 to-green-400 overflow-hidden">
        {/* Elegant drifting cloud SVGs */}
        <motion.svg
          className="absolute top-6 left-0 w-48 h-24 opacity-50"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M10 20c0-5.523 4.477-10 10-10 3.254 0 6.12 1.558 8 4 1.88-2.442 4.746-4 8-4 5.523 0 10 4.477 10 10H10z"
            fill="white"
          />
        </motion.svg>
        <motion.svg
          className="absolute top-12 left-1/3 w-56 h-28 opacity-40"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M8 20c0-5.523 4.477-10 10-10 3.254 0 6.12 1.558 8 4 1.88-2.442 4.746-4 8-4 5.523 0 10 4.477 10 10H8z"
            fill="white"
          />
        </motion.svg>
        <motion.svg
          className="absolute top-8 right-10 w-48 h-24 opacity-45"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M12 20c0-4.418 3.582-8 8-8 2.537 0 4.768 1.214 6.25 3.125C28.232 13.214 30.463 12 33 12c4.418 0 8 3.582 8 8H12z"
            fill="white"
          />
        </motion.svg>
      </section>
    );
  }

  if (type === 'dive') {
    return (
      <section className="relative h-32 bg-gradient-to-b from-cyan-400 to-blue-600 overflow-hidden">
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          initial={{ x: 0 }}
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            fill="#2563eb" // slightly darker blue matching sea start
            fillOpacity="0.5"
            d="M0,96L40,112C80,128,160,160,240,181.3C320,203,400,213,480,192C560,171,640,117,720,106.7C800,96,880,128,960,138.7C1040,149,1120,139,1200,117.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </motion.svg>
      </section>
    );
  }

  return null;
}
