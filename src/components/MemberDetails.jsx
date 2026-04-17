import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Globe, Users, Code2, Rocket, ShieldCheck, ExternalLink } from 'lucide-react';

const MemberDetails = ({ team }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = team.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h2>Member not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="member-details-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="btn"
          style={{ 
            background: 'var(--surface-accent)', 
            color: 'var(--text-main)', 
            marginBottom: '2rem',
            padding: '0.6rem 1.25rem',
            fontSize: '0.9rem'
          }}
        >
          <ArrowLeft size={18} /> Back
        </motion.button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ 
              position: 'relative', 
              borderRadius: '32px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid var(--glass-border)'
            }}>
              <img 
                src={member.image} 
                alt={member.name} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'cover', 
                  objectPosition: 'top', 
                  display: 'block' 
                }} 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge">{member.role}</span>
            <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{member.name}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '100%' }}>
              {member.description}
            </p>

            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
              <div style={{ display: 'grid', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="badge" style={{ padding: '0.6rem', marginBottom: 0 }}><Mail size={18} /></div>
                  <Link 
                    to="/contact" 
                    style={{ color: 'var(--text-main)', textDecoration: 'none' }}
                  >
                    {member.email || `${member.name.toLowerCase().replace(' ', '.')}@zyvrasites.com`}
                  </Link>
                </div>
                {member.linkedinUrl && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="badge" style={{ padding: '0.6rem', marginBottom: 0 }}><Users size={18} /></div>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                      {member.linkedinUrl.replace('https://www.linkedin.com/in/', '').replace('https://linkedin.com/in/', '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
                {member.website && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="badge" style={{ padding: '0.6rem', marginBottom: 0 }}><Globe size={18} /></div>
                    <a href={member.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                      {member.website.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link 
                to="/contact"
                className="btn btn-primary" 
                style={{ flex: 1, textDecoration: 'none', textAlign: 'center' }}
              >
                Contact Me
              </Link>
              {member.resumeUrl ? (
                <a 
                  href={member.resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn" 
                  style={{ border: '1px solid var(--glass-border)', color: 'var(--text-main)', textDecoration: 'none', flex: 1, textAlign: 'center' }}
                >
                  View Resume
                </a>
              ) : (
                <button className="btn" style={{ border: '1px solid var(--glass-border)', color: 'var(--text-main)', flex: 1 }}>View Resume</button>
              )}
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gap: '2.5rem', paddingBottom: '3rem' }}>
          {/* 1. About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="badge" style={{ padding: '0.6rem' }}><Users size={20} /></div>
              About {member.name.split(' ')[0]}
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', whiteSpace: 'pre-wrap' }}>
              {member.about}
            </div>
          </motion.section>

          {/* 2. Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="badge" style={{ padding: '0.6rem' }}><Code2 size={20} /></div>
              Technical Expertise
            </h2>
            
            {member.groupedSkills ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {member.groupedSkills.map((group, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {group.category}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {group.items.map((item, i) => (
                        <span key={i} className="badge" style={{ fontSize: '0.85rem', background: 'var(--surface-accent)' }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {member.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="badge"
                    style={{ 
                      padding: '0.75rem 1.5rem', 
                      fontSize: '1rem', 
                      background: 'var(--surface-accent)',
                      border: '1px solid var(--glass-border)'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Soft Skills */}
          {member.softSkills && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="badge" style={{ padding: '0.6rem' }}><Users size={20} /></div>
                Soft Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {member.softSkills.map((skill, i) => (
                  <span key={i} className="badge" style={{ background: 'var(--accent-glow)', color: 'var(--primary)' }}>{skill}</span>
                ))}
              </div>
            </motion.section>
          )}

          {/* 3. Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="badge" style={{ padding: '0.6rem' }}><Rocket size={20} /></div>
              Key Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {member.projects.map((project, index) => (
                <div key={index} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{project.name}</h3>
                  <p style={{ fontSize: '1rem', flex: 1 }}>{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary" 
                      style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', width: 'fit-content', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                    >
                      View Project <ExternalLink size={14} style={{ marginLeft: '5px' }} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          {member.education && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="badge" style={{ padding: '0.6rem' }}><Globe size={20} /></div>
                Education
              </h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {member.education.map((edu, i) => (
                  <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ marginBottom: '0.5rem' }}>{edu.degree}</h3>
                      <p style={{ color: 'var(--primary)', fontWeight: 600 }}>{edu.school}</p>
                    </div>
                    <div className="badge">{edu.period}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* 4. Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="badge" style={{ padding: '0.6rem' }}><ShieldCheck size={20} /></div>
              Professional Experience
            </h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {member.experience.map((exp, index) => (
                <div key={index} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: '1', minWidth: '300px' }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>{exp.role}</h3>
                    {exp.company && <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>{exp.company}</p>}
                    <p style={{ fontSize: '0.95rem' }}>{exp.description}</p>
                  </div>
                  {exp.period && (
                    <div className="badge" style={{ background: 'var(--accent-glow)' }}>
                      {exp.period}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
