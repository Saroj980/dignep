"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconNOC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
);
const IconActivity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const IconAlert = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function SocNocServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .float-box');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: '#fff', color: '#034EA2' }}>
      <div className="page active" id="page-service-soc-noc">
        
        {/* ── 1. SOC & NOC HERO ── */}
        <section className="socnoc-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div className="section-tag why-tag mb-16" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ display: 'flex' }}><IconShield /></span> 24/7/365 Command Operations
              </div>
              <h1 className="sp-hero-title">
                Unified <span className="highlight">SOC & NOC</span> <br />Solutions.
              </h1>
              <p className="sp-hero-desc">
                Protect and optimize your critical data assets with unified Security Operations Center (SOC) and Network Operations Center (NOC) expertise. We provide real-time threat intelligence and infrastructure visibility.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Connect With Experts →</Link>
                <a href="#pillars" className="btn-secondary">Explore Capabilities</a>
              </div>
            </div>
            <div className="fade-in-right sp-hero-visual">
              <div className="sp-hero-img-frame">
                <img src="/tech-hub.png" alt="SOC & NOC Services" className="sp-hero-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CAPABILITY PILLARS ── */}
        <section id="pillars" style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-3-cols">
              {[
                { t: 'Security (SOC)', d: 'Advanced threat protection, security log analysis, and incident response.', i: <IconShield /> },
                { t: 'Network (NOC)', d: 'Real-time performance monitoring, automated alerting, and uptime assurance.', i: <IconNOC /> },
                { t: 'Optimized Visibility', d: 'Comprehensive dashboard reporting with 100% transparent telemetry.', i: <IconActivity /> }
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

        {/* ── 3. REAL TIME OVERVIEW ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero" style={{ alignItems: 'center' }}>
              <div className="fade-up">
                <img src="/data-center-featured.png" alt="SOC & NOC Control Room" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Absolute Control, <br /><span className="highlight">Complete</span> Vigilance.</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0' }}>
                  We don't wait for your network to experience issues or security breaches. Our team prevents them entirely using predictive models and automated containment.
                </p>
                <div className="grid-2-cols" style={{ gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--blue)' }}><IconZap /></div>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy-dark)' }}>Rapid Containment</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--blue)' }}><IconAlert /></div>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy-dark)' }}>SIEM Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title">Ready for <span className="highlight">Always-On</span> Monitoring?</h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '100px', fontSize: '18px' }}>Schedule Consultation →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'networking' || b.service === 'security')} 
          serviceName="SOC & NOC" 
        />

      </div>
    </main>
  );
}
