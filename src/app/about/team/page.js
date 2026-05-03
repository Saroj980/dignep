"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconExcellence = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconInnovation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);
const IconIntegrity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>
);

export default function TeamPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const teams = [
    { n: 'Software Engineers', r: 'Architecture & Full-Stack Experts', c: 'var(--blue)', desc: 'Senior developers building premium solutions with Vite, Next.js, and modern backends.' },
    { n: 'Networking Engineers', r: 'Infrastructure Specialists', c: 'var(--green)', desc: 'Specialized experts implementing secure enterprise setups, switches, and high-availability systems.' },
    { n: 'SOC & Cyber Security Analysts', r: 'Defense Analysts', c: '#f43f5e', desc: 'Keeping organizations protected against malware and malicious cyber incursions.' }
  ];

  return (
    <main>
      <div className="page active" id="page-team">
        
        {/* ── 1. HERO ── */}
        <section className="about-hero sp-hero" style={{ padding: '160px 0 100px' }}>
          <div className="sp-hero-bg-grid" />
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                   <span style={{ width: '40px', height: '2px', background: 'var(--blue)' }}></span>
                   <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Elite Talent</span>
                </div>
                <h1 className="sp-hero-title">
                  The Architects of <br /><span className="highlight">Digital Transformation</span>
                </h1>
                <p className="sp-hero-desc">
                  Our people are our power. DigNep brings together seasoned network engineers, elite developers, and visionary leaders committed to engineering scalable systems.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link href="#meet-experts" className="btn-primary">View Expert Panels →</Link>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                  <img src="/tech-hub.png" alt="Engineering Team" className="sp-hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TEAM OVERVIEW ── */}
        <section id="meet-experts" style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-tag why-tag">Experts On Demand</span>
              <h2 className="section-title why-title" style={{ marginTop: '12px' }}>Enterprise-Grade <span className="highlight">Execution Teams</span></h2>
              <p style={{ opacity: 0.8, maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)' }}>Working in synergy to deliver flawless deployments.</p>
            </div>

            <div className="grid-3-cols">
              {teams.map((member, i) => (
                <div key={i} className="fade-up" style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.05)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ width: '80px', height: '80px', background: member.c, borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '24px', color: '#fff' }}>
                    DN
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: 'var(--navy-dark)' }}>{member.n}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase' }}>{member.r}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.6' }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. VALUES SECTION ── */}
        <section style={{ padding: '120px 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="section-tag">Working Culture</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>How Our Team <span className="highlight">Functions</span></h2>
            </div>
            <div className="grid-3-cols">
              {[
                { t: 'Continuous Education', d: 'Every expert is enrolled in global training and continuous certification programs.', i: <IconInnovation /> },
                { t: 'Open Communication', d: 'Clear alignment from planning phases to client signoff.', i: <IconIntegrity /> },
                { t: 'Agile & Accountable', d: 'Meeting strict delivery parameters and providing precise, measured iterations.', i: <IconExcellence /> }
              ].map((val, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px', background: 'var(--bg-navy)', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.06)', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{val.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '15px' }}>{val.t}</h3>
                  <p style={{ color: 'var(--text-body)', lineHeight: '1.6', fontSize: '14.5px' }}>{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '100px 0', textAlign: 'center', background: 'var(--bg-navy)' }}>
          <div className="container">
            <h2 className="section-title">Bring On Elite <span className="highlight">Developers & Engineers</span></h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '40px' }}>Our technical panels are ready to boost your workflows.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Collaborate With Us →</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
