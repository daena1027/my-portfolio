import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiExpo
} from 'react-icons/si';
import { TbMapSearch } from 'react-icons/tb'; // For GIS

export default function Land() {
  return (
    <motion.section
      id="land"
      className="min-h-screen bg-gradient-to-b from-green-300 via-teal-600 to-cyan-500 text-white px-6 flex flex-col items-center justify-start pt-32 pb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed space-y-6">
        {/* Intro */}
        <p className="text-sm sm:text-base text-white/90">Creative technologist | Advocate for tech for good</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Hi, I’m Daena</h2>
        <p>
          I’m a software engineering student with a passion for leveraging technology to make a positive impact. 
          Driven by curiosity and a commitment to social good, I enjoy blending creativity and problem-solving 
          to develop solutions that matter. At the heart of my work is a single goal: using technology to serve communities and the planet.
        </p>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 text-4xl justify-items-center">
            {/* Web Dev */}
            <IconItem icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
            <IconItem icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
            <IconItem icon={<FaJs className="text-yellow-400" />} label="JavaScript" />
            <IconItem icon={<FaReact className="text-cyan-300" />} label="React" />
            <IconItem icon={<SiTailwindcss className="text-teal-300" />} label="Tailwind" />
            <IconItem icon={<FaNodeJs className="text-green-300" />} label="Node.js" />
            <IconItem icon={<SiMongodb className="text-green-200" />} label="MongoDB" />
            <IconItem icon={<SiFirebase className="text-orange-300" />} label="Firebase" />
            <IconItem icon={<FaGitAlt className="text-orange-400" />} label="Git" />
            <IconItem icon={<FaGithub className="text-white" />} label="GitHub" />
            {/* New tools */}
            <IconItem icon={<FaPython className="text-yellow-300" />} label="Python" />
            <IconItem icon={<SiFigma className="text-pink-300" />} label="Figma" />
            <IconItem icon={<TbMapSearch className="text-white" />} label="GIS (QGIS/ArcGIS)" />
            <IconItem icon={<SiExpo className="text-gray-300" />} label="Expo" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-white/90 list-disc list-inside pl-2">
            <li>Project planning & coordination</li>
            <li>Cross-cultural communication (English & Khmer)</li>
            <li>User experience (UX) research</li>
            <li>Problem-solving & creativity</li>
            <li>Teamwork and leadership</li>
          </ul>
        </div>

        {/* Scroll Button */}
        <a href="#projects" className="mt-8">
          <button className="mt-12 px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow-md hover:bg-blue-100 transition">
            ↓ Dive into My Projects
          </button>
        </a>
      </div>
    </motion.section>
  );
}

// Small helper component to reduce repetition
function IconItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
