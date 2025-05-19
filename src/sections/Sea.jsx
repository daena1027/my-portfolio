import { motion } from 'framer-motion';

export default function Sea() {
  return (
    <motion.section
      id="sea"    
      className="min-h-screen bg-gradient-to-b from-blue-800 to-cyan-400 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-white">🌊 Sea</h2>
    </motion.section>
  );
}
