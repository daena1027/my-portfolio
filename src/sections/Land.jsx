import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiExpo, SiQgis, SiArcgis,
} from 'react-icons/si';

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
      <div className="-mt-25 max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed space-y-6">
        {/* Intro */}
        <p className="text-sm sm:text-base text-white/90">
          Creative technologist | Advocate for tech for good
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Hi, I'm Daena</h2>
        <p>
          I'm a software engineering student with a passion for leveraging technology to make a positive impact.
          Driven by curiosity and a commitment to social good, I enjoy blending creativity and problem-solving
          to develop solutions that matter. At the heart of my work is a single goal: using technology to serve communities and the planet.
        </p>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 text-4xl justify-items-center">
            <div className="flex flex-col items-center space-y-1">
              <FaHtml5 className="text-orange-500" />
              <span className="text-sm">HTML</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaCss3Alt className="text-blue-500" />
              <span className="text-sm">CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaJs className="text-yellow-400" />
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaReact className="text-cyan-300" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiTailwindcss className="text-teal-300" />
              <span className="text-sm">Tailwind</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaNodeJs className="text-green-300" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiMongodb className="text-green-200" />
              <span className="text-sm">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiFirebase className="text-orange-300" />
              <span className="text-sm">Firebase</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaGitAlt className="text-orange-400" />
              <span className="text-sm">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaGithub className="text-white" />
              <span className="text-sm">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaPython className="text-yellow-200" />
              <span className="text-sm">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiFigma className="text-pink-200" />
              <span className="text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiExpo className="text-white" />
              <span className="text-sm">Expo</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiQgis className="text-green-100" />
              <span className="text-sm">QGIS</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <SiArcgis className="text-green-100" />
              <span className="text-sm">ArcGIS</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="flex flex-col gap-2 text-base text-white/90 list-disc list-inside pl-2">
            <li>Project planning & coordination</li>
            <li>User experience (UX) research</li>
            <li>Problem-solving & creativity</li>
            <li>Teamwork and leadership</li>
            <li>Bilingual (English & Khmer)</li>
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
