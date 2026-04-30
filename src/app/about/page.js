"use client";
import React, { useEffect } from 'react';

// PROFESSIONAL VECTOR ICONS
const IconExcellence = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconMission = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconVision = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconInnovation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);
const IconIntegrity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>
);
const IconImpact = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5"/><path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5"/></svg>
);

export default function AboutPage() {
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

  return (
    <main>
      <div className="page active" id="page-about">
        
        {/* ── 1. UNIQUE ABOUT HERO ── */}
        <section className="about-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                   <span style={{ width: '40px', height: '2px', background: 'var(--blue)' }}></span>
                   <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>The DigNep Legacy</span>
                </div>
                <h1 className="sp-hero-title">
                  Engineering the <br /><span className="highlight">Digital Backbone</span> of Nepal & Beyond.
                </h1>
                <p className="sp-hero-desc">
                  Dignep is a networking and IT solutions company dedicated to building secure, scalable, and high-performance digital infrastructures. We partner with businesses to design, optimize, and manage technology environments that drive growth.
                </p>
                <div style={{ display: 'flex', gap: '30px' }}>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy-dark)' }}>10+</div>
                    <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: '700', textTransform: 'uppercase' }}>Years Experience</div>
                  </div>
                  <div style={{ width: '1px', height: '40px', background: 'var(--light-gray)' }}></div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy-dark)' }}>500+</div>
                    <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: '700', textTransform: 'uppercase' }}>Projects Done</div>
                  </div>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                  <img src="/about-workspace.png" alt="DigNep Engineering" className="sp-hero-img" />
                </div>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--blue)', opacity: 0.1, borderRadius: '20px', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', border: '2px solid var(--blue)', opacity: 0.05, borderRadius: '50%', zIndex: 1 }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. OUR STORY SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-2-cols" style={{ alignItems: 'center' }}>
              <div className="fade-up">
                <img src="/server-rack.png" alt="Infrastructure" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-md)' }} />
              </div>
              <div className="fade-up text-left">
                <span className="section-tag why-tag">Our Vision</span>
                <h2 className="section-title why-title" style={{ textAlign: 'left', margin: '20px 0' }}>The Standard in <span className="highlight">Enterprise IT</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '16px', marginBottom: '30px' }}>
                  Founded with a vision to bridge the gap between global technology standards and local infrastructure needs, DigNep has evolved into a powerhouse of IT engineering. We don't just provide services; we build long-term partnerships.
                </p>
                <div className="grid-2-cols" style={{ gap: '30px' }}>
                  <div>
                    <h4 style={{ color: 'var(--navy-dark)', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconMission /></span> Mission
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)' }}>To empower businesses with resilient, scalable, and secure IT infrastructure.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--navy-dark)', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconVision /></span> Vision
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)' }}>To be the world's most trusted partner for mission-critical solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CORE VALUES ── */}
        <section style={{ padding: '120px 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 className="section-title">Our Core <span className="highlight">Principles</span></h2>
            </div>
            <div className="grid-3-cols">
              {[
                { t: 'Innovation', d: 'Constantly evolving with the latest global standards and protocols.', i: <IconInnovation /> },
                { t: 'Integrity', d: 'Honest partnerships built on transparency and technical truth.', i: <IconIntegrity /> },
                { t: 'Impact', d: 'Delivering results that measurable grow our clients business.', i: <IconImpact /> }
              ].map((val, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px', background: 'var(--bg-navy)', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.06)', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{val.i}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '15px' }}>{val.t}</h3>
                  <p style={{ color: 'var(--text-body)', lineHeight: '1.6' }}>{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. TEAM SECTION ── */}
        <section className="team-section" style={{ padding: '100px 0', background: 'var(--navy)', color: '#fff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: '#fff' }}>The Experts Behind <span style={{ color: 'var(--blue-light)' }}>DigNep</span></h2>
              <p style={{ opacity: 0.8, maxWidth: '600px', margin: '20px auto 0' }}>A passionate team of certified engineers, developers, and consultants dedicated to your success.</p>
            </div>

            <div className="grid-3-cols">
              {[
                { n: 'Network Team', r: 'CCNA & MikroTik Certified', c: 'var(--blue)' },
                { n: 'Dev Team', r: 'Full-Stack Experts', c: 'var(--green)' },
                { n: 'Security Team', r: 'Cybersecurity Analysts', c: '#f43f5e' }
              ].map((member, i) => (
                <div key={i} className="fade-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', background: member.c, borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '24px' }}>DN</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: '#fff' }}>{member.n}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--blue-light)', fontWeight: '700', marginBottom: '16px' }}>{member.r}</div>
                  <p style={{ fontSize: '14px', opacity: 0.7 }}>Dedicated specialists delivering world-class engineering solutions.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title">Join the <span className="highlight">IT Revolution.</span></h2>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href="/contact" className="btn-primary">Start a Project →</a>
              <a href="/training" className="btn-secondary">View Training</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
