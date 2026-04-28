"use client";
import React, { useEffect } from 'react';

export default function CloudServicePage() {
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
      <div className="page active" id="page-service-cloud">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Scalability</span>
              <h1>Cloud <br /><span className="highlight">Computing</span></h1>
              <p>Scalable multi-cloud deployments, migration strategies, and serverless architectures for high-performance enterprise applications.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">☁️ Cloud Infrastructure</span>
                <h2>Multi-Cloud Strategy</h2>
                <p>We help businesses transition to the cloud with secure, scalable, and cost-effective strategies. Whether it's AWS, Azure, or hybrid solutions, we ensure seamless deployments.</p>
                <ul className="service-features">
                  <li>Cloud Migration & Strategy</li>
                  <li>AWS / Azure Architecture</li>
                  <li>Serverless Computing</li>
                  <li>Cloud Security Hardening</li>
                  <li>Hybrid Cloud Deployments</li>
                  <li>Cost Optimization & Monitoring</li>
                </ul>
              </div>
              <div className="service-visual mobile-visual">
                <img src="/mobile-app-studio.png" alt="Cloud Computing" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Migrate to the <span>Cloud Today?</span></h2>
              <p>Consult with our cloud architects to design a scalable and secure migration roadmap.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Cloud Consultation →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
