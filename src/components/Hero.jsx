import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" style={styles.heroSection}>
            <div className="container" style={styles.heroContainer}>

              
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={styles.leftContent}
                >
                    <p style={styles.greeting}>MERHABA</p>

                    <h1 style={styles.title}>
                        Ben Mustafa <br />
                        <span className="gradient-text">Selvitopu.</span>
                    </h1>

                    <h2 style={styles.subtitle}>
                        Bilgisayar Mühendisliği Öğrencisi & Web Developer
                    </h2>

                    <div style={styles.bioText}>
                        <p style={{ marginBottom: '15px' }}>
                            Bilgisayar Mühendisliği öğrencisi olarak, web teknolojilerini kullanarak gerçek ihtiyaçlara yönelik çözümler üretmeye ilgi duyuyorum. Özellikle frontend ve backend alanlarında çalışarak, hem kullanıcı arayüzü tasarımı hem de arka plan sistem geliştirme süreçlerinde kendimi aktif olarak geliştiriyorum.
                        </p>
                        <p>
                            Akademik çalışmalarım ve geliştirdiğim projelerle kullanıcı deneyimini merkeze alan arayüzler ve sürdürülebilir sistemler tasarlıyorum. Modern web teknolojilerini projelerimde aktif olarak kullanıyor ve teknik yetkinliğimi sürekli ileri taşımaya çalışıyorum.
                        </p>
                    </div>

                    <div style={styles.socialContainer}>
                        <a href="https://github.com/mustarawnn" target="_blank" rel="noreferrer" style={styles.iconLink}><FaGithub size={26} /></a>
                        <a href="https://www.linkedin.com/in/mustafaselvitopu/" target="_blank" rel="noreferrer" style={styles.iconLink}><FaLinkedin size={26} /></a>
                        <a href="https://www.instagram.com/mustafa_slvtp" target="_blank" rel="noreferrer" style={styles.iconLink}><FaInstagram size={26} /></a>
                    </div>

                 
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#projects" className="btn-primary">Projelerimi İncele</a>

                       
                    </div>

                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={styles.rightContent}
                >
                    <div style={styles.imageWrapper}>
                        <img
                            src="profil.jpg"
                            alt="Mustafa Selvitopu"
                            style={styles.profileImage}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const styles = {
    heroSection: { minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '80px' },
    heroContainer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px' },
    leftContent: { flex: '1 1 600px', maxWidth: '700px' },
    greeting: { color: '#94a3b8', fontSize: '1rem', marginBottom: '10px', letterSpacing: '2px', fontWeight: '600' },
    title: { fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '15px', color: '#fff' },
    subtitle: { fontSize: '1.4rem', color: '#cbd5e1', fontWeight: '400', marginBottom: '30px' },
    bioText: { color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px', textAlign: 'justify' },
    socialContainer: { display: 'flex', gap: '20px', marginBottom: '40px' },
    iconLink: { color: '#cbd5e1', transition: '0.3s', cursor: 'pointer' },

    
    btnOutline: {
        padding: '14px 32px',
        background: 'transparent',
        color: '#fff',
        border: '2px solid rgba(255,255,255,0.2)',
        borderRadius: '8px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: '0.3s'
    },

    rightContent: { flex: '1 1 300px', display: 'flex', justifyContent: 'center' },
    imageWrapper: {
        width: '320px', height: '320px', borderRadius: '50%',
        border: '3px solid rgba(59, 130, 246, 0.3)', overflow: 'hidden',
        boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)'
    },
    profileImage: { width: '100%', height: '100%', objectFit: 'cover' }
};

export default Hero;