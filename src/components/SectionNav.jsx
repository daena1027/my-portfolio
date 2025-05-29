import { useState, useEffect, useRef } from 'react';

const sections = ['sky', 'land', 'sea'];

export default function SectionNav() {
  const [active, setActive] = useState('sky');
  const buttonRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Track scroll position and update active section accordingly
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

  // Handle keyboard navigation between dots
  const handleKeyDown = (e, i) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (i + 1) % sections.length;
      buttonRefs.current[next]?.focus();
      setFocusedIndex(next);
      setActive(sections[next]);
      document.getElementById(sections[next])?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (i - 1 + sections.length) % sections.length;
      buttonRefs.current[prev]?.focus();
      setFocusedIndex(prev);
      setActive(sections[prev]);
      document.getElementById(sections[prev])?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById(sections[i])?.scrollIntoView({ behavior: 'smooth' });
      setActive(sections[i]);
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
    >
      {sections.map((section, i) => (
        <button
          key={section}
          ref={(el) => (buttonRefs.current[i] = el)}
          aria-label={`Go to ${section}`}
          aria-current={active === section ? 'true' : undefined}
          className={`w-4 h-4 rounded-full border-2 border-gray-400 
            ${active === section ? 'bg-gray-800' : 'bg-transparent'}
            hover:bg-gray-600 transition`}
          onClick={() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            setActive(section);
          }}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onFocus={() => setFocusedIndex(i)}
          onBlur={() => setFocusedIndex(null)}
        />
      ))}
    </nav>
  );
}
