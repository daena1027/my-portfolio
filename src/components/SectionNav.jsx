import { useState, useEffect } from 'react';

const sections = ['sky', 'land', 'sea'];

export default function SectionNav() {
  const [active, setActive] = useState('sky');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <button
          key={section}
          aria-label={`Go to ${section}`}
          className={`w-4 h-4 rounded-full border-2 border-gray-400 
            ${active === section ? 'bg-gray-800' : 'bg-transparent'}
            hover:bg-gray-600 transition`}
          onClick={() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </nav>
  );
}
