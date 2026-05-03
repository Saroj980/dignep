"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconCompany = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);
const IconExcellence = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconInnovation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);
const IconNetwork = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="18" y1="18" x2="18" y2="18"/></svg>
);

export default function AboutCompanyPage() {
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
      <div className="page active" id="page-about-company">
        
        {/* ── 1. HERO ── */}
        <section className="about-hero sp-hero" style={{ padding: '160px 0 100px' }}>
          <div className="sp-hero-bg-grid" />
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                   <span style={{ width: '40px', height: '2px', background: 'var(--blue)' }}></span>
                   <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Enterprise Heritage</span>
                </div>
                <h1 className="sp-hero-title">
                  Leading IT <br /><span className="highlight">Solutions Provider</span> for Enterprise Success
                </h1>
                <p className="sp-hero-desc">
                  Since our establishment, DigNep has been the driving force behind Nepal's modern digital transformation. We empower forward-thinking organizations with world-class engineering, custom infrastructure, and reliable managed services.
                </p>
                <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy-dark)' }}>2016</div>
                    <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: '700', textTransform: 'uppercase' }}>Year Founded</div>
                  </div>
                  <div style={{ width: '1px', height: '40px', background: 'var(--light-gray)' }}></div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy-dark)' }}>50+</div>
                    <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: '700', textTransform: 'uppercase' }}>Expert Team</div>
                  </div>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                  <img src="/about-workspace.png" alt="DigNep Corporate Head Office" className="sp-hero-img" />
                </div>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--blue)', opacity: 0.1, borderRadius: '20px', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', border: '2px solid var(--blue)', opacity: 0.05, borderRadius: '50%', zIndex: 1 }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. OUR JOURNEY SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-2-cols" style={{ alignItems: 'center' }}>
              <div className="fade-up">
                <img src="/data-center-featured.png" alt="Engineering Team" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-md)' }} />
              </div>
              <div className="fade-up text-left" style={{ paddingLeft: '40px' }}>
                <span className="section-tag why-tag">Our History</span>
                <h2 className="section-title why-title" style={{ textAlign: 'left', margin: '20px 0' }}>The Journey To <span className="highlight">Enterprise Excellence</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '16px', marginBottom: '24px' }}>
                  DigNep started with a humble goal: to build secure, robust tech foundations. Today, we are recognized as one of the most reliable and forward-thinking system integrators and technology solution developers. 
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
                  By combining deep local domain expertise with international IT engineering practices, we consistently push the boundaries of software performance, network stability, and advanced cloud technologies.
                </p>
                <div className="grid-2-cols" style={{ gap: '20px' }}>
                  <div>
                    <h4 style={{ color: 'var(--navy-dark)', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconNetwork /></span> Seamless Support
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-body)' }}>Empowering round-the-clock enterprise systems and infrastructures.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--navy-dark)', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconExcellence /></span> Premium Quality
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-body)' }}>Stringent SLA parameters and ISO-aligned processes for reliability.</p>
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
              <h2 className="section-title">Our Strategic <span className="highlight">Capabilities</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '600px', margin: '16px auto 0' }}>How we help companies scale and secure their digital systems.</p>
            </div>
            <div className="grid-3-cols">
              {[
                { t: 'Strategic Tech Consulting', d: 'Guiding organizations on enterprise IT roadmaps, system designs, and security audits.', i: <IconInnovation /> },
                { t: 'Premium Software Dev', d: 'Crafting performant web, enterprise applications, and hybrid systems for scale.', i: <IconCompany /> },
                { t: 'Secure Operations Center', d: 'Providing the peace of mind needed with enterprise threat-hunting and 24/7 monitoring.', i: <IconExcellence /> }
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
            <h2 className="section-title">Join Forces With <span className="highlight">The Best.</span></h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '40px' }}>Let's build reliable software systems and infrastructure today.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Start a Partnership →</Link>
              <Link href="/services" className="btn-secondary">Explore Our Services</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
