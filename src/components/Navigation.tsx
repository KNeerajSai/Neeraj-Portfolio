import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container section-padding flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-accent font-mono">{"<"}</span>
          <span className="text-textPrimary">Portfolio</span>
          <span className="text-accent font-mono">{" />"}</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-accent"
              className="link-hover cursor-pointer text-sm font-mono"
            >
              <span className="text-accent">0{index + 1}.</span> {item.name}
            </Link>
          ))}
          <a
            href="SDE Resume 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-accent text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 top-0 h-full w-3/4 bg-secondary shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6 mt-4">
          <button
            className="text-accent text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-12">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-accent"
              className="link-hover cursor-pointer text-lg font-mono"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-accent">0{index + 1}.</span> {item.name}
            </Link>
          ))}
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
