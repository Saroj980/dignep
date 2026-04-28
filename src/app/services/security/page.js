"use client";
import React, { useEffect } from 'react';

export default function SecurityServicePage() {
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
      <div className="page active" id="page-service-security">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Protection</span>
              <h1>Enterprise <br /><span className="highlight">Security</span></h1>
              <p>Advanced Security Operations Center (SOC) services, threat detection, and next-gen infrastructure protection for the modern enterprise.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">🔐 Cybersecurity</span>
                <h2>Threat Protection & Defense</h2>
                <p>Our security experts provide end-to-end protection for your digital assets. We combine proactive monitoring with rapid incident response to keep your infrastructure secure.</p>
                <ul className="service-features">
                  <li>24/7 SOC Operations</li>
                  <li>Next-Gen Firewall Management</li>
                  <li>Vulnerability Assessments</li>
                  <li>Penetration Testing</li>
                  <li>Endpoint Security Solutions</li>
                  <li>DDoS Mitigation Strategies</li>
                </ul>
              </div>
              <div className="service-visual security-visual">
                <img src="/cyber-security.png" alt="Security Operations" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Secure Your <span>Enterprise Today?</span></h2>
              <p>Schedule a comprehensive security audit to identify and mitigate potential vulnerabilities.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Request Security Audit →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
