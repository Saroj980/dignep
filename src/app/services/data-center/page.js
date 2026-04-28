"use client";
import React, { useEffect } from 'react';

export default function DataCenterServicePage() {
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
      <div className="page active" id="page-service-datacenter">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Core Infrastructure</span>
              <h1>Data Center <br /><span className="highlight">Services</span></h1>
              <p>Tier-certified facility management, precision cooling, and high-density server hub engineering for mission-critical operations.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">🏢 Facility</span>
                <h2>Tier-Certified Engineering</h2>
                <p>We specialized in the full lifecycle of data center engineering. From initial site assessment and Tier consulting to precision cooling and power redundant systems.</p>
                <ul className="service-features">
                  <li>Tier I-IV Facility Design</li>
                  <li>UPS & N+1 Power Redundancy</li>
                  <li>Precision Cooling Systems</li>
                  <li>Colocation & Private Hubs</li>
                  <li>BC/DR Planning & Execution</li>
                  <li>Physical Security & Monitoring</li>
                </ul>
              </div>
              <div className="service-visual hub-visual">
                <img src="/hero-data-centre.png" alt="Data Center" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Building a <span>Modern Data Hub?</span></h2>
              <p>Partner with certified engineers to ensure your facility meets global uptime standards.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Consult an Engineer →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
