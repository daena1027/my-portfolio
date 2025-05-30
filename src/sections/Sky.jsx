import { motion } from 'framer-motion';

export default function Sky() {
  return (
    <motion.section
      id="sky"
      className="min-h-[50vh] max-h-[60vh] bg-gradient-to-b from-sky-400 to-blue-250 flex flex-col items-center justify-center text-center px-6"
      style={{ marginBottom: '-4rem' }}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Personal Brand Statement */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-lg max-w-3xl leading-relaxed">
        “My dream is to help build systems that <span className="whitespace-nowrap">protect and connect</span> the world — by land, sea, and sky.”
      </h1>

    </motion.section>
  );
}
