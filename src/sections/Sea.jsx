import { motion } from 'framer-motion';

export default function Sea() {
  return (
    <motion.section
      id="sea"
      className="min-h-screen bg-gradient-to-b from-blue-800 to-cyan-400 flex items-center justify-center pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-white">Sea Section</h2>
    </motion.section>
  );
}
