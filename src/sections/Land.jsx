// sections/Land.jsx
import { motion } from 'framer-motion';

export default function Land() {
  return (
    <motion.section
      id="land"
      className="min-h-screen bg-gradient-to-b from-green-400 to-lime-200 flex items-center justify-center"
      initial={{ opacity: 0 }}      // Remove y offset to prevent vertical movement
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-white"></h2>
    </motion.section>
  );
}
