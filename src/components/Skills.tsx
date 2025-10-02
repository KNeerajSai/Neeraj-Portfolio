import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Science in Information Management',
      school: 'University of Illinois at Urbana-Champaign',
      duration: '2024 - 2026',
      logo: 'logos/university_of_illinois_at_urbana_champaign_logo.jpeg',
      specialization: 'Data Science & Analytics Track'
    }
  ];

  const certifications = [
    {
      name: 'Oracle Machine Learning using Autonomous Database 2023',
      issuer: 'Oracle',
      date: 'Sep 2023',
      logo: 'logos/oracle_logo.jpeg'
    },
    {
      name: 'Oracle Cloud Data Management 2023 Certified Foundations Associate',
      issuer: 'Oracle', 
      date: 'Sep 2023',
      logo: 'logos/oracle_logo.jpeg'
    },
    {
      name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'Sep 2023', 
      logo: 'logos/oracle_logo.jpeg'
    },
    {
      name: 'Developing SQL Databases',
      issuer: 'HackerRank',
      date: 'Jun 2021',
      logo: 'logos/hackerrank_logo.jpeg'
    },
    {
      name: 'Introduction to Programming Using Python',
      issuer: 'Google',
      date: 'Feb 2020',
      logo: 'logos/google_logo.jpeg'
    },
    {
      name: 'Google IT Support',
      issuer: 'Google', 
      date: 'N/A',
      logo: 'logos/google_logo.jpeg'
    }
  ];

  const skills = [
    'Python (NumPy, Pandas)',
    'SQL (PostgreSQL, Oracle, BigQuery)',
    'Apache Spark',
    'Hadoop',
    'Kafka',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'R Programming',
    'Java & C++',
    'Scala',
    'AWS',
    'Docker',
    'Git & JIRA',
    'Tableau',
    'Power BI',
    'Matplotlib & Seaborn',
    'ETL/ELT Pipelines',
    'MATLAB',
    'Monte Carlo Simulation',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container section-padding w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto space-y-20"
        >
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-10">
              <h2 className="heading-2 text-textPrimary">
                <span className="text-accent font-mono text-xl md:text-2xl mr-2">03.</span>
                Education
              </h2>
              <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary border border-tertiary rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/${edu.logo}`}
                      alt={`${edu.school} logo`}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-1 flex-shrink-0"
                      onError={(e) => {
                        console.error('Education logo failed to load:', edu.logo);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-textPrimary mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-mono">
                        {edu.school}
                      </p>
                      <p className="text-textSecondary font-mono text-sm">
                        {edu.duration} • {edu.specialization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center mb-10">
              <h2 className="heading-2 text-textPrimary">
                <span className="text-accent font-mono text-xl md:text-2xl mr-2">04.</span>
                Skills & Technologies
              </h2>
              <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-secondary p-4 rounded-lg text-center hover:bg-tertiary transition-all duration-300 hover:transform hover:-translate-y-1 group"
                >
                  <span className="text-textSecondary group-hover:text-accent transition-colors duration-300 font-mono text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-textSecondary text-lg leading-relaxed max-w-3xl mx-auto">
                My technical expertise spans across data engineering, machine learning, and statistical analysis. 
                I specialize in building scalable data pipelines, implementing predictive models, and creating 
                data-driven solutions. My focus is on delivering high-performance systems that can handle 
                large-scale datasets and provide actionable business insights.
              </p>
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-10">
              <h2 className="heading-2 text-textPrimary">
                <span className="text-accent font-mono text-xl md:text-2xl mr-2">05.</span>
                Certifications
              </h2>
              <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-secondary border border-tertiary rounded-lg p-4 hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                      <img
                        src={`${process.env.PUBLIC_URL}/${cert.logo}`}
                        alt={`${cert.issuer} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.textContent = cert.issuer.charAt(0);
                          fallback.className = 'text-xs font-bold text-gray-800';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-textPrimary mb-1 leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-accent text-xs font-mono">
                        {cert.issuer}
                      </p>
                      <p className="text-textSecondary text-xs font-mono">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;