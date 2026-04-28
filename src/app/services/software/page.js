"use client";
import React, { useEffect } from 'react';

export default function SoftwareServicePage() {
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
      <div className="page active" id="page-service-software">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Custom Solutions</span>
              <h1>Software <br /><span className="highlight">Engineering</span></h1>
              <p>We build highly scalable, enterprise-grade software applications designed to solve complex business challenges. From custom ERP systems to high-performance web platforms.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">💻 Development</span>
                <h2>Full-Stack Enterprise Applications</h2>
                <p>Our software engineering team specializes in creating robust, scalable, and secure applications tailored to your specific business workflows. We focus on performance, maintainability, and user experience.</p>
                <ul className="service-features">
                  <li>Custom ERP & CRM Development</li>
                  <li>Enterprise Web Applications</li>
                  <li>API Design & Integration</li>
                  <li>Microservices Architecture</li>
                  <li>Cloud-Native Development</li>
                  <li>Legacy System Modernization</li>
                </ul>
              </div>
              <div className="service-visual">
                <img src="/web-dev-workspace.png" alt="Software Development" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Ready to Build Your <span>Custom Software?</span></h2>
              <p>Consult with our lead architects to discuss your project requirements and technical stack.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Start a Project →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
