"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconNetwork = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>
);
const IconSecurity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.3-4.3-4.5-.3-3.1-2.9-5.5-6.2-5.5-2.7 0-5 1.6-6 4C3.2 9.2 1 11.6 1 14.5 1 17.5 3.5 20 6.5 20h11"/></svg>
);
const IconData = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const IconTraining = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);
const IconSolution = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const services = [
  { icon: <IconNetwork />, title: 'Network Infrastructure', desc: 'Designing scalable and resilient network architectures for enterprise demands.', href: '/services/networking' },
  { icon: <IconSecurity />, title: 'Cybersecurity', desc: 'Advanced protection against modern cyber threats and intrusions.', href: '/services/security' },
  { icon: <IconCloud />, title: 'Cloud Networking', desc: 'Secure and flexible cloud integration and migration solutions.', href: '/services/cloud' },
  { icon: <IconData />, title: 'Data Engineering', desc: 'Transforming raw data into actionable enterprise insights.', href: '/services/data-center' },
  { icon: <IconSettings />, title: 'IT Management', desc: 'Proactive monitoring, maintenance, and managed IT services.', href: '/services' },
  { icon: <IconZap />, title: 'Network Optimization', desc: 'Improving speed, performance, and long-term reliability.', href: '/services/networking' },
  { icon: <IconTraining />, title: 'Training Programs', desc: 'Building future-ready networking and IT expertise.', href: '/training' },
  { icon: <IconSolution />, title: 'Custom Solutions', desc: 'Tailored IT systems aligned precisely with your business goals.', href: '/contact' },
];

const detailedServices = [
  {
    tag: 'Infrastructure',
    icon: <IconNetwork />,
    title: 'Network Infrastructure & Architecture',
    desc: 'We design and deploy high-performance network infrastructures tailored to enterprise demands. Our solutions ensure seamless connectivity, built-in redundancy, and long-term scalability across all environments.',
    features: ['Enterprise network design & topology', 'Routing, switching & wireless solutions', 'Structured cabling & hybrid setups', 'High availability & N+1 redundancy'],
    img: '/server-rack.png',
    imgAlt: 'Network Infrastructure',
    imgLabel: 'Enterprise Networking',
    reverse: false,
  },
  {
    tag: 'Protection',
    icon: <IconSecurity />,
    title: 'Cybersecurity & SOC Services',
    desc: 'In high-density digital environments, security must be both physical and digital. Our SOC teams provide 24/7 monitoring and threat mitigation, ensuring your infrastructure is protected against every modern threat.',
    features: ['SOC as a Service (24/7 monitoring)', 'Next-Gen Firewall & IDS/IPS deployment', 'Vulnerability scanning & patch management', 'DDoS mitigation & data encryption'],
    img: '/cyber-security.png',
    imgAlt: 'Cybersecurity SOC',
    imgLabel: 'Security Operations',
    reverse: true,
  },
  {
    tag: 'Cloud',
    icon: <IconCloud />,
    title: 'Cloud Networking & Migration',
    desc: 'We help enterprises seamlessly migrate to and manage multi-cloud environments. Our certified architects design secure, cost-optimized cloud networks with built-in disaster recovery and compliance.',
    features: ['Multi-cloud strategy & architecture', 'Secure cloud migration & integration', 'Cloud network performance tuning', 'Disaster recovery & business continuity'],
    img: '/ai-data-hub.png',
    imgAlt: 'Cloud Networking',
    imgLabel: 'Cloud Infrastructure',
    reverse: false,
  },
  {
    tag: 'Command & Control',
    icon: <IconSettings />,
    title: 'Operations Center (OCC) Dashboards',
    desc: 'A specialized infrastructure requires a specialized view. We build mission-critical web portals that provide real-time visibility into every aspect of your network — from individual rack power draw to global latency.',
    features: ['Real-time infrastructure monitoring portals', 'Custom network management interfaces', 'Automated incident reporting systems', 'Web-based command & control software'],
    img: '/web-dev-workspace.png',
    imgAlt: 'OCC Dashboard',
    imgLabel: 'Monitoring & Control',
    reverse: true,
  },
  {
    tag: 'Remote Management',
    icon: <IconZap />,
    title: 'Mobile Network Ops (mNOC) Apps',
    desc: 'Manage your infrastructure from anywhere. Our mobile development team builds high-security, enterprise-grade applications specifically for network administrators who need real-time monitoring on the go.',
    features: ['Secure mNOC dashboard development', 'Real-time infrastructure alerting', 'Remote console & server management apps', 'Asset tracking & inventory mobile tools'],
    img: '/mobile-app-studio.png',
    imgAlt: 'Mobile NOC App',
    imgLabel: 'Mobile Operations',
    reverse: false,
  },
];

