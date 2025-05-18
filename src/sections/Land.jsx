import { motion } from 'framer-motion';

export default function Land() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-green-400 to-lime-200 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-white">🌍 Land</h2>
    </motion.section>
  );
}
