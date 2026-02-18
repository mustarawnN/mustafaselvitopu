import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  
  const WorkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="#3b82f6">
      <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-32-8v48h208V40c0-26.5-21.5-48-48-48H192c-26.5 0-48 21.5-48 48zM0 128h512l-24 384H24L0 128zm208 64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-96z"/>
    </svg>
  );

  const experiences = [
    {
      company: "EXEDRA HRTech Company",
      role: "Frontend Stajyer",
      period: "Haziran 2025 - Ağustos 2025",
      desc: "Modern web teknolojileri üzerine proje tabanlı geliştirmeler. Frontend ve Backend entegrasyon süreçlerinde aktif rol alma."
    }
    
  ];

  return (
    <section id="experience" className="section">
      <div className="container" style={{maxWidth: '800px'}}>
        <h2 className="section-title">Deneyimlerim</h2>
        
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              style={styles.item}
            >
              
              <div style={styles.line}></div>
              <div style={styles.dot}>
                {WorkIcon}
              </div>

             
              <div style={styles.content}>
                <span style={styles.period}>{exp.period}</span>
                <h3 style={styles.role}>{exp.role}</h3>
                <h4 style={styles.company}>{exp.company}</h4>
                <p style={styles.desc}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  timeline: {
    position: 'relative',
    paddingLeft: '30px', 
  },
  item: {
    position: 'relative',
    marginBottom: '50px',
  },
  line: {
    position: 'absolute',
    left: '-29px', 
    top: '0',
    bottom: '-50px', 
    width: '2px',
    background: 'rgba(59, 130, 246, 0.3)'
  },
  dot: {
    position: 'absolute',
    left: '-40px', 
    top: '0',
    width: '24px',
    height: '24px',
    background: '#1a1c20', 
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #3b82f6',
    padding: '10px',
    boxSizing: 'content-box'
  },
  content: {
    background: 'var(--bg-surface)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: '0.3s'
  },
  period: {
    color: '#3b82f6',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '5px',
    display: 'block'
  },
  role: { fontSize: '1.3rem', color: '#fff', marginBottom: '5px' },
  company: { fontSize: '1.1rem', color: '#94a3b8', marginBottom: '15px', fontWeight: '400' },
  desc: { color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem' }
};

export default Experience;