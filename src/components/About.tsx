import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    'Python (NumPy, Pandas)',
    'SQL (PostgreSQL, Oracle)',
    'Apache Spark',
    'TensorFlow',
    'PyTorch',
    'AWS',
    'Hadoop',
    'Tableau',
    'R & Java',
    'Docker & Git',
  ];

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="section-container section-padding w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center mb-10">
            <h2 className="heading-2 text-textPrimary">
              <span className="text-accent font-mono text-xl md:text-2xl mr-2">01.</span>
              About Me
            </h2>
            <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-textSecondary leading-relaxed">
                Hello! My name is Neeraj Sai Kondaveeti and I'm passionate about leveraging data to solve complex problems. 
                Currently pursuing my Master's in Information Management at UIUC, I specialize in building scalable data 
                systems and AI-driven applications that deliver real business value.
              </p>
              
              <p className="text-textSecondary leading-relaxed">
                My professional journey includes working as a{' '}
                <span className="text-accent">Student Data Engineer at UIUC Veterinary Medicine</span>, an{' '}
                <span className="text-accent">AI Software Engineer Intern at Chinchilla AI</span>, and a{' '}
                <span className="text-accent">Senior Data Analyst at Capgemini</span>. I've successfully delivered 
                projects ranging from NL2SQL systems to real-time streaming APIs and multi-million record ETL pipelines.
              </p>
              
              <p className="text-textSecondary leading-relaxed">
                My expertise spans across data engineering, machine learning, and full-stack development. I enjoy 
                working with large datasets, optimizing performance, and creating intelligent systems that automate 
                complex processes and provide actionable insights.
              </p>

              <p className="text-textSecondary">
                Here are some of the key technologies I work with:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {technologies.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-textSecondary text-sm"
                  >
                    <span className="text-accent mr-2 font-mono">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                <div className="relative bg-secondary rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Profile"
                    className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;