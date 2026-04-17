import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Code2,
  Rocket,
  Palette,
  CheckCircle2,
  XCircle,
  Sun,
  Moon,
  Droplet,
  Scissors,
  ShoppingBag,
  Activity
} from 'lucide-react';
import MemberDetails from './components/MemberDetails';
import Contact from './components/Contact';

const teamData = [
  { 
    id: 'barath-s', 
    name: "Barath S", 
    role: "Website Developer  – ZyvraSites", 
    description: "Passionate and dedicated web developer with a strong interest in full-stack development and cybersecurity. I build simple, secure, and user-friendly websites to help local businesses grow online.", 
    image: "/barath.png",
    resumeUrl: "/barath-resume.pdf",
    email: "skbarath424@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/barath-s",
    website: "https://barathsk-424.github.io/portfolio/",
    about: `I am currently pursuing a degree in Computer Science (Cyber Security) and continuously improving my skills through hands-on projects.

I focus on creating modern websites and helping small businesses establish their online presence through simple and effective digital solutions.`,
    groupedSkills: [
      { category: "💻 Technical Skills", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
      { category: "⚙️ Backend", items: ["Node.js", "Spring Boot"] },
      { category: "🗄️ Database", items: ["MySQL", "MongoDB"] },
      { category: "🛠️ Tools", items: ["VS Code", "Figma", "Supabase"] }
    ],
    softSkills: ["Communication", "Teamwork", "Leadership", "Time Management"],
    projects: [
      { 
        name: "🍰 Whisk Bakery Website", 
        description: "A modern and responsive website developed for a bakery business to showcase products, improve online presence, and attract more local customers.",
        link: "https://whisk-backery.vercel.app/"
      },
      { 
        name: "🔐 Password Strength Analyzer", 
        description: "A real-time web application that checks password strength, provides visual feedback, and suggests secure passwords for better security.",
        link: "https://barathsk-424.github.io/Password-Strength-Analyzer/"
      },
      { 
        name: "🌐 Portfolio Website", 
        description: "A personal portfolio website showcasing my projects, skills, and development work with a clean and responsive design.",
        link: "https://barathsk-424.github.io/portfolio/"
      }
    ],
    experience: [
      { role: "Founder & Developer", company: "ZyvraSites", description: "Currently working as a fresher and building ZyvraSites, focusing on website development and digital solutions for small businesses." }
    ],
    education: [
      { degree: "B.E Computer Science (Cyber Security)", school: "PERI Institute of Technology", period: "2024 – 2028" }
    ]
  },
  { 
    id: 'jeeva-bharathi', 
    name: "Jeeva Bharathi", 
    role: "Web Developer– ZyvraSites", 
    description: "Passionate Computer Science student with a growing foundation in web development and practical exposure to AI tools. Focused on building real-world projects and improving technical skills.", 
    image: "/jeeva-bharathi.jpeg",
    email: "jeeva.bharathi@zyvrasites.com",
    linkedinUrl: "https://www.linkedin.com/in/jeeva-bharathi-r",
    resumeUrl: "/jeeva-bharathi.pdf",
    website: "https://jeevabharathi-cmyk.github.io/ShelfSync_app/",
    about: `I am a Computer Science Engineering student with a strong interest in web development and real-world project building. I continuously work on improving my skills and aim to deliver practical and innovative solutions through teamwork and learning.`,
    groupedSkills: [
      { category: "💻 Technical Skills", items: ["HTML", "CSS", "JavaScript (Basic)", "Python (Basic)", "SQL (Basics)", "Git & GitHub", "VS Code", "Supabase"] }
    ],
    softSkills: ["Communication", "Teamwork", "Problem Solving"],
    projects: [
      { 
        name: "📚 ShelfSync App", 
        description: "A smart online bookstore platform where users can browse books, sellers can manage inventory, and admins control the system.",
        link: "https://jeevabharathi-cmyk.github.io/ShelfSync_app/"
      }
    ],
    experience: [
      { role: "Team Member", company: "ZyvraSites", description: "Currently building projects and gaining hands-on experience in web development. Actively improving technical and problem-solving skills through real-world applications and teamwork." }
    ],
    education: [
      { degree: "B.E Computer Science Engineering (Cyber Security)", school: "PERI Institute of Technology", period: "2024 – 2028" }
    ]
  },
  { 
    id: 'mokkesh-g', 
    name: "Mokkesh G", 
    role: "Web Developer– ZyvraSites", 
    description: "Computer Science Engineering student with a strong foundation in web development and hands-on experience with AI tools. Focused on building real-world projects and improving technical skills.", 
    image: "/mokkesh.jpeg",
    email: "gmokkesh@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mokkesh0422",
    resumeUrl: "/mokkesh.pdf",
    website: "https://github.com/mokkeshg-png",
    about: `I am Mokkesh G, a Computer Science Engineering student with a strong foundation in web development and hands-on experience with AI tools. I am passionate about building real-world projects and continuously improving my technical skills to create effective digital solutions.`,
    groupedSkills: [
      { category: "💻 Technical Skills", items: ["HTML", "CSS", "JavaScript (Basics)", "Python", "SQL"] },
      { category: "🛠️ Tools", items: ["Git", "GitHub", "VS Code", "Cursor", "Supabase", "Firebase"] },
      { category: "🤖 AI Tools", items: ["Hands-on experience with AI-driven tools"] }
    ],
    softSkills: ["Communication", "Teamwork", "Problem Solving"],
    projects: [
      { 
        name: "🎓 College Event Management Website", 
        description: "Built a web-based platform to list and register college events using HTML, CSS, JavaScript, and Supabase."
      },
      { 
        name: "📚 ShelfSync App", 
        description: "A smart online bookstore platform with user roles, inventory management, and secure system handling."
      }
    ],
    experience: [
      { role: "Certifications", description: "HTML & CSS Project (GUVI), Python Basics (GUVI)" },
      { role: "Activities", description: "Participated in a hackathon (2025), improving technical skills, teamwork, and real-world problem-solving abilities." }
    ]
  },
  { 
    id: 'rajabalan-p', 
    name: "Rajabalan P", 
    role: "Web Developer & Team Member – ZyvraSites", 
    description: "Passionate Computer Science student focused on learning web development and building real-world applications. Interested in creating simple and effective digital solutions for businesses.", 
    image: "/rajabalan.png",
    email: "rajabalanp56@gmail.com",
    website: "https://www.linkedin.com/in/rajabalan-p-5a27a9351",
    about: `I am a Computer Science student with an interest in web development and practical learning. Based in Pudukkottai, I focus on building simple projects and improving my skills step by step to contribute to real-world digital solutions.`,
    skills: ["HTML", "CSS", "Web Development", "Team Support"],
    projects: [
      { 
        name: "ZyvraSites Business Support", 
        description: "Worked as part of the ZyvraSites team supporting website and marketing activities for local businesses."
      }
    ],
    experience: [
      { role: "Team Member", company: "ZyvraSites", description: "Actively contributing as a team member in ZyvraSites, supporting business operations and assisting in digital service delivery." }
    ]
  },
  { 
    id: 'jagadhish-kumar-k', 
    name: "K. Jagadhish Kumar", 
    role: "Web Developer & Team Member – ZyvraSites", 
    description: "Enthusiastic developer with a strong interest in web technologies and programming. Passionate about learning, building projects, and improving practical development skills.", 
    image: "/jagadhish.png",
    email: "jagadhishsanjay74@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/jagadhish-kumar-k-17360b339",
    website: "https://github.com/jagadishsanjay/python_practice",
    about: `Jagadhish is a passionate learner in web development and programming. He focuses on building practical projects and improving his coding skills through continuous practice and real-world application.`,
    skills: ["HTML", "CSS", "JavaScript (Basic)", "Python", "Basic Web Development", "GitHub"],
    projects: [
      { 
        name: "ZyvraSites Support & Data", 
        description: "Contributing to ZyvraSites by supporting data management, documentation, and assisting in business operations and reporting tasks."
      }
    ],
    experience: [
      { role: "Team Member", company: "ZyvraSites", description: "Currently focusing on learning web development and programming. Actively building projects and improving technical skills through practice and collaboration." }
    ]
  },
  { 
    id: 'kirithiga-v', 
    name: "V. Kirithiga", 
    role: "Support & Data Assistant – ZyvraSites", 
    description: "Dedicated team member with strong interest in data handling and business support. Skilled in using digital tools to assist in smooth project execution and reporting.", 
    image: "/keerthiga.png",
    email: "kirithigasavithri@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/kirithiga-savithri-7b105831a",
    about: `Kirithiga plays a key role in supporting daily operations and data-related tasks at Velachery. She contributes to maintaining workflow, organizing information, and assisting the team in delivering better service to clients.`,
    groupedSkills: [
      { category: "💻 Technical / Tool Skills", items: ["MS Office", "Basic Python Programming", "Power BI", "Typewriting"] },
      { category: "🤝 Non-Technical Skills", items: ["Communication", "Time Management", "Team Support", "Data Handling"] }
    ],
    projects: [
      { 
        name: "ZyvraSites Operations & Data", 
        description: "Contributing to ZyvraSites by supporting data management, documentation, and assisting in business operations and reporting tasks."
      }
    ],
    experience: [
      { role: "Team Member", company: "ZyvraSites", description: "Actively working as part of the ZyvraSites team, assisting in data organization, client support, and ensuring smooth execution of internal processes." }
    ]
  },
  { 
    id: 'vanisha-sasthini-s', 
    name: "S. Vanisha Sasthini", 
    role: "Web Developer & Team Member – ZyvraSites", 
    description: "Passionate learner with strong interest in technical development. Focused on building web-based applications and improving programming skills through continuous learning.", 
    image: "/vanisha.png",
    email: "vanishasasthini@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/s-vanisha-sasthini",
    about: `Vanisha is a motivated student from Madhavaram with a strong interest in technical development. She focuses on learning programming and web technologies, and aims to build practical applications that solve real-world problems.`,
    skills: ["HTML", "CSS (Basic)", "Python", "C++"],
    projects: [
      { 
        name: "Web Development Learning", 
        description: "Currently learning and building small projects in web development and programming to strengthen technical skills."
      }
    ],
    experience: [
      { role: "Team Member", company: "ZyvraSites", description: "Actively learning and improving programming and web development skills. Focused on gaining hands-on experience through practice and team collaboration." }
    ]
  },
  { 
    id: 'hemalatha-c', 
    name: "Hemalatha C", 
    role: "Cyber Security Developer – ZyvraSites", 
    description: "Passionate cybersecurity student with strong knowledge in ethical hacking, network security, and web application security. Focused on identifying vulnerabilities and building secure digital systems.", 
    image: "/hemalatha.png",
    email: "hemalathachand2803@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/hemalatha-c-347b903b1",
    resumeUrl: "/hemalatha-resume.jpeg",
    about: `Hemalatha is a cybersecurity-focused student from Walajabath with strong interest in real-world security challenges. She works on identifying system vulnerabilities and developing secure applications using modern technologies.`,
    skills: ["Python", "Basic Java", "Full Stack Development", "Cyber Security Concepts", "Network Security", "AI + Blockchain Security"],
    projects: [
      { 
        name: "🔐 Phishing Website Detection", 
        description: "Developed an ML-based system to detect phishing URLs using Python and React with real-time URL scanning."
      },
      { 
        name: "🆔 SecureAI-ID Project", 
        description: "Built an AI + Blockchain-based identity verification system with face detection and document verification."
      },
      { 
        name: "🧠 FaceTrust Protocol", 
        description: "Developed a blockchain-based identity system with AI face recognition and Web3 authentication."
      }
    ],
    experience: [
      { role: "Cyber Security Developer", company: "ZyvraSites", description: "Actively building cybersecurity and web-based projects. Focused on solving real-world security problems and improving practical skills through continuous learning." }
    ],
    education: [
      { degree: "B.E Computer Science (Cyber Security)", school: "PERI Institute of Technology", period: "2024 – 2028" }
    ]
  },
];

const Navbar = ({ currentTheme, setTheme }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getNavLink = (id) => isHome ? `#${id}` : `/#${id}`;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{ 
      background: 'var(--glass)', 
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <a 
        href="/" 
        className="logo" 
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
          window.location.reload();
        }}
        style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)', textDecoration: 'none', letterSpacing: '-1px', zIndex: 1001 }}
      >
        ZyvraSites
      </a>

      {/* Hamburger Icon */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ zIndex: 1001 }}
      >
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {['about', 'services', 'projects', 'team'].map(item => (
          <a 
            key={item} 
            href={getNavLink(item)} 
            className="nav-link" 
            style={{ textTransform: 'capitalize' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >{item}</a>
        ))}
        <div className="theme-switcher">
          {[
            { id: 'purple', bg: '#8B5CF6', icon: Moon },
            { id: 'blue', bg: '#3B82F6', icon: Sun },
            { id: 'dark-blue', bg: '#1E293B', icon: Droplet }
          ].map(t => (
            <button 
              key={t.id}
              onClick={() => setTheme(t.id)}
              className="theme-btn" 
              style={{ background: t.bg }}
            >
              <t.icon size={14} color="white" />
            </button>
          ))}
        </div>
        <Link to="/contact" className="btn btn-primary contact-btn" style={{ borderRadius: '100px' }} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

const SectionHeader = ({ badge, title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="badge"
      style={{ background: 'var(--glass)', backdropFilter: 'blur(5px)' }}
    >
      {badge}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginTop: '1rem' }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ margin: '1.5rem auto 0', fontSize: '1.15rem', color: 'var(--text-muted)' }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const TeamMember = ({ id, name, role, description, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="team-card"
  >
    <Link to={`/member/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', marginBottom: '1.5rem' }}>
        <img src={image} alt={name} className="team-image" style={{ marginBottom: 0 }} />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1.5rem',
          opacity: 0,
          transition: 'var(--transition)'
        }} className="team-overlay">
          <p style={{ color: 'white', fontSize: '0.8rem' }}>{description}</p>
        </div>
      </div>
      <h3 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>{name}</h3>
      <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>{role}</p>
    </Link>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-card"
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
  >
    <div className="badge" style={{ width: 'fit-content', padding: '1rem' }}>
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p style={{ fontSize: '0.95rem' }}>{description}</p>
  </motion.div>
);

const HomePage = ({ team, theme, setTheme }) => (
  <div className="portfolio">
    {/* Hero Section */}
    <section className="hero">
      <div className="floating-layer">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="glow-accent" 
          style={{ top: '10%', left: '15%', background: 'var(--primary-light)', width: '300px', height: '300px' }} 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="glow-accent" 
          style={{ bottom: '20%', right: '10%', width: '400px', height: '400px' }} 
        />
        
        {/* Anti-Gravity Floating Icons */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '25%', right: '20%', color: 'var(--primary)', opacity: 0.1 }}
        >
          <Globe size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '30%', left: '15%', color: 'var(--primary-light)', opacity: 0.08 }}
        >
          <Rocket size={100} />
        </motion.div>
        <motion.div 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ position: 'absolute', top: '40%', left: '25%', color: 'var(--primary)', opacity: 0.05 }}
        >
          <Code2 size={80} />
        </motion.div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            animation: 'float-y-slow 8s ease-in-out infinite',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="badge hero-badge"
          >
            Digital Excellence
          </motion.span>
          
          <h1 className="gradient-text hero-title">
            We Build Websites for Local Businesses & Help Them Grow Online
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-description"
          >
            We create simple, professional websites for small shops and manage everything — from website updates to social media marketing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="hero-buttons"
            style={{ 
              animation: 'float-y-fast 6s ease-in-out infinite alternate'
            }}
          >
            <motion.a 
              href="#services" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '1rem 2rem' }}
            >
              Get Started <ArrowRight size={22} />
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn" 
              whileHover={{ background: 'rgba(255,255,255,0.05)', y: -5 }}
              style={{ 
                border: '1px solid var(--glass-border)', 
                color: 'var(--text-main)',
                background: 'var(--glass)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 2rem'
              }}
            >
              Our Story
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* About Us */}
    <section id="about" className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Who We Are</span>
          <h2>Helping Local Shops Go Digital & Grow Online</h2>
          <p>ZyvraSites focuses on helping small local businesses like salons, bakeries, medical shops, and local stores build a strong online presence.

We create simple and affordable websites, manage updates, and handle complete social media marketing. From website creation to weekly posts, we take care of everything so business owners can focus on their shop.</p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <motion.div whileHover={{ y: -5 }} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Rocket size={32} /></div>
            <h3>Mission</h3>
            <p style={{ fontSize: '0.9rem' }}>To help small businesses grow online by providing simple, affordable websites and consistent digital support.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Target size={32} /></div>
            <h3>Vision</h3>
            <p style={{ fontSize: '0.9rem' }}>To make every local shop visible online and help them compete in the digital world.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="container">
      <SectionHeader 
        badge="WHAT WE DO" 
        title="Simple Digital Services for Local Businesses"
        subtitle="We help small shops go online, manage their presence, and grow with simple marketing."
      />
      <div className="services-grid">
        <ServiceCard 
          icon={Globe}
          title="Website Creation"
          description="We create simple and professional websites for your shop so customers can easily find you online."
        />
        <ServiceCard 
          icon={TrendingUp}
          title="Social Media Marketing"
          description="We create and manage your business profiles on Instagram, YouTube, Facebook, and LinkedIn with regular posts every week."
        />
        <ServiceCard 
          icon={ShieldCheck}
          title="Website Maintenance"
          description="We handle all updates, changes, and support for your website so you can focus on your business."
        />
      </div>
    </section>

    {/* Problem & Solution */}
    <section className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card"
          style={{ borderTop: '4px solid #ef4444' }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444' }}>
            <XCircle size={24} /> Problems Local Shops Face
          </h3>
          <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
            <p>• No proper website for their business</p>
            <p>• Low online visibility</p>
            <p>• No time to manage social media</p>
            <p>• Losing customers to competitors</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card"
          style={{ borderTop: '4px solid var(--primary)' }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}>
            <CheckCircle2 size={24} /> Why Choose ZyvraSites
          </h3>
          <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
            <p>• Simple and affordable solutions</p>
            <p>• Website + Marketing in one service</p>
            <p>• Weekly social media support</p>
            <p>• Full maintenance handled by us</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Success Stories / Projects */}
    <section id="projects" className="container">
      <SectionHeader 
        badge="OUR WORK" 
        title="Helping Local Shops Grow Online"
        subtitle="Here are some examples of websites and marketing work we do for small businesses."
      />
      <div className="services-grid">
        {[
          { title: "Local Salon Website", description: "We created a clean website and helped the salon attract more local customers through online presence.", icon: Scissors, category: "Salon" },
          { title: "Bakery Business", description: "Designed a simple website and managed social media posts to increase daily customer visits.", icon: ShoppingBag, category: "Food" },
          { title: "Medical Shop", description: "Built an easy-to-use website and improved visibility with regular online updates.", icon: Activity, category: "Healthcare" }
        ].map((proj, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ height: '220px', background: 'var(--surface-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <proj.icon size={64} opacity={0.05} style={{ position: 'absolute' }} />
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                {proj.category}
              </div>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3>{proj.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Business Model */}
    <section className="container">
      <div className="glass-card business-model-card" style={{ background: 'var(--surface-accent)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <span className="badge">OUR PLANS</span>
            <h2 style={{ fontSize: '3rem' }}>Simple Pricing for Every Business</h2>
            <p>We offer affordable plans for small businesses with website creation, maintenance, and marketing included.</p>
          </div>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '12px' }}><Globe size={24} /></div>
              <div>
                <h3>Starter Plan</h3>
                <p style={{ fontSize: '0.95rem' }}>Website creation + basic setup for your business.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '12px' }}><TrendingUp size={24} /></div>
              <div>
                <h3>Growth Plan</h3>
                <p style={{ fontSize: '0.95rem' }}>Website + social media setup + weekly posts and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className="container">
      <SectionHeader 
        badge="Expert Team" 
        title="Meet Our Team"
      />
      <div className="team-grid">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <footer id="contact" className="container" style={{ paddingBottom: '4rem' }}>
      <div className="glass-card footer-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Let's Build Your Future.</h2>
          <p style={{ marginBottom: '2rem' }}>Join scores of businesses already scaling with ZyvraSites. Your digital transformation starts here.</p>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          <Link to="/contact" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div className="badge" style={{ padding: '0.8rem', height: 'fit-content' }}><Mail size={20} /></div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-main)' }}>Email Us</p>
              <p 
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}
              >
                skbarath424@gmail.com
              </p>
            </div>
          </Link>
          <a href="tel:+916374618833" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
            <div className="badge" style={{ padding: '0.8rem', height: 'fit-content' }}><Phone size={20} /></div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-main)' }}>Call Us</p>
              <p style={{ color: 'var(--text-muted)' }}>+91 63746 18833</p>
            </div>
          </a>
          <a href="https://maps.google.com/?q=Chennai,+India" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
            <div className="badge" style={{ padding: '0.8rem', height: 'fit-content' }}><MapPin size={20} /></div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-main)' }}>Office</p>
              <p style={{ color: 'var(--text-muted)' }}>Chennai, India</p>
            </div>
          </a>
        </div>
      </div>
      <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © 2026 ZyvraSites Digital solutions. All rights reserved.
      </div>
    </footer>
  </div>
);

const processedTeamData = teamData.map(member => ({
  ...member,
  image: member.image ? `${import.meta.env.BASE_URL}${member.image.startsWith('/') ? member.image.substring(1) : member.image}` : member.image,
  resumeUrl: member.resumeUrl ? `${import.meta.env.BASE_URL}${member.resumeUrl.startsWith('/') ? member.resumeUrl.substring(1) : member.resumeUrl}` : member.resumeUrl
}));

function App() {
  const [theme, setTheme] = useState('blue');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar currentTheme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage team={processedTeamData} theme={theme} setTheme={setTheme} />} />
        <Route path="/member/:id" element={<MemberDetails team={processedTeamData} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
