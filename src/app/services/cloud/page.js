"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.3-4.3-4.5-.3-3.1-2.9-5.5-6.2-5.5-2.7 0-5 1.6-6 4C3.2 9.2 1 11.6 1 14.5 1 17.5 3.5 20 6.5 20h11"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconActivity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function CloudServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .float-box');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-cloud">
        
        {/* ── 1. SKY HERO ── */}
        <section className="cl-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div className="section-tag why-tag mb-16">
                <IconCloud /> Multi-Cloud Architecture
              </div>
              <h1 className="sp-hero-title">
                Infinite <span className="highlight">Scale.</span> <br />Seamless Migration.
              </h1>
              <p className="sp-hero-desc">
                We help enterprises transition from legacy hardware to flexible, secure, and cost-optimized cloud environments on AWS, Azure, and Google Cloud.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <Link href="/contact" className="btn-primary">Consult Cloud Architect →</Link>
                <Link href="/services" className="btn-secondary">Migration Roadmaps</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CLOUD PILLARS ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-3-cols">
              {[
                { t: 'Multi-Cloud Strategy', d: 'Avoiding vendor lock-in with redundant multi-platform setups.', i: <IconCloud /> },
                { t: 'Cloud Security Posture', d: 'Hardware-level encryption and zero-trust cloud access.', i: <IconShield /> },
                { t: 'Serverless Compute', d: 'Scaling infrastructure automatically with actual user demand.', i: <IconZap /> }
              ].map((pillar, i) => (
                <div key={i} className="fade-up" style={{ padding: '50px 40px', background: 'var(--bg-navy)', borderRadius: '32px', border: '1px solid rgba(15,23,42,0.06)', textAlign: 'center' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>{pillar.i}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '16px' }}>{pillar.t}</h3>
                  <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '15px' }}>{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. HYBRID CLOUD VISUAL ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up">
                <img src="/ai-data-hub.png" alt="Cloud Infrastructure" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Your Data, <br /><span className="highlight">Everywhere.</span> Securely.</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0' }}>
                  Whether it's hybrid cloud or full public migration, we ensure your data is accessible, compliant, and protected by enterprise-grade SLAs.
                </p>
                <div className="grid-2-cols" style={{ gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--blue)' }}><IconActivity /></div>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy-dark)' }}>99.99% Availability</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--blue)' }}><IconShield /></div>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy-dark)' }}>GDPR/ISO Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title">The Sky is <span className="highlight">Not the Limit.</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '100px', fontSize: '18px' }}>Start Cloud Migration →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'cloud')} 
          serviceName="Cloud" 
        />

      </div>
    </main>
  );
}
