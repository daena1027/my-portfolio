// sections/Land.jsx
import { motion } from 'framer-motion';

export default function Land() {
  return (
    <motion.section
      id="land"
      className="min-h-screen bg-gradient-to-b from-green-400 via-teal-600 to-cyan-500 text-white px-6 flex items-start justify-center pt-32 pb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed space-y-4">
      
      {/* Optional Tagline */}
      <p className="text-sm sm:text-base text-white/90 mt-4">
        Software engineering student | Creative technologist | Advocate for tech for good
      </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">Hi, I’m Daena</h2>

        <p>
          I’m a software engineering student with a passion for leveraging technology to make a positive impact. 
          My work spans projects that promote sustainability, bilingual education, and cultural awareness — 
          reflecting my belief that tech should serve communities and the environment.
        </p>

        <p>
          Driven by curiosity and a commitment to social good, I enjoy blending creativity and problem-solving 
          to develop solutions that matter. Whether building a sustainability challenge app or a museum finder 
          web application, I strive to create experiences that educate, inspire, and connect people.
        </p>
      </div>
    </motion.section>
  );
}