const faqs = [
  { q: 'What industries do you work with?', a: 'We serve enterprise clients across finance, healthcare, telecommunications, government, retail, and manufacturing. Our solutions are tailored to each sector\'s unique compliance and performance requirements.' },
  { q: 'Do you provide ongoing support after deployment?', a: 'Absolutely. We offer 24/7 NOC monitoring, proactive maintenance SLAs, and dedicated support tiers — from basic helpdesk to fully managed enterprise support contracts.' },
  { q: 'Can you upgrade our existing network infrastructure?', a: 'Yes. We specialize in infrastructure assessments and phased upgrade programs, ensuring zero downtime during transitions. We can work with your current vendors or recommend best-fit alternatives.' },
  { q: 'How secure are your solutions?', a: 'Security is embedded into every layer of our solutions — from network design to endpoint management. We follow zero-trust architecture principles and conduct regular security audits and penetration testing.' },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="page active" id="page-services">

        {/* ── 1. HERO ── */}
        <section className="svc-hero">
          <div className="hero-bg-grid" />
          <div className="svc-hero-orb-1" />
          <div className="svc-hero-orb-2" />
          <div className="container svc-hero-inner">
            <div className="svc-hero-text fade-up">
              <span className="section-tag why-tag mb-16">Our Services</span>
              <h1 className="svc-hero-title">
                Enterprise Networking &amp; IT<br />
                Solutions Built for <span className="highlight">Performance</span><br />
                and <span className="highlight-blue">Security</span>
              </h1>
              <p className="svc-hero-desc">
                We design, secure, and optimize mission-critical IT infrastructure for modern businesses — ensuring reliability, scalability, and long-term growth.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Get a Free Consultation →</Link>
                <a href="#services-grid" className="btn-secondary">View Our Services</a>
              </div>
            </div>

            <div className="svc-hero-visual fade-up">
              <div className="svc-hero-img-frame">
                <img src="/server-rack.png" alt="Enterprise IT Infrastructure" className="svc-hero-img" />
                <div className="svc-hero-img-overlay" />
                <div className="svc-floating-badge svc-badge-top">
                  <span className="svc-badge-icon" style={{ color: 'var(--blue)' }}><IconSecurity /></span>
                  <div>
                    <div className="svc-badge-title">Security-First</div>
                    <div className="svc-badge-sub">Zero-trust architecture</div>
                  </div>
                </div>
                <div className="svc-floating-badge svc-badge-bottom">
                  <span className="svc-badge-icon" style={{ color: 'var(--green)' }}><IconZap /></span>
                  <div>
                    <div className="svc-badge-title">99.9% Uptime SLA</div>
                    <div className="svc-badge-sub">Mission-critical grade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TRUST CREDIBILITY BAR ── */}
        <div className="svc-trust-bar">
          <div className="container svc-trust-inner">
            {[
              { icon: <IconZap />, label: 'Enterprise-Grade Solutions' },
              { icon: <IconSecurity />, label: 'Security-First Approach' },
              { icon: <IconTraining />, label: 'Certified Professionals' },
              { icon: <IconSettings />, label: '24/7 Support' },
              { icon: <IconCloud />, label: 'Global Standards' },
              { icon: <IconData />, label: 'Rapid Deployment' },
            ].map((item, i) => (
              <div key={i} className="svc-trust-item">
                <span className="svc-trust-icon" style={{ color: 'var(--blue)' }}>{item.icon}</span>
                <span className="svc-trust-label">✔ {item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. SERVICES OVERVIEW GRID ── */}
        <section id="services-grid" className="svc-grid-section">
          <div className="container">
            <div className="text-center mb-16">
              <span className="section-tag">What We Offer</span>
            </div>
            <h2 className="section-title text-center centered-max-width">
              Complete <span className="accent">IT Solutions</span> for Every Business Need
            </h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '56px' }}>
              From infrastructure design to cybersecurity, cloud, and training — DigNep delivers end-to-end enterprise IT excellence.
            </p>
            <div className="svc-overview-grid">
              {services.map((svc, i) => (
                <Link key={i} href={svc.href} className="svc-overview-card fade-up">
                  <div className="svc-card-icon-wrap" style={{ color: 'var(--blue)' }}>{svc.icon}</div>
                  <h3 className="svc-card-title">{svc.title}</h3>
                  <p className="svc-card-desc">{svc.desc}</p>
                  <span className="svc-card-link">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. DETAILED SERVICE SECTIONS ── */}
        <section className="svc-detail-section" style={{ background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="text-center mb-16">
              <span className="section-tag why-tag">Deep Dive</span>
            </div>
            <h2 className="section-title text-center centered-max-width">
              Solutions Engineered for <span className="highlight">Scale</span>
            </h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '80px' }}>
              Each service is crafted with precision, backed by certified experts and proven methodologies.
            </p>

            <div className="services-full">
              {detailedServices.map((svc, i) => (
                <div key={i} className={`service-detail-row fade-up${svc.reverse ? ' reverse' : ''}`}>
                  <div className="service-detail-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--blue)' }}>{svc.icon}</span>
                      <span className="tag" style={{ marginBottom: 0 }}>{svc.tag}</span>
                    </div>
                    <h2>{svc.title}</h2>
                    <p>{svc.desc}</p>
                    <ul className="service-features">
                      {svc.features.map((f, fi) => <li key={fi}>{f}</li>)}
                    </ul>
                    <div style={{ marginTop: '32px' }}>
                      <Link href="/contact" className="btn-primary">Talk to an Expert →</Link>
                    </div>
                  </div>
                  <div className="service-visual">
                    <img src={svc.img} alt={svc.imgAlt} className="service-img" style={{ aspectRatio: '4/3' }} />
                    <div className="service-visual-overlay">
                      <h3 style={{ color: 'white' }}>{svc.imgLabel}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. HOW WE WORK ── */}
        <section className="process-section">
          <div className="container">
            <div className="text-center mb-16">
              <span className="section-tag">Our Process</span>
            </div>
            <h2 className="section-title text-center" style={{ maxWidth: '520px', margin: '0 auto 12px' }}>
              How We <span className="accent">Deliver</span> Results
            </h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto 0' }}>
              A proven 4-step methodology ensuring every project is precise, on-time, and beyond expectation.
            </p>
            <div className="process-steps">
              {[
                { num: '1', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: 'Assess', desc: 'We deeply analyze your current infrastructure, map risks, and uncover hidden bottlenecks.' },
                { num: '2', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, title: 'Strategize', desc: 'We craft a tailored IT roadmap and architecture designed for your scale and budget.' },
                { num: '3', icon: <IconSettings />, title: 'Implement', desc: 'We deploy with zero-downtime precision, thorough testing, and seamless migration.' },
                { num: '4', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Optimize', desc: 'Continuous 24/7 monitoring and proactive tuning to keep your systems at peak performance.' },
              ].map((step, i) => (
                <div key={i} className="process-step fade-up">
                  <div className="step-num">{step.num}</div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--blue)' }}>{step.icon}</span>
                    {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. WHY CHOOSE DIGNEP ── */}
        <section className="why-section">
          <div className="container">
            <div className="why-inner">
              <div className="why-left">
                <span className="section-tag why-tag">Why DigNep</span>
                <h2 className="section-title why-title">
                  Why Businesses Choose <span className="highlight">DigNep</span>
                </h2>
                <p className="section-subtitle">
                  We combine enterprise-grade expertise with a security-first mindset to deliver IT infrastructure that's built to last and scale.
                </p>
                <div className="why-features">
                  {[
                    { icon: <IconNetwork />, title: 'Enterprise-Grade Architecture', desc: 'Tier-certified designs built to handle the most demanding enterprise workloads and traffic volumes.' },
                    { icon: <IconSecurity />, title: 'Security-First Implementation', desc: 'Zero-trust principles embedded at every layer — from physical access to application security.' },
                    { icon: <IconCloud />, title: 'Scalable & Future-Ready', desc: 'Solutions designed to grow with your business without costly overhauls or re-architectures.' },
                    { icon: <IconZap />, title: 'Dedicated Fast-Response Support', desc: 'Certified engineers available 24/7 with rapid response SLAs that minimize business disruption.' },
                  ].map((feat, i) => (
                    <div key={i} className="why-feature fade-up">
                      <div className="why-feature-icon" style={{ color: 'var(--blue)' }}>{feat.icon}</div>
                      <div className="why-feature-text">
                        <h4>✔ {feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="why-right">
                {[
                  { num: '500', suf: '+', label: 'Enterprise Projects' },
                  { num: '99', suf: '%', label: 'Uptime Guarantee' },
                  { num: '10', suf: '+', label: 'Years Experience' },
                  { num: '24', suf: '/7', label: 'Support Coverage' },
                ].map((m, i) => (
                  <div key={i} className="metric-card fade-up">
                    <div className="metric-num">{m.num}<span>{m.suf}</span></div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA CONVERSION SECTION ── */}
        <section className="svc-cta-section">
          <div className="svc-cta-bg-grid" />
          <div className="svc-cta-orb" />
          <div className="container svc-cta-inner">
            <span className="svc-cta-tag">Ready to Start?</span>
            <h2 className="svc-cta-title">
              Ready to Strengthen Your<br /><span>IT Infrastructure?</span>
            </h2>
            <p className="svc-cta-desc">
              Partner with DigNep to build a secure, scalable, and high-performance network for your business. No obligation — just expert advice tailored to your needs.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary svc-cta-btn-primary">Get Free Consultation →</Link>
              <Link href="/contact" className="svc-cta-btn-secondary">Contact Our Team</Link>
            </div>
            <div className="svc-cta-stats">
              {[
                { val: '500+', label: 'Projects Delivered' },
                { val: '99.9%', label: 'Uptime SLA' },
                { val: '24/7', label: 'Expert Support' },
              ].map((s, i) => (
                <div key={i} className="svc-cta-stat">
                  <div className="svc-cta-stat-num">{s.val}</div>
                  <div className="svc-cta-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section className="svc-faq-section">
          <div className="container">
            <div className="svc-faq-inner">
              <div className="svc-faq-left">
                <span className="section-tag why-tag mb-16">FAQs</span>
                <h2 className="section-title why-title">
                  Frequently Asked <span className="highlight">Questions</span>
                </h2>
                <p className="section-subtitle">
                  Everything you need to know about working with DigNep. Can't find an answer? Reach out to our team.
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link href="/contact" className="btn-primary">Ask Us Anything →</Link>
                </div>
              </div>
              <div className="svc-faq-right">
                {faqs.map((faq, i) => (
                  <div key={i} className={`svc-faq-item${openFaq === i ? ' open' : ''}`}>
                    <button
                      className="svc-faq-question"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{faq.q}</span>
                      <span className="svc-faq-chevron">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="svc-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FOOTER CTA STRIP ── */}
        <div className="svc-footer-strip">
          <div className="container svc-footer-strip-inner">
            <p className="svc-footer-strip-text">
              <span style={{ marginRight: '10px' }}><IconNetwork /></span> Let's build a <strong>future-ready network</strong> together.
            </p>
            <Link href="/contact" className="btn-primary">Start a Project →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
