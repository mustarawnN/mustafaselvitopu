import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  
const menuItems = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Eğitim', href: '#education' },
  { name: 'Deneyimler', href: '#experience' }, 
  { name: 'Yetenekler', href: '#skills' },
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' }
];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={styles.nav}
    >
      <div className="nav-container" style={styles.container}>
        
        <a href="#hero" style={styles.logo}>
          MS<span style={{color: 'var(--accent)', fontSize: '2rem'}}>.</span>
        </a>
        
     
        <ul style={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '80px',
    backgroundColor: 'rgba(26, 28, 32, 0.95)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 1000,
    display: 'flex', alignItems: 'center'
  },
  container: {
    width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
  },
  logo: { 
    fontSize: '2rem', 
    fontWeight: '900', 
    color: '#fff', 
    letterSpacing: '-1px',
    textDecoration: 'none', 
    cursor: 'pointer'       
  },
  menu: { display: 'flex', listStyle: 'none', gap: '2rem' }
};

export default Navbar;