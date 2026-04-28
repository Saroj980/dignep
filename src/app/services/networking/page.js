"use client";
import React, { useEffect } from 'react';

export default function NetworkingServicePage() {
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
      <div className="page active" id="page-service-networking">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Infrastructure</span>
              <h1>Networking & <br /><span className="highlight">IT Solutions</span></h1>
              <p>Enterprise-grade network architecture design, implementation, and management. We build the resilient backbone for your business operations.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">🔌 Connectivity</span>
                <h2>Enterprise Network Design</h2>
                <p>We provide comprehensive networking solutions scaled for global enterprise needs. From complex LAN/WAN architectures to high-performance fiber backbones.</p>
                <ul className="service-features">
                  <li>LAN/WAN Design & Optimization</li>
                  <li>Enterprise WiFi 6 Solutions</li>
                  <li>SD-WAN Implementation</li>
                  <li>Network Monitoring & NOC Services</li>
                  <li>Fiber Optic & Structured Cabling</li>
                  <li>VPN & Secure Remote Access</li>
                </ul>
              </div>
              <div className="service-visual">
                <img src="/server-rack.png" alt="Networking Infrastructure" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Ready to Optimize Your <span>Network?</span></h2>
              <p>Consult with our network engineers for a comprehensive infrastructure audit.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Request Audit →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
