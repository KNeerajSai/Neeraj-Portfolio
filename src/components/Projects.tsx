import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Customer Journey Optimization',
      description: 'Comprehensive predictive modeling and attribution system using Adobe Analytics simulation. Built ML models to forecast customer conversions and optimize marketing spend, achieving 18% ROI improvement and 22% reduction in campaign overspend.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Spark MLlib', 'Tableau', 'Adobe Analytics'],
      githubUrl: 'https://github.com/k-neeraj-sai',
      featured: true,
    },
    {
      id: 2,
      title: 'NL2SQL Agent System',
      description: 'Developed an intelligent NL2SQL system that converts natural language queries into optimized SQL statements. Integrated with Python, SQL, and LLMs to create a multi-threaded CLI tool for database interactions with 30% performance improvement.',
      technologies: ['Python', 'SQL', 'LLMs', 'CLI', 'Multi-threading', 'PostgreSQL'],
      githubUrl: 'https://github.com/k-neeraj-sai',
      featured: true,
    },
    {
      id: 3,
      title: 'Real-time Streaming API',
      description: 'Built production-ready streaming APIs for LLM inference pipelines with concurrent request handling. Achieved sub-200ms latency responses and implemented multi-threaded Python services for asynchronous data processing.',
      technologies: ['Python', 'FastAPI', 'React.js', 'AWS', 'Multi-threading', 'LLMs'],
      githubUrl: 'https://github.com/k-neeraj-sai',
      featured: true,
    },
  ];

  const otherProjects: Project[] = [
    {
      id: 4,
      title: 'ETL Pipeline Optimization',
      description: 'Engineered and optimized SQL ETL pipelines for multi-million record datasets, improving system performance by 40%',
      technologies: ['Python', 'Oracle SQL', 'ETL', 'Performance Tuning'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
    {
      id: 5,
      title: 'IoT Anomaly Detection System',
      description: 'Developed Java prototype system for processing 50K+ IoT sensor logs with multi-threading for concurrent stream processing',
      technologies: ['Java', 'Multi-threading', 'Stream Processing', 'SQL'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
    {
      id: 6,
      title: 'Portfolio Management Dashboard',
      description: 'Built end-to-end data visualization dashboards integrating streaming pipelines with front-end UIs, reducing project overlap by 15%',
      technologies: ['Python', 'SQL', 'Data Visualization', 'Streaming'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
    {
      id: 7,
      title: 'NLP Chatbot System',
      description: 'Programmed Python + AWS NLP chatbot with modular API design, automating 35% of query responses with authentication layers',
      technologies: ['Python', 'AWS', 'NLP', 'REST APIs', 'Authentication'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
    {
      id: 8,
      title: 'Data Integration APIs',
      description: 'Built and tuned data integration APIs connecting Oracle EBS with third-party tools for improved system performance',
      technologies: ['Python', 'Oracle EBS', 'APIs', 'Integration'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
    {
      id: 9,
      title: 'Time Series Forecasting',
      description: 'Developed time series forecasting models for budget allocation and media mix modeling with statistical analysis',
      technologies: ['Python', 'Time Series', 'Statistical Modeling', 'Forecasting'],
      githubUrl: 'https://github.com/k-neeraj-sai',
    },
  ];

  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="section-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center mb-10">
            <h2 className="heading-2 text-textPrimary">
              <span className="text-accent font-mono text-xl md:text-2xl mr-2">06.</span>
              Some Things I've Built
            </h2>
            <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid gap-8 md:grid-cols-12 items-center ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}>
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-lg group"
                  >
                    <div className="aspect-[16/10] bg-secondary relative">
                      <img
                        src={`https://via.placeholder.com/800x500`}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300" />
                    </div>
                  </a>
                </div>

                {/* Project Content */}
                <div className={`relative md:col-span-7 ${index % 2 === 0 ? 'md:col-start-6 md:text-right' : 'md:col-start-1 md:text-left'} row-start-1 z-10`}>
                  <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4">
                    <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-hover">
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="bg-secondary p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-textSecondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-3 font-mono text-sm text-textSecondary mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-accent transition-colors duration-300"
                      >
                        <FiGithub size={22} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-accent transition-colors duration-300"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-center text-2xl font-semibold text-textPrimary mb-10">
              Other Noteworthy Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card group hover:transform hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-4">
                    <FiFolder className="text-accent" size={40} />
                    <div className="flex items-center gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textSecondary hover:text-accent transition-colors duration-300"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textSecondary hover:text-accent transition-colors duration-300"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-textPrimary mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-textDark mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;