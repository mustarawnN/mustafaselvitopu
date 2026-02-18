import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  
  const HighSchoolIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="40" fill="currentColor">
      <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-31.12V62.68c0-17.04-15.19-30.91-33.77-30.63zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.2 31.77 0 45.64 0 62.68v285.13c0 16.69 13.13 30.23 30.02 31.12 49.47 2.6 149.52 12.1 218.7 46.92 10.65 5.36 23.28-1.94 23.28-13.49V100.81c0-5.29-2.63-10.34-7.27-13.17z"/>
    </svg>
  );

  
  const UniIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="50" height="50" fill="currentColor">
      <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47l-25.54-114.88c8.18-5.79 13.86-14.87 13.86-25.65 0-11.89-6.78-21.85-16.4-27.37.71-11.13 5.37-21.18 12.44-29.41l146.77 45.08c15.2 4.67 31.6 4.67 46.79 0l278.96-85.69c23.55-7.23 23.55-38.36 0-45.59zM224 288c0 16 13.66 43.19 28.84 59.95C270.81 367.78 293.44 384 320 384c26.56 0 49.19-16.22 67.16-36.05C402.34 331.19 416 304 416 288c0-35.35-42.98-64-96-64s-96 28.65-96 64z"/>
    </svg>
  );

  const educationData = [
    {
      period: "2019 - 2023",
      school: "Okyanus Koleji",
      dept: "Lise Eğitimi (Sayısal)",
      type: "Lise",
      icon: HighSchoolIcon
    },
    {
      period: "2023 - 2027",
      school: "İstanbul Atlas Üniversitesi",
      dept: "Bilgisayar Mühendisliği",
      type: "Üniversite",
      icon: UniIcon
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Eğitim Hayatım</h2>
        
        <div style={styles.grid}>
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="card" 
              style={styles.card}
              whileHover={{ y: -5 }}
            >
              
              <div style={styles.iconWrapper}>
                {item.icon}
              </div>

             
              <div style={styles.bgText}>{item.type}</div>

              <div style={{zIndex: 2, position: 'relative'}}>
                <span style={styles.period}>{item.period}</span>
                <h3 style={styles.school}>{item.school}</h3>
                <h4 style={styles.dept}>{item.dept}</h4>
                
                
                <div style={styles.line}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '2rem',
    maxWidth: '900px', 
    margin: '0 auto' 
  },
  card: { 
    padding: '2.5rem', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    minHeight: '220px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
    background: 'linear-gradient(145deg, #25282e 0%, #1e2025 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
  },
  iconWrapper: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    color: 'rgba(59, 130, 246, 0.2)',
    zIndex: 1,
    filter: 'drop-shadow(0 0 5px rgba(59,130,246,0.3))'
  },
  bgText: {
    position: 'absolute',
    bottom: '10px',
    right: '20px',
    fontSize: '3rem',
    fontWeight: '900',
    color: 'rgba(255,255,255,0.03)', 
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: 0
  },
  period: { 
    display: 'inline-block', padding: '6px 12px', borderRadius: '20px', 
    backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', 
    fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px',
    border: '1px solid rgba(59, 130, 246, 0.2)'
  },
  school: { fontSize: '1.5rem', color: '#fff', marginBottom: '5px', fontWeight: '700', lineHeight: '1.2' },
  dept: { fontSize: '1rem', color: '#94a3b8', fontWeight: '400' },
  line: {
    width: '40px', height: '3px', background: '#3b82f6', marginTop: '20px', borderRadius: '2px'
  }
};

export default Education;