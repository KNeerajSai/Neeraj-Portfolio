import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

interface ProjectDetail {
  projectTitle: string;
  oneLine: string;
  contextProblem: string;
  whatIBuilt: string[];
  impact: string[];
  approach: string;
  tech: string[];
}

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  url?: string;
  logo?: string;
  project: ProjectDetail;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 'uiuc-vet',
      company: 'UIUC Veterinary Medicine',
      position: 'Data Engineer',
      duration: 'Aug 2025 - Present',
      logo: 'logos/uiuc-logo.svg',
      project: {
        projectTitle: 'NL2SQL Agent for Veterinary Data Analytics (LLM + BigQuery)',
        oneLine: 'Built an end-to-end NL2SQL pipeline converting natural language to optimized BigQuery queries for 10M+ veterinary records, reducing query time ~30% and enabling real-time clinical decision-making.',
        contextProblem: 'Faculty researchers struggled with complex SQL queries to extract insights from massive veterinary datasets. Manual query writing was time-consuming and required deep SQL expertise, limiting research velocity.',
        whatIBuilt: [
          'NL2SQL Engine: Python-based agent integrating LLMs with BigQuery schema understanding for query generation',
          'Multi-threaded CLI: Concurrent query processing tool with object-oriented design for reusable components',
          'Schema Validation: Automated query parsing and validation modules ensuring data integrity',
          'Performance Optimization: Indexing and caching strategies for 10M+ record datasets',
          'Visualization Platform: Real-time dashboards for veterinary clinical trial insights'
        ],
        impact: [
          '~30% reduction in query execution latency through optimized indexing',
          '~75% faster research data access for faculty via natural language interface',
          '~90% reduction in SQL expertise barrier for veterinary researchers',
          'Enabled real-time clinical decision-making for ongoing trials'
        ],
        approach: 'Natural Language Input → LLM Processing → Schema Mapping → Query Generation → BigQuery Execution → Result Visualization → Clinical Insights',
        tech: ['Python', 'Google BigQuery', 'LLMs', 'NLP', 'PL/SQL', 'Multi-threading', 'Object-Oriented Design', 'Data Visualization', 'CLI Development']
      }
    },
    {
      id: 'big-uiuc',
      company: 'Business Intelligence Group (UIUC)',
      position: 'Technical Consultant',
      duration: 'Aug 2025 - Present',
      logo: 'logos/big-logo.svg',
      project: {
        projectTitle: 'University-wide AI Strategy & Implementation Framework',
        oneLine: 'Designed and led strategic AI initiatives across UIUC departments, delivering comprehensive technical consultation and product management for AI solution deployment.',
        contextProblem: 'University departments lacked unified AI strategy and technical expertise to implement effective data-driven solutions. Fragmented approaches led to inefficient resource allocation and missed opportunities.',
        whatIBuilt: [
          'AI Strategy Framework: Comprehensive assessment and roadmap for department-specific AI implementations',
          'Technical Feasibility Studies: Cross-departmental analysis of AI solution viability and ROI',
          'Product Management Pipeline: End-to-end AI solution development lifecycle management',
          'Cross-functional Collaboration Tools: Frameworks for seamless team coordination on AI projects',
          'Emerging Technology Guidance: Strategic recommendations on cutting-edge AI technologies'
        ],
        impact: [
          'Standardized AI implementation approach across 15+ university departments',
          'Improved resource allocation efficiency for AI initiatives',
          'Accelerated AI solution deployment timelines',
          'Enhanced cross-departmental collaboration on technology projects'
        ],
        approach: 'Assessment → Strategy Development → Technical Consultation → Implementation Planning → Product Management → Solution Deployment → Performance Monitoring',
        tech: ['AI Solutions', 'Product Management', 'Technical Consultation', 'Machine Learning', 'Strategic Planning', 'Cross-functional Leadership']
      }
    },
    {
      id: 'chinchilla',
      company: 'Chinchilla AI',
      position: 'AI Software Engineer',
      duration: 'Aug 2025 - Sep 2025',
      logo: 'logos/chinchilla-logo.svg',
      project: {
        projectTitle: 'Full-Stack AI Application with Real-time LLM Inference',
        oneLine: 'Developed production-ready AI applications using Next.js and AWS, implementing real-time LLM streaming APIs with <200ms latency and integrated payment processing.',
        contextProblem: 'Need for scalable AI applications with real-time inference capabilities, secure authentication, and seamless payment integration. Existing solutions lacked the performance and integration depth required.',
        whatIBuilt: [
          'Full-Stack AI Platform: Next.js frontend with TypeScript and AWS Amplify backend infrastructure',
          'Real-time LLM APIs: Streaming inference pipelines with concurrent request handling and low-latency responses',
          'Authentication System: Secure user management using Amazon Cognito with multi-factor authentication',
          'Payment Integration: Stripe payment processing with subscription and one-time payment support',
          'GraphQL Data Layer: Efficient API design with DynamoDB for scalable data management',
          'Performance Optimization: Backend API profiling and optimization achieving 25% throughput increase'
        ],
        impact: [
          '<200ms average response latency for LLM inference requests',
          '~25% improvement in backend API throughput after optimization',
          'Scalable architecture supporting concurrent user sessions',
          'Production-ready deployment with robust authentication and payment systems'
        ],
        approach: 'Requirements → Architecture Design → Frontend Development (Next.js/TypeScript) → Backend APIs (AWS Lambda/GraphQL) → Authentication (Cognito) → Payment Integration (Stripe) → Performance Optimization → Production Deployment',
        tech: ['Next.js', 'TypeScript', 'AWS Amplify', 'AWS Lambda', 'Amazon Cognito', 'DynamoDB', 'GraphQL', 'Stripe', 'Python', 'Real-time APIs', 'Performance Optimization']
      }
    },
    {
      id: 'capgemini-senior',
      company: 'Capgemini',
      position: 'Senior Data Analyst',
      duration: 'Jun 2022 - Aug 2024',
      url: 'https://www.capgemini.com',
      logo: 'logos/capgemini-logo.svg',
      project: {
        projectTitle: 'Enterprise ETL Pipeline & Automated Reporting Platform',
        oneLine: 'Engineered scalable SQL ETL pipelines for multi-million record procurement/finance datasets, built automated reporting platform improving system performance ~40% and reducing manual processes.',
        contextProblem: 'Manual data processing and reporting workflows were bottlenecking business operations. Legacy systems struggled with large datasets and lacked integration between Oracle EBS and third-party tools.',
        whatIBuilt: [
          'ETL Pipeline Architecture: Optimized SQL pipelines supporting procurement and finance operations with multi-million record processing',
          'Automated Reporting Platform: Python + Oracle SQL solution with modular, OOP-based architecture for maintainability',
          'API Integration Layer: Data integration APIs connecting Oracle EBS with third-party business tools',
          'Statistical Analysis Framework: Root cause modeling and forecasting accuracy improvements',
          'Team Leadership: Mentored junior analysts and led cross-functional data engineering projects'
        ],
        impact: [
          '~40% improvement in system performance through optimized API integrations',
          'Automated 80%+ of manual reporting processes',
          'Improved forecasting accuracy and reduced reporting error rates',
          'Led successful delivery of 10+ major data engineering projects',
          'Mentored 5+ junior analysts in advanced data engineering practices'
        ],
        approach: 'Data Source Analysis → ETL Design → Pipeline Implementation → API Integration → Performance Optimization → Automation → Team Leadership → Continuous Improvement',
        tech: ['SQL', 'Python', 'Oracle EBS', 'ETL Pipelines', 'API Development', 'Statistical Analysis', 'Team Leadership', 'OOP Design', 'Performance Optimization']
      }
    },
    {
      id: 'capgemini-intern',
      company: 'Capgemini',
      position: 'Data Analyst Intern',
      duration: 'Jan 2022 - Jun 2022',
      url: 'https://www.capgemini.com',
      logo: 'logos/capgemini-logo.svg',
      project: {
        projectTitle: 'IoT Anomaly Detection & Portfolio Management System',
        oneLine: 'Developed Java-based anomaly detection system processing 50K+ IoT sensor logs with multi-threading, built portfolio management platform reducing project overlap ~15%.',
        contextProblem: 'IoT sensor data required real-time anomaly detection for operational efficiency. R&D portfolio management lacked centralized tracking, leading to resource conflicts and project overlaps.',
        whatIBuilt: [
          'Anomaly Detection System: Java prototype with multi-threading for concurrent IoT sensor stream processing',
          'Portfolio Management Platform: SQL + Python integration with R&D KPIs and resource allocation models',
          'Data Visualization Dashboards: End-to-end streaming pipeline integration with interactive front-end UIs',
          'Technical Documentation: Comprehensive validation frameworks for engineering system enhancements',
          'Process Optimization: Streamlined data workflows and automated reporting mechanisms'
        ],
        impact: [
          'Processed 50K+ IoT sensor logs with real-time anomaly detection',
          '~15% reduction in project overlap through improved portfolio management',
          'Automated data visualization reducing manual reporting by 60%',
          'Enhanced system reliability through comprehensive validation frameworks'
        ],
        approach: 'IoT Data Ingestion → Multi-threaded Processing → Anomaly Detection → Portfolio Analysis → Dashboard Development → Documentation → System Validation',
        tech: ['Java', 'Multi-threading', 'IoT Data Processing', 'SQL', 'Python', 'Data Visualization', 'Portfolio Management', 'Technical Documentation']
      }
    }
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="experience" className="py-20 min-h-screen">
      <div className="section-container section-padding w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <h2 className="heading-2 text-textPrimary">
              <span className="text-accent font-mono text-xl md:text-2xl mr-2">02.</span>
              Where I've Worked
            </h2>
            <div className="flex-1 h-[1px] bg-tertiary ml-6"></div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary border border-tertiary rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                {/* Preview Card */}
                <div
                  onClick={() => toggleCard(exp.id)}
                  className="p-6 cursor-pointer hover:bg-hover transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain rounded-lg bg-white p-1 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-textPrimary mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-accent">
                          <span className="font-mono">@</span>
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-hover inline-flex items-center gap-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {exp.company}
                              <FiExternalLink size={14} />
                            </a>
                          ) : (
                            <span>{exp.company}</span>
                          )}
                        </div>
                        <p className="font-mono text-sm text-textSecondary mt-1">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-accent"
                    >
                      <FiChevronDown size={24} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-tertiary">
                        <div className="pt-6 space-y-6">
                          {/* Project Title */}
                          <div>
                            <h4 className="text-lg font-semibold text-accent mb-2">
                              Project: {exp.project.projectTitle}
                            </h4>
                            <p className="text-textSecondary italic">
                              {exp.project.oneLine}
                            </p>
                          </div>

                          {/* Context & Problem */}
                          <div>
                            <h5 className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">
                              Context & Problem
                            </h5>
                            <p className="text-textSecondary leading-relaxed">
                              {exp.project.contextProblem}
                            </p>
                          </div>

                          {/* What I Built */}
                          <div>
                            <h5 className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">
                              What I Built
                            </h5>
                            <ul className="space-y-2">
                              {exp.project.whatIBuilt.map((item, idx) => (
                                <li key={idx} className="flex items-start text-textSecondary">
                                  <span className="text-accent mr-2 mt-1.5 flex-shrink-0 font-mono">▹</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div>
                            <h5 className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">
                              Impact
                            </h5>
                            <ul className="space-y-2">
                              {exp.project.impact.map((item, idx) => (
                                <li key={idx} className="flex items-start text-textSecondary">
                                  <span className="text-accent mr-2 mt-1.5 flex-shrink-0 font-mono">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Approach */}
                          <div>
                            <h5 className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">
                              Approach (Pipeline)
                            </h5>
                            <p className="text-textSecondary font-mono text-sm bg-hover p-3 rounded border">
                              {exp.project.approach}
                            </p>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h5 className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">
                              Tech Stack
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.project.tech.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-xs font-mono bg-hover text-accent rounded-full border border-accent/20 hover:bg-accent/10 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;