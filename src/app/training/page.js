"use client";
import React, { useEffect } from 'react';

export default function TrainingPage() {
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
      <div className="page active" id="page-training">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag" style={{background: "rgba(127,180,94,0.12)", color: "var(--green)", marginBottom: "16px", display: "inline-block"}}>IT Training</span>
              <h1>Master Data Centre<br /><span className="highlight">Engineering & Ops</span></h1>
              <p>Specialized training programs in data centre systems, Tier standards, power engineering, and high-density networking — designed to build the next generation of infrastructure experts.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">Training Programs</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "600px", margin: "0 auto 12px"}}>
              Industry-Recognized <span className="accent">Certification Programs</span>
            </h2>
            <p className="section-subtitle" style={{textAlign: "center", margin: "0 auto"}}>
              Whether you're starting your IT career or upskilling for advancement, our training programs provide practical, job-ready skills aligned with global industry standards.
            </p>

            <div className="courses-grid">
              <div className="course-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="course-header">
                  <span className="course-icon">🔌</span>
                  <h3 style={{color: "var(--navy-dark)"}}>Data Centre & Network Engineering</h3>
                  <span className="level">Beginner → Advanced</span>
                </div>
                <div className="course-body">
                  <p>Master the physical and logical layers of data centres. Training in Tier standards, power distribution, cooling cycles, rack management, and enterprise Cisco networking.</p>
                  <div className="course-meta">
                    <span className="course-meta-item">📅 3 Months</span>
                    <span className="course-meta-item">🕒 120 Hours</span>
                    <span className="course-meta-item">🏆 Certificate</span>
                  </div>
                </div>
              </div>

              <div className="course-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="course-header">
                  <span className="course-icon">🔐</span>
                  <h3 style={{color: "var(--navy-dark)"}}>Cybersecurity Fundamentals</h3>
                  <span className="level">Intermediate</span>
                </div>
                <div className="course-body">
                  <p>Focus on DC security including physical access control, SOC operations, firewall hardening, and perimeter defense for mission-critical infrastructure facilities.</p>
                  <div className="course-meta">
                    <span className="course-meta-item">📅 2 Months</span>
                    <span className="course-meta-item">🕒 80 Hours</span>
                    <span className="course-meta-item">🏆 Certificate</span>
                  </div>
                </div>
              </div>

              <div className="course-card fade-up" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="course-header">
                  <span className="course-icon">☁️</span>
                  <h3 style={{color: "var(--navy-dark)"}}>Cloud Computing (AWS/Azure)</h3>
                  <span className="level">Beginner → Advanced</span>
                </div>
                <div className="course-body">
                  <p>Hands-on training in AWS and Azure cloud platforms including EC2, S3, Lambda, Azure VMs, and cloud architecture design patterns.</p>
                  <div className="course-meta">
                    <span className="course-meta-item">📅 2.5 Months</span>
                    <span className="course-meta-item">🕒 100 Hours</span>
                    <span className="course-meta-item">🏆 Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{background: "var(--bg-navy)"}}>
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">Why Train With Us</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto 12px"}}>
              Training Built for <span className="accent">Real-World</span> Success
            </h2>
            <p className="section-subtitle" style={{textAlign: "center", margin: "0 auto 56px"}}>
              Our training programs go beyond theory — you'll work with real equipment, solve real problems, and graduate with skills employers actually need.
            </p>

            <div className="services-grid">
              <div className="service-card" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="service-icon-wrap">🖥️</div>
                <h3 style={{color: "var(--navy-dark)"}}>Hands-On Lab Practice</h3>
                <p>Work with real Cisco routers, MikroTik devices, servers, and enterprise equipment — not just simulators. Real skills from real hardware.</p>
              </div>
              <div className="service-card" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="service-icon-wrap">👨‍🏫</div>
                <h3 style={{color: "var(--navy-dark)"}}>Expert Instructors</h3>
                <p>Learn from certified professionals with years of field experience. Our instructors have worked on enterprise networks internationally.</p>
              </div>
              <div className="service-card" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <div className="service-icon-wrap">📜</div>
                <h3 style={{color: "var(--navy-dark)"}}>Recognized Certification</h3>
                <p>Receive DigNep training certificates and comprehensive preparation for globally recognized certifications from Cisco, CompTIA, and Microsoft.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Launch Your <span>IT Career Today</span></h2>
              <p>New batch starting soon. Limited seats available. Register now to secure your spot in our premier IT training program.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Enroll Now →</a>
                <a href="tel:9828031562" className="btn-secondary">📞 Call for Details</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
