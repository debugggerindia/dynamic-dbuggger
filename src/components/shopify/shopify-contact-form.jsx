import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For smooth animation

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  // Styles for the section
  const styles = {
    section: {
      padding: '1rem',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      alignItems: 'center',
      marginTop: '3rem',
    },
    leftSide: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    expertBadge: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '4px',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    },
    formCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    formTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '1rem',
      outline: 'none',
      color: '#ffffff',
      transition: 'all 0.3s ease',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '1rem',
      outline: 'none',
      color: '#ffffff',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginTop: '0.5rem',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
    },
    '@media (min-width: 768px)': {
      grid: {
        gridTemplateColumns: '1fr 1fr',
      },
      heading: {
        fontSize: '3rem',
      },
    },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp link
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  // Logo path fix
  const logoPath = '/src/assets/images/shopify/shopify-experts-logo.png'; // Ensure the correct path

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.grid,
            ...(window.innerWidth >= 768
              ? styles['@media (min-width: 768px)'].grid
              : {}),
          }}
        >
          {/* Left side */}
          <div style={styles.leftSide}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={styles.logoContainer}
            >
              <img
                src={logoPath}
                alt="Logo"
                style={{ height: '60px' }}
              />
            </motion.div>

            {/* Slide-in text reveal */}
            <motion.h1
              initial={{ opacity: 0, x: -200 }} // Start from left off-screen
              animate={{ opacity: 1, x: 0 }} // Slide in to original position
              transition={{ duration: 1, ease: 'easeOut' }}
              style={styles.heading}
            >
              Kickstart🚀 Your Online Journey with a Stunning Shopify Website 💻
            </motion.h1>
          </div>

          {/* Right side - Form */}
          <div style={styles.formCard}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={styles.formTitle}
            >
              Submit Details Below To Get A Call Back
            </motion.h2>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
              <textarea
                name="project"
                placeholder="Give us a small brief about your project*"
                required
                value={formData.project}
                onChange={handleChange}
                style={styles.textarea}
              />
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 },
                }}
                style={styles.submitButton}
              >
                Get A Call Back
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
