import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '2rem' }}
        >
          <Link 
            to="/" 
            className="btn" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              color: 'var(--text-main)',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              padding: '0.6rem 1.2rem',
              fontSize: '0.9rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="gradient-text"
          >
            Contact Us
          </motion.h1>
          <p style={{ margin: '0 auto', fontSize: '1.2rem', maxWidth: '600px' }}>
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
              <div style={{ display: 'grid', gap: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div className="badge" style={{ padding: '1rem', marginBottom: 0 }}><Mail size={24} /></div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Email Address</p>
                    <a href="mailto:skbarath424@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>skbarath424@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div className="badge" style={{ padding: '1rem', marginBottom: 0 }}><Phone size={24} /></div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Phone Number</p>
                    <p>+91 63746 18833</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div className="badge" style={{ padding: '1rem', marginBottom: 0 }}><MapPin size={24} /></div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Office Location</p>
                    <p>Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form 
              className="glass-card" 
              style={{ padding: '3rem' }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
              }}
            >
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: 'var(--surface-accent)', 
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: 'var(--surface-accent)', 
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>Message</label>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows="5"
                    required
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: 'var(--surface-accent)', 
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      resize: 'none'
                    }} 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
