import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sustainability Challenge App',
    summary: 'Gamified platform encouraging eco-friendly habits.',
    role: 'Full-stack developer, UI/UX design',
    tech: 'React, Firebase, Tailwind CSS',
    impact: 'Motivated users to adopt eco-friendly behaviors through daily challenges.',
    image: '/images/sustainability.png',
    tags: ['Sustainability', 'Gamification'],
  },
  {
    title: 'Bilingual CS & Space Quiz App',
    summary: 'Fun, accessible bilingual STEM learning in English and Khmer.',
    role: 'Lead developer',
    tech: 'React Native, Expo, Firebase',
    impact: 'Promoted bilingual education and STEM in underserved communities.',
    image: '/images/quizapp.png',
    tags: ['Education', 'Bilingual', 'Mobile'],
  },
  {
    title: 'Museum Finder Web App',
    summary: 'Discover museums and cultural sites easily.',
    role: 'Frontend developer, UX research',
    tech: 'React, REST APIs, Tailwind CSS',
    impact: 'Enhanced access to cultural resources and tourism info.',
    image: '/images/museum.png',
    tags: ['Culture', 'Tourism', 'UX'],
  },
  {
    title: 'Campground Website',
    summary: 'Modern site for a real Minnesota campground.',
    role: 'Web designer and developer',
    tech: 'React, Vite, Tailwind CSS',
    impact: 'Improved visibility and engagement for the campground.',
    image: '/images/campground.png',
    tags: ['Small Business', 'Design'],
  },
];

export default function Sea() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div style={{ marginTop: '-4rem' }} />
      <section
        id="sea"
        className="min-h-screen pt-16 pb-24 px-6 text-white"
        style={{
          marginTop: '-4rem',
          background: 'linear-gradient(to bottom, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Dive into My Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg cursor-pointer hover:bg-white/20 transition duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-white/80 text-sm mt-2">{project.summary}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/20 px-2 py-1 rounded-full text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <Dialog.Panel className="bg-white/10 backdrop-blur-xl text-white max-w-xl w-full p-6 rounded-2xl shadow-2xl border border-white/20">
            {selectedProject && (
              <>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-sm text-white/90 mb-4">{selectedProject.summary}</p>
                <div className="space-y-2 text-sm text-white/80">
                  <p><span className="font-semibold">Role:</span> {selectedProject.role}</p>
                  <p><span className="font-semibold">Tech:</span> {selectedProject.tech}</p>
                  <p><span className="font-semibold">Impact:</span> {selectedProject.impact}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition"
                >
                  Close
                </button>
              </>
            )}
          </Dialog.Panel>
        </Dialog>
      </section>
    </>
  );
}
