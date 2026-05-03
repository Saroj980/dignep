"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconMission = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconVision = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconInnovation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);

export default function MissionVisionPage() {
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
      <div className="page active" id="page-mission-vision">
        
        {/* ── 1. HERO ── */}
        <section className="about-hero sp-hero" style={{ padding: '160px 0 100px' }}>
          <div className="sp-hero-bg-grid" />
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                   <span style={{ width: '40px', height: '2px', background: 'var(--blue)' }}></span>
                   <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Purpose & Drive</span>
                </div>
                <h1 className="sp-hero-title">
                  Our <span className="highlight">Mission & Vision</span> for Global Tech
                </h1>
                <p className="sp-hero-desc">
                  Guided by clear principles, DigNep envisions a seamless, secure, and digitally empowered landscape. We strive to advance IT infrastructure and custom software globally.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link href="#mission-details" className="btn-primary">Learn About Our Drive →</Link>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                  <img src="/ai-data-hub.png" alt="Vision and Purpose at DigNep" className="sp-hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TWO PILLARS SECTION ── */}
        <section id="mission-details" style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-2-cols" style={{ gap: '60px' }}>
              {/* Mission Card */}
              <div className="fade-up" style={{ background: 'var(--white)', padding: '50px', borderRadius: '32px', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(15,23,42,0.03)' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--bg-accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: '32px' }}>
                  <IconMission />
                </div>
                <span className="section-tag why-tag" style={{ marginBottom: '16px' }}>What drives us</span>
                <h2 style={{ color: 'var(--navy-dark)', fontWeight: '900', fontSize: '28px', marginBottom: '20px' }}>Our Mission</h2>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                  To bridge the digital divide by delivering premium, scalable, and fully optimized software applications and resilient IT infrastructures. We build to solve today's problems while preparing for tomorrow's breakthroughs.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Exceptional IT infrastructure engineering
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Premium software engineering at international scale
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Maximum uptime, transparency, and data privacy
                  </li>
                </ul>
              </div>

              {/* Vision Card */}
              <div className="fade-up" style={{ background: 'var(--white)', padding: '50px', borderRadius: '32px', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(15,23,42,0.03)' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--bg-accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: '32px' }}>
                  <IconVision />
                </div>
                <span className="section-tag why-tag" style={{ marginBottom: '16px' }}>The long game</span>
                <h2 style={{ color: 'var(--navy-dark)', fontWeight: '900', fontSize: '28px', marginBottom: '20px' }}>Our Vision</h2>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                  To become the world's most trusted partner for end-to-end technology solutions. We visualize a world where every enterprise operates with highly performant, fully compliant, and impenetrable cloud environments.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Global excellence from regional development teams
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Pioneer adoption of AI & Next-Gen cybersecurity
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>✔</span> Driving the future of digital connectivity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. VALUES SUMMARY ── */}
        <section style={{ padding: '120px 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="section-tag">Guiding Principles</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>Core Pillars of <span className="highlight">Our Purpose</span></h2>
            </div>
            <div className="grid-3-cols">
              {[
                { t: 'Strategic Innovation', d: 'Harnessing next-generation concepts to constantly refine our development stack.', i: <IconInnovation /> },
                { t: 'Client Integrity', d: 'Honest communication, measurable expectations, and premium customer service.', i: <IconVision /> },
                { t: 'Uncompromising Security', d: 'Incorporating zero-trust paradigms directly into our system logic.', i: <IconMission /> }
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
            <h2 className="section-title">Ready To Align Your <span className="highlight">Digital Future?</span></h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '40px' }}>Our mission and vision empower your ongoing success.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Connect with us →</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
