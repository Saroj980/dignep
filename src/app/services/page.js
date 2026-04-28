"use client";
import React, { useEffect } from 'react';

export default function ServicesPage() {
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
      <div className="page active" id="page-services">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag why-tag mb-16">Our Services</span>
              <h1>Advanced Data Centre<br /><span className="highlight">Infrastructure Engineering</span></h1>
              <p>From Tier-certified data centre design to high-density power management — DigNep provides the critical infrastructure backbone for the most demanding enterprise environments.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-deep)"}}>
          <div className="container">
            <div className="services-full">

              <div className="service-detail-row">
                <div className="service-detail-content">
                  <span className="tag">🔌 Infrastructure</span>
                  <h2>Data Centre Engineering & Server Hubs</h2>
                  <p>We are industry-leading specialists in Tier-certified data centre design and execution. Our engineers build robust, high-availability environments that ensure your mission-critical data remains secure, accessible, and cool.</p>
                  <ul className="service-features">
                    <li>Tier I-IV Data Centre Design & Consulting</li>
                    <li>UPS & Power Redundancy Systems (N+1)</li>
                    <li>Precision Cooling & Environmental Controls</li>
                    <li>High-Density Server Rack Management</li>
                    <li>Structured Fiber & Copper Cabling</li>
                    <li>Proactive NOC Monitoring & Maintenance</li>
                  </ul>
                </div>
                <div className="service-visual hub-visual">
                  <img src="/server-rack.png" alt="Server Hub Infrastructure" className="service-img" />
                  <div className="service-visual-overlay">
                    <h3>Next-Gen Server Hubs</h3>
                  </div>
                </div>
              </div>

              <div className="service-detail-row reverse">
                <div className="service-detail-content">
                  <span className="tag">🔐 Protection</span>
                  <h2>Critical Asset & SOC Security</h2>
                  <p>In high-density data environments, security must be both physical and digital. Our SOC teams provide 24/7 monitoring and threat mitigation, ensuring your server infrastructure is protected against everything from network intrusion to physical unauthorized access.</p>
                  <ul className="service-features">
                    <li>Security Operations Center (SOC) as a Service</li>
                    <li>Next-Gen Firewall (NGFW) & IDS/IPS Deployment</li>
                    <li>Physical Access Security & Biometric Integration</li>
                    <li>Disaster Recovery (DR) Hub Implementation</li>
                    <li>Continuous Vulnerability Scanning & Patching</li>
                    <li>DDoS Mitigation & Enterprise Data Encryption</li>
                  </ul>
                </div>
                <div className="service-visual security-visual">
                  <img src="/cyber-security.png" alt="Cyber Security SOC" className="service-img" />
                  <div className="service-visual-overlay">
                    <h3 style={{color: "white"}}>Security Operations</h3>
                  </div>
                </div>
              </div>

              <div className="service-detail-row">
                <div className="service-detail-content">
                  <span className="tag">🤖 Intelligence</span>
                  <h2>AI-Powered Infrastructure Analytics</h2>
                  <p>We harness artificial intelligence to optimize data centre performance. Our AI models predict hardware failure before it happens and automatically adjust cooling and power distribution to reduce operational costs and carbon footprints.</p>
                  <ul className="service-features">
                    <li>Predictive Maintenance for Server Hardware</li>
                    <li>AI-Driven Power & Cooling Optimization</li>
                    <li>Autonomous Network Traffic Management</li>
                    <li>Infrastructure Performance Forensics</li>
                    <li>Smart Environmental Anomaly Detection</li>
                    <li>Capacity Planning & Automated Scaling</li>
                  </ul>
                </div>
                <div className="service-visual ai-visual">
                  <img src="/ai-data-hub.png" alt="AI Neural Network" className="service-img" />
                  <div className="service-visual-overlay">
                    <h3 style={{color: "white"}}>AI & Machine Learning</h3>
                  </div>
                </div>
              </div>

              <div className="service-detail-row reverse">
                <div className="service-detail-content">
                  <span className="tag">🌐 Command & Control</span>
                  <h2>Operations Center (OCC) Dashboards</h2>
                  <p>A specialized data centre requires a specialized view. We build mission-critical web portals that provide real-time visibility into every aspect of your infrastructure — from individual rack power draw to global network latency.</p>
                  <ul className="service-features">
                    <li>Real-Time Infrastructure Monitoring Portals</li>
                    <li>Custom Network Management Interfaces</li>
                    <li>Environmental Sensor Visualization</li>
                    <li>Automated Incident Reporting Systems</li>
                    <li>Client-Facing Service Desk Portals</li>
                    <li>Web-Based Command & Control Software</li>
                  </ul>
                </div>
                <div className="service-visual web-visual">
                  <img src="/web-dev-workspace.png" alt="Web Development Workspace" className="service-img" />
                  <div className="service-visual-overlay">
                    <h3 style={{color: "white"}}>UX/UI & Web Dev</h3>
                  </div>
                </div>
              </div>

              <div className="service-detail-row">
                <div className="service-detail-content">
                  <span className="tag">📱 Remote Management</span>
                  <h2>Mobile Network Ops (mNOC) Apps</h2>
                  <p>Manage your infrastructure from anywhere. Our mobile development team builds high-security, enterprise-grade applications specifically for data centre administrators who need to monitor stats and receive alerts on the go.</p>
                  <ul className="service-features">
                    <li>Secure mNOC Dashboard Development</li>
                    <li>Real-Time Infrastructure Alerting</li>
                    <li>Remote Console & Server Management Apps</li>
                    <li>Asset Tracking & Inventory Mobile Tools</li>
                    <li>Technician Dispatch & Workflow Management</li>
                    <li>Secure VPN-Integrated Access Apps</li>
                  </ul>
                </div>
                <div className="service-visual mobile-visual">
                  <img src="/mobile-app-studio.png" alt="Mobile App Studio" className="service-img" />
                  <div className="service-visual-overlay">
                    <h3 style={{color: "white"}}>Full-Stack Mobile</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Need a Custom <span>IT Solution?</span></h2>
              <p>Every business is unique. Let our experts design a solution perfectly fitted to your needs and budget.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Request Custom Quote →</a>
                <a href="mailto:dignepaltechnologies@gmail.com" className="btn-secondary">✉️ Email Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
