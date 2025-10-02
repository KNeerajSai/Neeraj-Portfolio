import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['AI Software Engineer', 'Data Engineer'];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, typingSpeed]);

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTypingSpeed(2000);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 100 : 150);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto relative">
          <motion.p variants={itemVariants} className="text-accent font-mono text-sm md:text-base mb-4">
            Hi, my name is
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="heading-1 mb-4">
            <span className="block">Neeraj Sai Kondaveeti.</span>
            <span className="block text-textSecondary">I build data-driven solutions.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl text-textSecondary">
              I'm a <span className="text-accent font-mono">{text}<span className="animate-pulse">|</span></span>
            </h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-textSecondary mb-12 max-w-3xl leading-relaxed"
          >
            I'm a Data Engineer and AI Software Engineer pursuing my Master's in Information Management at UIUC. 
            I specialize in building scalable data systems, ML pipelines, and AI-driven applications that solve 
            real-world problems with data-driven insights.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-secondary cursor-pointer inline-flex items-center group"
            >
              Check out my work!
              <FiExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              onClick={(e) => {
                // Debug: log the actual URL being used
                console.log('Resume URL:', `${process.env.PUBLIC_URL}/resume.pdf`);
                console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
              }}
            >
              View Resume
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <a
              href="https://github.com/k-neeraj-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/k-neeraj-sai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:nsk9@illinois.edu"
              className="text-textSecondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            >
              <FiMail size={24} />
            </a>
          </motion.div>

        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-textSecondary hover:text-accent cursor-pointer block animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>

      {/* Side elements */}
      <div className="hidden md:block fixed left-12 bottom-0">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-textSecondary after:block">
          <a
            href="https://github.com/k-neeraj-sai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/k-neeraj-sai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:nsk9@illinois.edu"
            className="text-textSecondary hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <div className="hidden md:block fixed right-12 bottom-0">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-textSecondary after:block">
          <a
            href="mailto:nsk9@illinois.edu"
            className="text-textSecondary hover:text-accent transition-colors duration-300 font-mono text-sm tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            nsk9@illinois.edu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
