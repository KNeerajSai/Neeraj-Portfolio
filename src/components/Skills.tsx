import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="skills" className="py-20 min-h-screen flex items-center">
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
              <span className="text-accent font-mono text-xl md:text-2xl mr-2">04.</span>
              Skills & Technologies
            </h2>
            <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            className="mt-16 text-center"
          >
            <p className="text-textSecondary text-lg leading-relaxed max-w-3xl mx-auto">
              My technical expertise spans across data engineering, machine learning, and statistical analysis. 
              I specialize in building scalable data pipelines, implementing predictive models, and creating 
              data-driven solutions. My focus is on delivering high-performance systems that can handle 
              large-scale datasets and provide actionable business insights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;