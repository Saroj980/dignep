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
        
        {/* ── 1. FORTRESS HERO (FIXED SPACING) ── */}
        <section className="sec-hero" style={{ padding: '180px 0 100px', background: '#034EA2', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 80%)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '100px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--blue)' }}><IconShield /></span>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Zero-Trust Architecture</span>
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '900', color: '#fff', lineHeight: '0.9', marginBottom: '30px', letterSpacing: '-3px' }}>
                Defend the <br /><span style={{ color: 'var(--blue)' }}>Digital Perimeter.</span>
              </h1>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '50px', maxWidth: '650px', margin: '0 auto 50px' }}>
                Enterprise security isn't about building higher walls—it's about deeper visibility. We provide 24/7 SOC services and hardware-level encryption.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link href="/contact" className="btn-primary" style={{ background: 'var(--blue)', color: '#fff', padding: '20px 45px', borderRadius: '12px' }}>Start Security Audit →</Link>
                <Link href="/services" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '20px 45px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', border: '1px solid rgba(255,255,255,0.1)' }}>Our Frameworks</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SECURITY PILLARS ── */}
        <section style={{ padding: '120px 0', background: '#fff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
              {[
                { t: 'SOC 24/7', d: 'Round-the-clock threat hunting and incident response.', i: <IconActivity /> },
                { t: 'Endpoint Lock', d: 'Secure every device connecting to your network.', i: <IconLock /> },
                { t: 'Identity Mgmt', d: 'Multi-factor and biometric authentication layers.', i: <IconFingerprint /> },
                { t: 'Pen-Testing', d: 'Proactive vulnerability assessments and patching.', i: <IconShield /> }
              ].map((pillar, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px 30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{pillar.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: '#034EA2' }}>{pillar.t}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. REAL-TIME MONITORING VISUAL ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up">
                <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#034EA2', marginBottom: '30px' }}>Invisible <span style={{ color: 'var(--blue)' }}>Protection.</span> <br />Visible Results.</h2>
                <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our security systems operate at the kernel level, ensuring zero-latency protection that never slows down your workforce.
                </p>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--blue)' }}><IconShield /></div>
                    <div>
                      <h4 style={{ fontWeight: '800', color: '#034EA2' }}>DDoS Mitigation</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>Absorb and filter terabits of malicious traffic instantly.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--blue)' }}><IconLock /></div>
                    <div>
                      <h4 style={{ fontWeight: '800', color: '#034EA2' }}>Data Encryption</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>AES-256 standard encryption for all data at rest and in transit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-up" style={{ position: 'relative' }}>
                <img src="/cyber-security.png" alt="Security SOC" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#f43f5e', color: '#fff', padding: '10px 20px', borderRadius: '100px', fontSize: '12px', fontWeight: '800', animation: 'pulse 2s infinite' }}>LIVE THREAT MAP</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FINAL CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '45px', fontWeight: '900', color: '#034EA2', marginBottom: '30px' }}>Secure Your <span style={{ color: 'var(--blue)' }}>Empire.</span></h2>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
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
