"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconServer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
);
const IconDatabase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconActivity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconThermometer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function DataCenterServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .fade-in-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-datacenter">
        
        {/* ── 1. CORE HERO (FIXED SPACING) ── */}
        <section className="dc-hero" style={{ padding: '180px 0 100px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at bottom left, #f0f9ff 0%, #ffffff 70%)', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ position: 'absolute', right: '5%', top: '10%', width: '30%', height: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
              <div className="fade-up">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--green)', marginBottom: '24px' }}>
                  <IconServer />
                  <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>Mission Critical Tier-Ready</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: '1', margin: '24px 0', color: '#034EA2' }}>
                  The Heart of <br /><span style={{ color: 'var(--green)' }}>Digital Enterprise.</span>
                </h1>
                <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '500px', lineHeight: '1.6' }}>
                  We design and manage high-density data centers that ensure 99.999% uptime. From rack cooling to N+1 power redundancy.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ background: '#034EA2', color: '#fff', borderRadius: '12px' }}>Design My Data Center →</Link>
                  <a href="#metrics" style={{ color: '#034EA2', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #cbd5e1' }}>View Uptime Metrics</a>
                </div>
              </div>
              <div className="fade-in-right dc-visual" style={{ position: 'relative' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '40px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                  <img src="/hero-data-centre.png" alt="Data Center" style={{ width: '100%', borderRadius: '16px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PERFORMANCE METRICS STRIP ── */}
        <div id="metrics" style={{ background: '#034EA2', padding: '40px 0', color: '#fff' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            {[
              { val: '99.99%', label: 'Uptime SLA' },
              { val: 'Tier III+', label: 'Design Standards' },
              { val: '1.2 PUE', label: 'Power Efficiency' },
              { val: '24/7/365', label: 'On-site Support' }
            ].map((m, i) => (
              <div key={i} className="fade-up">
                <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--blue-light)' }}>{m.val}</div>
                <div style={{ fontSize: '12px', opacity: 0.7, fontWeight: '700', textTransform: 'uppercase' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. DATA CENTER CAPABILITIES ── */}
        <section style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#034EA2' }}>Built for <span style={{ color: 'var(--green)' }}>Heavy Duty.</span></h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {[
                { t: 'High-Density Racking', d: 'Optimization for AI clusters and high-draw hardware.', i: <IconServer /> },
                { t: 'N+1 Power Systems', d: 'Uninterruptible power with dual-grid failover.', i: <IconZap /> },
                { t: 'Precision Cooling', d: 'Smart thermal management to maintain peak performance.', i: <IconThermometer /> },
                { t: 'Physical Security', d: 'Biometric access and 24/7 CCTV perimeter control.', i: <IconShield /> },
                { t: 'Disaster Recovery', d: 'Real-time data mirroring and off-site backup hubs.', i: <IconDatabase /> },
                { t: 'Network Fabric', d: 'Ultra-low latency fiber backbones within the DC.', i: <IconActivity /> }
              ].map((cap, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--green)', marginBottom: '24px' }}>{cap.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#034EA2', marginBottom: '15px' }}>{cap.t}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>{cap.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', background: '#f8fafc', padding: '80px 40px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#034EA2', marginBottom: '20px' }}>Your Data <span style={{ color: 'var(--green)' }}>Deserves</span> Better.</h2>
              <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '18px' }}>
                Don't settle for "okay" uptime. Let's build a data center that never sleeps.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--green)', color: '#034EA2', padding: '18px 50px', fontSize: '18px', borderRadius: '12px', border: 'none' }}>Consult DC Specialist →</Link>
            </div>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'data-center')} 
          serviceName="Data Center" 
        />

      </div>
    </main>
  );
}
