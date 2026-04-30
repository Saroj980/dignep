"use client";
import React, { useEffect } from 'react';

// Simplified Professional Vector Icons
const IconLocation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export default function ContactPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: '#fff', color: '#034EA2' }}>
      <div className="page active" id="page-contact">
        
        {/* ── 1. ATTRACTIVE & VIBRANT HERO ── */}
        <section className="cn-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <span className="section-tag why-tag mb-16">Get In Touch</span>
              
              <h1 className="sp-hero-title">
                We’re Here to <br />
                <span className="highlight">Support Your</span> <br />
                Digital Growth.
              </h1>
              
              <p className="sp-hero-desc">
                Have a question or a project in mind? Our team of enterprise architects and engineers is ready to provide the technical guidance you need.
              </p>
              
              <div className="hero-actions">
                <a href="mailto:dignepaltechnologies@gmail.com" className="btn-primary">Start a Conversation</a>
                <a href="tel:9828031562" className="btn-secondary">Quick Call</a>
              </div>
            </div>
            
            <div className="fade-up sp-hero-visual">
              <div className="sp-hero-img-frame">
                <img src="/web-dev-workspace.png" alt="DigNep Office" className="sp-hero-img" />
                <div className="sp-hero-img-overlay" />
              </div>
              {/* Floating Badge */}
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                background: 'var(--green)', 
                color: '#fff', 
                padding: '24px', 
                borderRadius: '24px', 
                fontWeight: '900', 
                boxShadow: '0 15px 30px rgba(16, 185, 129, 0.2)',
                zIndex: 3
              }}>
                Active Support
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. VIBRANT CONTACT CARDS ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-3-cols">
              {[
                { 
                  t: 'Location', 
                  d: 'Dhangadhi -04, Nepal', 
                  i: <IconLocation />, 
                  c: 'var(--blue)' 
                },
                { 
                  t: 'Email Us', 
                  d: 'dignepaltechnologies@gmail.com', 
                  i: <IconEmail />, 
                  c: 'var(--green)' 
                },
                { 
                  t: 'Call Us', 
                  d: '+977 9828031562', 
                  i: <IconPhone />, 
                  c: 'var(--navy)' 
                }
              ].map((card, i) => (
                <div key={i} className="fade-up" style={{ 
                  padding: '50px 40px', 
                  background: 'var(--bg-navy)', 
                  borderRadius: '32px', 
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(15,23,42,0.06)'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: '#fff', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px',
                    color: card.c,
                    boxShadow: 'var(--shadow-sm)'
                  }}>{card.i}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: 'var(--navy-dark)' }}>{card.t}</h3>
                  <p style={{ color: 'var(--text-body)', fontWeight: '500' }}>{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MAP & DETAILS SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up" style={{ 
                height: '400px', 
                background: 'var(--light-gray)', 
                borderRadius: '40px', 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)'
              }}>
                {/* Visual Map Placeholder */}
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'url("/cyber-security.png") center/cover', 
                  opacity: 0.15,
                  filter: 'grayscale(1) brightness(1.2)'
                }}></div>
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'var(--blue)', top: '50%', transform: 'translateY(-50%)' }}>
                  <IconLocation />
                  <div style={{ fontWeight: '900', marginTop: '10px', fontSize: '18px' }}>DHANGADHI, NEPAL</div>
                </div>
              </div>
              
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Working <span className="highlight">Hours</span></h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  {[
                    { d: 'Sun - Fri', h: '9:00 AM - 6:00 PM' },
                    { d: 'Saturday', h: 'Strategic Support Only' },
                    { d: 'NOC Status', h: '24/7 Monitoring' }
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(15,23,42,0.1)' }}>
                      <span style={{ fontWeight: '700', fontSize: '17px', color: 'var(--navy-dark)' }}>{row.d}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CALL TO ACTION ── */}
        <section className="cta-section" style={{ padding: '120px 0' }}>
          <div className="container">
            <div className="cta-inner" style={{ 
              background: 'var(--navy)', 
              borderRadius: '60px', 
              padding: '100px 40px', 
              color: '#fff'
            }}>
              <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '24px', color: '#fff' }}>Ready to Scale?</h2>
              <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                Join hundreds of businesses that trust DigNep for their mission-critical IT infrastructure.
              </p>
              <a href="mailto:dignepaltechnologies@gmail.com" className="btn-primary" style={{ 
                background: '#fff', 
                color: 'var(--navy)', 
                padding: '20px 60px', 
                borderRadius: '100px'
              }}>Contact Us Now →</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
