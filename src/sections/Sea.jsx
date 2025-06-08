import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Sustainability Challenge App',
    description: 'A community-driven platform encouraging sustainable habits through gamified challenges.',
    role: 'Full-stack developer, UI/UX design, Product Owner',
    challenge: 'Engaging users in consistent eco-friendly habits with a fun gamification system.',
    collaborators: 'Worked solo on development and design.',
    tech: 'React, Firebase, Tailwind CSS',
    image: '/images/sustainability-challenge.jpg',
    demo: 'https://your-demo-link.com/sustainability',
  },
  {
    title: 'Bilingual Computer Science & Space Quiz App',
    description: 'An educational quiz app in English and Khmer, making learning fun and accessible.',
    role: 'Lead developer',
    challenge: 'Creating a bilingual app that supports English and Khmer seamlessly.',
    collaborators: 'Collaborated with educators for content accuracy.',
    tech: 'React Native, Expo, Firebase',
    image: '/images/bilingual-quiz-app.jpg',
    demo: 'https://your-demo-link.com/quiz',
  },
  {
    title: 'Museum Finder Web App',
    description: 'A user-friendly web app to discover museums and cultural sites with detailed info and search filters.',
    role: 'Frontend developer, Project manager',
    challenge: 'Building an intuitive search and filtering experience for diverse users.',
    collaborators: 'Worked with a small UX team.',
    tech: 'React, Tailwind CSS, REST APIs',
    image: '/images/museum-finder.jpg',
    demo: 'https://your-demo-link.com/museum-finder',
  },
  {
    title: 'Campground Website (Minnesota)',
    description: 'A clean, responsive website showcasing a real campground with booking and information features.',
    role: 'Web designer and developer',
    challenge: 'Designing an engaging site that boosts bookings and engagement.',
    collaborators: 'Solo project',
    tech: 'React, Vite, Tailwind CSS',
    image: '/images/MapleLakeCampLogo.png', 
    demo: 'https://your-demo-link.com/campground',
  },
];

export default function Sea() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="sea"
        className="min-h-screen flex flex-col items-center justify-start pt-24 px-6"
        style={{
          background: 'linear-gradient(to bottom, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)',
        }}
      >
        <h2 className="text-5xl font-bold text-white mb-12">Dive into My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-blue-500 rounded-lg shadow-lg cursor-pointer overflow-hidden hover:shadow-2xl transition"
              onClick={() => setSelectedProject(proj)}
              whileHover={{ scale: 1.05 }}
              layoutId={`card-container-${i}`}
            >
              <img
                src={proj.image}
                alt={`${proj.title} screenshot`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
                <p className="text-sm text-blue-200 mt-2">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl max-w-xl w-full p-8 relative shadow-2xl text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-blue-300"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="mb-4 italic text-blue-300">{selectedProject.description}</p>

                <div className="space-y-3 text-white/90 text-sm">
                  <p><span className="font-semibold">Role:</span> {selectedProject.role}</p>
                  <p><span className="font-semibold">Challenge:</span> {selectedProject.challenge}</p>
                  <p><span className="font-semibold">Collaborators:</span> {selectedProject.collaborators}</p>
                  <p><span className="font-semibold">Tech:</span> {selectedProject.tech}</p>
                  {selectedProject.demo && (
                    <p>
                      <span className="font-semibold">Demo:</span>{' '}
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                      >
                        Live Demo
                      </a>
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
