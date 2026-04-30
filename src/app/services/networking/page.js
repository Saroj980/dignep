"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconCabling = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 9v12"/><path d="M6 15a3 3 0 0 0 6 0V9a3 3 0 0 1 6 0"/></svg>
);
const IconWiFi = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const IconNOC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"/><path d="M7 16h.01"/><path d="M17 16h.01"/><path d="M12 12h.01"/><path d="M7 8h.01"/><path d="M17 8h.01"/><path d="M12 4h.01"/></svg>
);
const IconTools = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
const IconSolution = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function NetworkingServicePage() {
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
      <div className="page active" id="page-service-networking">
        
        {/* ── 1. SCHEMATIC HERO ── */}
        <section className="nt-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <span className="section-tag why-tag mb-16">Backbone Infrastructure</span>
              <h1 className="sp-hero-title">
                Resilient <span className="highlight">Network</span><br />Architectures.
              </h1>
              <p className="sp-hero-desc">
                We don't just "install" networks—we engineer high-performance data backbones that ensure zero-latency connectivity for global enterprises.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Engineer My Network →</Link>
                <a href="#topology" className="btn-secondary">View Topology</a>
              </div>
            </div>
            <div className="fade-in-right sp-hero-visual">
              <div className="sp-hero-img-frame">
                <img src="/server-rack.png" alt="Networking" className="sp-hero-img" />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#fff', border: '1px solid var(--blue)', padding: '15px 25px', borderRadius: '8px', boxShadow: 'var(--shadow-md)', zIndex: 10 }}>
                <div style={{ fontSize: '10px', color: 'var(--blue)', fontWeight: '800' }}>STATUS: OPTIMAL</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--navy-dark)' }}>100 Gbps</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TECHNICAL SPECIFICATIONS ── */}
        <div style={{ background: 'var(--bg-navy)', padding: '24px 0', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', opacity: 0.6 }}>
            {['Layer 3 Switching', 'SD-WAN Integration', 'WiFi 6E Ready', 'BGP Routing', 'MPLS Support', 'Zero Trust Access'].map((spec, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>// {spec}</span>
            ))}
          </div>
        </div>

        {/* ── 3. INFRASTRUCTURE PILLARS ── */}
        <section id="topology" style={{ padding: '100px 0' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="text-left">
                <h2 className="section-title" style={{ textAlign: 'left' }}>The <span className="highlight">Blueprint</span> for Enterprise Speed.</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0' }}>
                  Our network designs are not off-the-shelf. We create custom topologies that account for every rack, floor, and remote office in your organization.
                </p>
                <div style={{ marginTop: '40px' }}>
                  {[
                    { t: 'Low Latency Backbone', d: 'Sub-millisecond switching for real-time apps.' },
                    { t: 'Multi-Path Redundancy', d: 'Failover mechanisms that keep you online 24/7.' },
                    { t: 'Secure Edge Computing', d: 'Bringing speed to the perimeter of your network.' }
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '30px', borderLeft: '2px solid var(--blue)', paddingLeft: '20px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: 'var(--navy-dark)' }}>{item.t}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-body)' }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="nt-capability-list">
                <div className="grid-2-cols">
                  {[
                    { i: <IconCabling />, t: 'Structured Cabling', d: 'High-density fiber & Cat6A deployments for data centers.' },
                    { i: <IconWiFi />, t: 'Enterprise WiFi', desc: 'Secure, seamless roaming with AI-driven radio management.' },
                    { i: <IconLock />, t: 'SD-WAN & VPN', desc: 'Connect global offices with military-grade encryption.' },
                    { i: <IconNOC />, t: 'Network NOC', desc: '24/7 monitoring and predictive bottleneck analysis.' },
                    { i: <IconTools />, t: 'Hardware Refresh', desc: 'Lifecycle management for routers, switches, and APs.' },
                    { i: <IconSolution />, t: 'IP Management', desc: 'IPv6 transition strategies and IPAM automation.' }
                  ].map((cap, i) => (
                    <div key={i} className="fade-up" style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.06)', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--blue)', marginBottom: '16px' }}>{cap.i}</div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--navy-dark)' }}>{cap.t}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>{cap.d || cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. DEPLOYMENT TIMELINE ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Deployment <span className="highlight">Lifecycle</span></h2>
            <div className="grid-4-cols">
              {[
                { s: '01', t: 'Site Audit', d: 'RF surveys & rack analysis.', i: <IconNOC /> },
                { s: '02', t: 'Topology Design', d: 'Logical & physical schematics.', i: <IconSolution /> },
                { s: '03', t: 'Execution', d: 'Precision cabling & config.', i: <IconTools /> },
                { s: '04', t: 'Validation', d: 'Stress testing & certification.', i: <IconZap /> }
              ].map((step, i) => (
                <div key={i} className="process-step fade-up" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
                  <div className="step-num">{step.s}</div>
                  <h4 className="text-center" style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: 'var(--navy-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--blue)' }}>{step.i}</span>
                    {step.t}
                  </h4>
                  <p className="text-center" style={{ fontSize: '13px', color: 'var(--text-body)' }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CLEAN CTA ── */}
        <section className="cta-section" style={{ padding: '120px 0' }}>
          <div className="container">
            <div className="cta-inner" style={{ maxWidth: '800px', background: 'var(--navy)', padding: '80px 40px', borderRadius: '40px', color: '#fff' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px', color: '#fff' }}>Eliminate <span style={{ color: 'var(--blue-light)' }}>Latency.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '18px' }}>
                Your business only moves as fast as your network. Let's build a faster one together.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--navy)', padding: '18px 40px', fontSize: '18px', borderRadius: '12px' }}>Start Infrastructure Audit →</Link>
            </div>
          </div>
        </section>

        {/* ── 6. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'networking')} 
          serviceName="Networking" 
        />

      </div>
    </main>
  );
}
