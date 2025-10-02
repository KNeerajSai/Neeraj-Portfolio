import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // For demo purposes, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="section-container section-padding w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-10">
            <h2 className="heading-2 text-textPrimary">
              <span className="text-accent font-mono text-xl md:text-2xl mr-2">07.</span>
              What's Next?
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-semibold text-textPrimary mb-6">
            Get In Touch
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-textSecondary leading-relaxed mb-12 max-w-lg mx-auto"
          >
            I'm always excited to discuss new opportunities, interesting projects, or 
            collaborate on data-driven solutions. Feel free to reach out if you'd like to 
            connect or discuss how we can work together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <a
              href="mailto:nsk9@illinois.edu"
              className="btn-secondary inline-block text-lg px-8 py-4"
            >
              Say Hello
            </a>
          </motion.div>

          {/* Alternative contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-secondary p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-textPrimary mb-6">
                Or send me a message
              </h4>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-primary text-textPrimary rounded border border-tertiary focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-primary text-textPrimary rounded border border-tertiary focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-primary text-textPrimary rounded border border-tertiary focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded font-mono text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-tertiary cursor-not-allowed text-textDark'
                      : 'bg-accent hover:bg-accent/90 text-primary'
                  }`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <FiSend />}
                </button>
                
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-900/20 text-green-400'
                        : 'bg-red-900/20 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 pt-8 border-t border-tertiary"
          >
            <p className="text-textDark text-sm font-mono">
              Designed & Built by Neeraj Sai Kondaveeti
            </p>
            <p className="text-textDark text-xs mt-2">
              Built with React & Tailwind CSS
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;