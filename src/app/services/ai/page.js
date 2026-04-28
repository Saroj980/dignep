"use client";
import React, { useEffect } from 'react';

export default function AIServicePage() {
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
      <div className="page active" id="page-service-ai">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Intelligence</span>
              <h1>AI & Machine <br /><span className="highlight">Learning</span></h1>
              <p>Harnessing artificial intelligence to drive business automation, predictive analytics, and infrastructure optimization.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="service-detail-row">
              <div className="service-detail-content">
                <span className="tag">🤖 Smart Solutions</span>
                <h2>Predictive Infrastructure AI</h2>
                <p>We build custom AI models that help businesses automate complex tasks and gain deep insights from their data. Our AI-driven infrastructure tools optimize performance and reduce costs.</p>
                <ul className="service-features">
                  <li>Predictive Maintenance Models</li>
                  <li>Automated Data Analytics</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision Systems</li>
                  <li>AI Strategy & Consulting</li>
                  <li>Generative AI Implementation</li>
                </ul>
              </div>
              <div className="service-visual ai-visual">
                <img src="/ai-data-hub.png" alt="AI Solutions" className="service-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Ready for an <span>AI Strategy?</span></h2>
              <p>Discover how machine learning can transform your business workflows and infrastructure.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Consult AI Expert →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
