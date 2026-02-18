import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{textAlign: 'center', paddingBottom: '100px'}}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{justifyContent: 'center', border: 'none', padding: 0}}
        >
          Benimle İletişime Geçin
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{color: '#94a3b8', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            Yeni projeler üretmek veya fikir alışverişinde bulunmak isterseniz, aşağıdaki buton üzerinden bana ulaşabilirsiniz.
          </p>

       
          <a href="mailto:mustafaselvitopu2652@gmail.com" className="btn-glow">
            Mail Gönder
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;