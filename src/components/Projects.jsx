import React from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
  const projects = [
    {
      title: "Akıllı Eczane Sitesi",
      desc: "Staj süresince geliştirdiğim , kullanıcıların ilaçlar ve hastalıklar hakkında detaylı bilgi alabildiği web tabanlı bilgilendirme platformu. Yapay zeka (AI) destekli sağlık asistanı için özel bir arayüz ve altyapı tasarlandı. Modern ve kullanıcı dostu bir arayüz geliştirildi.",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      
      github: null, 
      live: null 
    },
    {
      title: "Giyim E-Ticaret Sitesi",
      desc: "JavaScript kullanılarak geliştirilen frontend e-ticaret projesi. Dinamik ürün listeleme, sepet yönetimi (ekleme/çıkarma) ve kategori filtreleme işlemleri...",
      tags: ["JavaScript", "HTML5", "CSS3"],
      github: null, 
      live: null
    },
    {
      title: "Kişisel Portfolyo",
      desc: "Şu an incelediğiniz web sitesi. React ekosistemi (Vite, Framer Motion) kullanılarak, yüksek performans ve animasyon odaklı geliştirildi. Responsive (mobil uyumlu) yapıdadır.",
      tags: ["React", "Vite", "Framer Motion", "HTML5", "CSS3"],
      github: null, 
      live: null 
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projelerim</h2>
        
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              style={styles.card}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.desc}>{project.desc}</p>
                
                
                <div style={styles.tagContainer}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>#{tag}</span>
                  ))}
                </div>

               
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
    padding: '0 10px'
  },
  card: { 
    background: 'var(--bg-surface)', 
    borderRadius: '16px',
    border: '1px solid var(--border)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    minHeight: '280px' 
  },
  content: { padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' },
  title: { fontSize: '1.5rem', color: '#fff', marginBottom: '15px', fontWeight: '700' },
  desc: { color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px', flex: 1 },
  tagContainer: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }, 
  tag: { 
    fontSize: '0.75rem', padding: '4px 10px', borderRadius: '15px', 
    background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' 
  }
};

export default Projects;