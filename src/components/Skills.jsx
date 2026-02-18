import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    
   
    { name: "C#", color: "#239120" }, 
    { name: "Java", color: "#007396" }, 
    { name: "SQL", color: "#4479A1" },
    
   
    { name: "Git & GitHub", color: "#F05032" },
    { name: "Node.js", color: "#339933" },
   
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Teknolojiler & Yetkinlikler</h2>
        
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              style={styles.card}
              whileHover={{ 
                y: -5, 
                borderColor: skill.color, 
                boxShadow: `0 0 15px ${skill.color}40`
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span style={styles.text}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  card: { 
    background: 'rgba(255, 255, 255, 0.03)', 
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '12px 28px',
    cursor: 'default',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '120px' 
  },
  text: {
    color: '#e2e8f0',
    fontWeight: '500',
    fontSize: '1rem',
    letterSpacing: '0.5px'
  }
};

export default Skills;