"use client";
import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <main>
      <div className="page active" id="page-about">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">About DigNep</span>
              <h1>Global Infrastructure <br /><span className="highlight">Excellence</span></h1>
              <p>DigNep is a premier global networking and IT infrastructure solutions provider. We specialize in building, securing, and maintaining the mission-critical technology that powers the modern enterprise.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="about-grid">
              <div className="about-image fade-up">
                <img src="/about-workspace.png" alt="DigNep Workspace" className="about-img-main" />
                <div className="about-experience">
                  <span className="num">10+</span>
                  <span className="txt">Years of Global<br />Excellence</span>
                </div>
              </div>
              <div className="about-content">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">The Standard in <span className="accent">Enterprise IT</span></h2>
                <p>Founded with a vision to bridge the gap between global technology standards and local infrastructure needs, DigNep has evolved into a powerhouse of IT engineering. We don't just provide services; we build long-term partnerships based on reliability, security, and world-class expertise.</p>
                
                <div className="about-features">
                  <div className="about-f-item">
                    <div className="f-icon">🎯</div>
                    <div className="f-text">
                      <h4>Our Mission</h4>
                      <p>To empower businesses with resilient, scalable, and secure IT infrastructure that drives global growth.</p>
                    </div>
                  </div>
                  <div className="about-f-item">
                    <div className="f-icon">👁️</div>
                    <div className="f-text">
                      <h4>Our Vision</h4>
                      <p>To be the world's most trusted partner for mission-critical data centre and networking solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container">
            <div className="stats-grid-simple">
              <div className="stat-card">
                <div className="num">500+</div>
                <div className="label">Enterprise Hubs</div>
              </div>
              <div className="stat-card">
                <div className="num">99.9%</div>
                <div className="label">Uptime Record</div>
              </div>
              <div className="stat-card">
                <div className="num">24/7</div>
                <div className="label">NOC Monitoring</div>
              </div>
              <div className="stat-card">
                <div className="num">10+</div>
                <div className="label">Global Regions</div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section" style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">Our Team</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto 12px"}}>
              The Experts Behind <span className="accent">DigNep</span>
            </h2>
            <p className="section-subtitle" style={{textAlign: "center", margin: "0 auto"}}>
              A passionate team of certified engineers, developers, and IT consultants dedicated to global digital growth.
            </p>

            <div className="team-grid">
              <div className="team-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="team-avatar" style={{background: "linear-gradient(135deg,var(--navy),var(--blue))"}}>DN</div>
                <h3 style={{color: "var(--navy-dark)"}}>Network Engineering Team</h3>
                <div className="role">CCNA & MikroTik Certified</div>
                <p>Expert networking engineers with hands-on experience in enterprise LAN/WAN design, firewall configuration, and network optimization for global markets.</p>
              </div>
              <div className="team-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="team-avatar" style={{background: "linear-gradient(135deg,var(--green-dark),var(--green))"}}>DS</div>
                <h3 style={{color: "var(--navy-dark)"}}>Development Team</h3>
                <div className="role">Full-Stack & Mobile Developers</div>
                <p>Skilled developers proficient in React, Node.js, Python, Flutter, and more — building web and mobile applications that drive business results.</p>
              </div>
              <div className="team-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="team-avatar" style={{background: "linear-gradient(135deg,#8b1a1a,#c43a3a)"}}>CS</div>
                <h3 style={{color: "var(--navy-dark)"}}>Cybersecurity Team</h3>
                <div className="role">Security Analysts & Auditors</div>
                <p>Certified security professionals specializing in penetration testing, vulnerability assessment, and comprehensive cyber defense strategies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Join the <span>IT Revolution</span></h2>
              <p>Partner with DigNep and experience the difference that dedicated, expert IT services make for your business.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Start a Project →</a>
                <a href="/training" className="btn-secondary">🎓 IT Training Programs</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
