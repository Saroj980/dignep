"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Basic Intersection Observer for scroll animations
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
      <div className="page active" id="page-home">
        {/*  HERO  */}
        <section className="hero">
          <div className="hero-bg-grid"></div>
          <div className="hero-orb-1"></div>
          <div className="hero-orb-2"></div>

          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="dot"></span>
                Enterprise Critical Infrastructure Specialist
              </div>
              <h1 className="hero-title">
                Powering <span className="highlight">Enterprise Critical</span><br />
                Data Centre<br />
                <span className="highlight-blue">Infrastructure</span>
              </h1>
              <p className="hero-desc">
                DigNep delivers Tier-certified data centre design, high-density server hubs, and enterprise networking solutions. We build and maintain the high-performance backbone for global enterprise organizations.
              </p>
              <div className="hero-actions">
                <a href="/services" className="btn-primary">
                  Our Hub Solutions →
                </a>
                <a href="/contact" className="btn-secondary">
                  Get Free Consultation
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-num">10<span>+</span></div>
                  <div className="stat-label">DC Engineering</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">500<span>+</span></div>
                  <div className="stat-label">Hubs Deployed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">99<span>%</span></div>
                  <div className="stat-label">Guaranteed Uptime</div>
                </div>
              </div>
            </div>

            <div className="hero-visual fade-up">
              <div className="data-centre-frame">
                <img src="/hero-data-centre.png" alt="Enterprise Data Centre" className="hero-data-img" />
                <div className="img-overlay"></div>
                <div className="data-stats-overlay">
                  <div className="data-stat">
                    <span className="label">Uptime</span>
                    <span className="value">99.99%</span>
                  </div>
                  <div className="data-stat">
                    <span className="label">Security</span>
                    <span className="value">Tier IV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  TRUST BAR  */}
        <div className="trust-bar">
          <div className="trust-inner">
            <span className="trust-label">Strategic Technology Partners</span>
            <div className="trust-items">
              <div className="trust-slider">
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/cisco/126BC5" alt="Cisco" className="brand-icon" />
                  </div>
                  <span className="brand-name">Cisco Systems</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/microsoft/5E5E5E" alt="Microsoft" className="brand-icon" />
                  </div>
                  <span className="brand-name">Microsoft Azure</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" className="brand-icon" />
                  </div>
                  <span className="brand-name">AWS Cloud</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/fortinet/EE3124" alt="Fortinet" className="brand-icon" />
                  </div>
                  <span className="brand-name">Fortinet Security</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/mikrotik/2D3436" alt="MikroTik" className="brand-icon" />
                  </div>
                  <span className="brand-name">MikroTik Certified</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/cisco/126BC5" alt="Cisco" className="brand-icon" />
                  </div>
                  <span className="brand-name">Cisco Systems</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/microsoft/5E5E5E" alt="Microsoft" className="brand-icon" />
                  </div>
                  <span className="brand-name">Microsoft Azure</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" className="brand-icon" />
                  </div>
                  <span className="brand-name">AWS Cloud</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/fortinet/EE3124" alt="Fortinet" className="brand-icon" />
                  </div>
                  <span className="brand-name">Fortinet Security</span>
                </div>
                <div className="brand-card">
                  <div className="brand-icon-box">
                    <img src="https://cdn.simpleicons.org/mikrotik/2D3436" alt="MikroTik" className="brand-icon" />
                  </div>
                  <span className="brand-name">MikroTik Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  SERVICES PREVIEW  */}
        <section className="services-preview-section">
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">What We Do</span>
            </div>
            <h2 className="section-title text-center centered-max-width">
              Critical <span className="accent">Data Centre</span> & Hub Solutions for Enterprise
            </h2>
            <p className="section-subtitle text-center centered-margin">
              From Tier-certified data centre design to high-density server management — we are your specialized infrastructure partner for mission-critical operations.
            </p>

            <div className="services-grid">
              <div className="service-card fade-up">
                <a href="/services">
                  <div className="service-icon-wrap">🔌</div>
                  <h3>Tier-Certified Hub Engineering</h3>
                  <p>Full-lifecycle data centre design, including UPS systems, cooling architecture, and N+1 redundant server hub implementation.</p>
                  <span className="learn-more">Infrastructure Solutions →</span>
                </a>
              </div>
              <div className="service-card fade-up">
                <a href="/services">
                  <div className="service-icon-wrap">🔐</div>
                  <h3>Critical Data & Cyber Protection</h3>
                  <p>Enterprise-grade security operations, firewall deployment, and disaster recovery strategies for high-traffic data centres.</p>
                  <span className="learn-more">Security Engineering →</span>
                </a>
              </div>
              <div className="service-card fade-up">
                <a href="/services">
                  <div className="service-icon-wrap">🤖</div>
                  <h3>AI-Driven DC Automation</h3>
                  <p>Implementing smart predictive maintenance and AI-powered power optimization for modern data centre environments.</p>
                  <span className="learn-more">Smart Operations →</span>
                </a>
              </div>
              <div className="service-card fade-up">
                <a href="/services">
                  <div className="service-icon-wrap">🌐</div>
                  <h3>Infrastructure Monitoring Portals</h3>
                  <p>Custom-built command and control dashboards for real-time monitoring of server health, network traffic, and DC environmentals.</p>
                  <span className="learn-more">Monitoring Solutions →</span>
                </a>
              </div>
              <div className="service-card fade-up">
                <a href="/services">
                  <div className="service-icon-wrap">📱</div>
                  <h3>Network Ops Mobile Apps</h3>
                  <p>Enterprise mobile applications designed for on-the-go network management and remote data centre administration.</p>
                  <span className="learn-more">Mobile Ops →</span>
                </a>
              </div>
              <div className="service-card fade-up">
                <a href="/training">
                  <div className="service-icon-wrap">🎓</div>
                  <h3>Data Centre Ops Training</h3>
                  <p>Specialized practical training in data centre management, Tier standards, CCNA networking, and high-density computing ops.</p>
                  <span className="learn-more">Training Programs →</span>
                </a>
              </div>
            </div>

            <div style={{textAlign: "center", marginTop: "40px"}}>
              <a href="/services" className="btn-primary">Data Centre Specializations →</a>
            </div>
          </div>
        </section>

        {/*  WHY CHOOSE US  */}
        <section className="why-section">
          <div className="container">
            <div className="why-inner">
              <div className="why-left">
                <span className="section-tag why-tag">Why DigNep</span>
                <h2 className="section-title why-title">
                  The Industry's Most Trusted <span className="highlight">IT Partner</span>
                </h2>
                <p className="section-subtitle">
                  We combine global Tier standards with deep-sector expertise to deliver critical infrastructure that powers global enterprise organizations.
                </p>
                <div className="why-features">
                  <div className="why-feature">
                    <div className="why-feature-icon">⚡</div>
                    <div className="why-feature-text">
                      <h4>Mission-Critical 24/7 Ops Support</h4>
                      <p>NOC services and rapid-response teams ensuring your data hub stays operational with zero-downtime commitment.</p>
                    </div>
                  </div>
                  <div className="why-feature">
                    <div className="why-feature-icon">🏆</div>
                    <div className="why-feature-text">
                      <h4>Tier-Certified Infrastructure Engineers</h4>
                      <p>Specialists in UPS power engineering, precision cooling, and high-density network rack management.</p>
                    </div>
                  </div>
                  <div className="why-feature">
                    <div className="why-feature-icon">🌐</div>
                    <div className="why-feature-text">
                      <h4>Specialized for Enterprise Challenges</h4>
                      <p>Customized power and cooling solutions designed specifically to withstand complex grid fluctuations and varied climates.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="why-right">
                <div className="metric-card">
                  <div className="metric-num">10<span>+</span></div>
                  <div className="metric-label">Infrastructure Experts</div>
                </div>
                <div className="metric-card">
                  <div className="metric-num">500<span>+</span></div>
                  <div className="metric-label">Tier-Standard Hubs</div>
                </div>
                <div className="metric-card">
                  <div className="metric-num">99<span>%</span></div>
                  <div className="metric-label">N+1 Redundancy Ratio</div>
                </div>
                <div className="metric-card">
                  <div className="metric-num">10<span>+</span></div>
                  <div className="metric-label">Specialized Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  HOW WE WORK  */}
        <section className="process-section">
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">Our Process</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto 12px"}}>
              How We <span className="accent">Deliver</span> Excellence
            </h2>
            <p className="section-subtitle" style={{textAlign: "center", margin: "0 auto"}}>
              A proven 4-step methodology that ensures every project is delivered on time, within budget, and beyond expectation.
            </p>

            <div className="process-steps">
              <div className="process-step fade-up">
                <div className="step-num">1</div>
                <h3>Discovery & Assessment</h3>
                <p>We audit your current IT setup, understand your business goals, and identify gaps and opportunities for improvement.</p>
              </div>
              <div className="process-step fade-up">
                <div className="step-num">2</div>
                <h3>Solution Design</h3>
                <p>Our engineers design a tailored architecture — network topology, security layers, software stack — aligned with your budget and goals.</p>
              </div>
              <div className="process-step fade-up">
                <div className="step-num">3</div>
                <h3>Implementation</h3>
                <p>Professional deployment with zero-downtime strategies, thorough testing, and seamless migration of your existing systems.</p>
              </div>
              <div className="process-step fade-up">
                <div className="step-num">4</div>
                <h3>Monitor & Support</h3>
                <p>Continuous 24/7 monitoring, proactive maintenance, and dedicated support to keep your IT environment performing at its peak.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  TESTIMONIALS  */}
        <section className="testimonials-section">
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">Client Reviews</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto 12px"}}>
              What Our <span className="accent">Clients</span> Say
            </h2>
            <p className="section-subtitle" style={{textAlign: "center", margin: "0 auto"}}>
              Trusted by businesses, government offices, and global organizations.
            </p>

            <div className="testimonials-grid">
              <div className="testimonial-card fade-up">
                <div className="stars">
                  <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                </div>
                <p className="testimonial-text">"DigNep completely transformed our office network infrastructure. The team was professional, efficient, and the new system has dramatically improved our productivity. Their support is outstanding."</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{background: "linear-gradient(135deg, var(--navy), var(--blue))"}}>RK</div>
                  <div>
                    <div className="author-name">Robert K.</div>
                    <div className="author-role">Director, Global Logistics Corp.</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card fade-up">
                <div className="stars">
                  <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                </div>
                <p className="testimonial-text">"The cybersecurity audit and firewall implementation by DigNep gave us peace of mind. They identified vulnerabilities we never knew existed and secured our entire system within days."</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{background: "linear-gradient(135deg, var(--green-dark), var(--green))"}}>SP</div>
                  <div>
                    <div className="author-name">Sarah P.</div>
                    <div className="author-role">IT Manager, HealthCity Networks</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card fade-up">
                <div className="stars">
                  <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                </div>
                <p className="testimonial-text">"Our e-commerce website built by DigNep is beautiful and performs excellently. Sales have increased 40% since launch. Their web development team truly understands business needs."</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{background: "linear-gradient(135deg, #8b4513, #c47a3a)"}}>BT</div>
                  <div>
                    <div className="author-name">Benjamin T.</div>
                    <div className="author-role">Owner, Artisan Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  CTA  */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Ready to Transform Your <span>IT Infrastructure?</span></h2>
              <p>Get a free consultation from industry-leading networking and IT solutions experts. No obligation — just expert advice tailored to your needs.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Get Free Consultation →</a>
                <a href="tel:9828031562" className="btn-secondary">📞 Call: 9828031562</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*  SCROLL TOP  */}
      <button className="scroll-top" id="scrollTop" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
    </main>
  );
}
