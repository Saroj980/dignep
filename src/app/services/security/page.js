"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const IconActivity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const IconFingerprint = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a10 10 0 0 1 18-6"/><path d="M5 19a10 10 0 0 1 11-15"/><path d="M8 19a10 10 0 0 1 7-12"/><path d="M12 12v.01"/><path d="M11 15c.67-.67 1.33-.67 2 0"/><path d="M10 18c1.33-1.33 2.67-1.33 4 0"/><path d="M9 21c2-2 4-2 6 0"/></svg>
);

export default function SecurityServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .scan-line');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-security">
        
        {/* ── 1. FORTRESS HERO ── */}
        <section className="sec-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div className="section-tag why-tag mb-16" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--blue)', display: 'flex' }}><IconShield /></span> Zero-Trust Architecture
              </div>
              <h1 className="sp-hero-title">
                Defend the <br /><span className="highlight">Digital Perimeter.</span>
              </h1>
              <p className="sp-hero-desc">
                Enterprise security isn't about building higher walls—it's about deeper visibility. We provide 24/7 SOC services and hardware-level encryption.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Start Security Audit →</Link>
                <Link href="/services" className="btn-secondary">Our Frameworks</Link>
              </div>
            </div>
            <div className="fade-in-right sp-hero-visual">
              <div className="sp-hero-img-frame">
                <img src="/cyber-security.png" alt="Security SOC" className="sp-hero-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SECURITY PILLARS ── */}
        <section style={{ padding: '120px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-4-cols">
              {[
                { t: 'SOC 24/7', d: 'Round-the-clock threat hunting and incident response.', i: <IconActivity /> },
                { t: 'Endpoint Lock', d: 'Secure every device connecting to your network.', i: <IconLock /> },
                { t: 'Identity Mgmt', d: 'Multi-factor and biometric authentication layers.', i: <IconFingerprint /> },
                { t: 'Pen-Testing', d: 'Proactive vulnerability assessments and patching.', i: <IconShield /> }
              ].map((pillar, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px 30px', background: 'var(--bg-navy)', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '24px', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{pillar.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: 'var(--navy-dark)' }}>{pillar.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.6' }}>{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. REAL-TIME MONITORING VISUAL ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Invisible <span className="highlight">Protection.</span> <br />Visible Results.</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our security systems operate at the kernel level, ensuring zero-latency protection that never slows down your workforce.
                </p>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--blue)' }}><IconShield /></div>
                    <div>
                      <h4 style={{ fontWeight: '800', color: 'var(--navy-dark)' }}>DDoS Mitigation</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Absorb and filter terabits of malicious traffic instantly.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--blue)' }}><IconLock /></div>
                    <div>
                      <h4 style={{ fontWeight: '800', color: 'var(--navy-dark)' }}>Data Encryption</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>AES-256 standard encryption for all data at rest and in transit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                   <img src="/cyber-security.png" alt="Security SOC" className="sp-hero-img" />
                </div>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#f43f5e', color: '#fff', padding: '10px 20px', borderRadius: '100px', fontSize: '12px', fontWeight: '800', animation: 'pulse 2s infinite', zIndex: 3 }}>LIVE THREAT MAP</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FINAL CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title">Secure Your <span className="highlight">Empire.</span></h2>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Request Security Audit →</Link>
            </div>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'security')} 
          serviceName="Security" 
        />

      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </main>
  );
}
