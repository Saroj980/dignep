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
        
        {/* ── 1. SCHEMATIC HERO (LIGHT) ── */}
        <section className="nt-hero" style={{ padding: '180px 0 100px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at top right, #f0f9ff 0%, #ffffff 50%)', borderBottom: '1px solid #e2e8f0' }}>
          <div className="nt-grid-bg" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#0EA5E9 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
              <div className="fade-up">
                <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', border: '1px solid var(--blue)', padding: '4px 12px', borderRadius: '4px' }}>Backbone Infrastructure</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1', margin: '24px 0', color: '#034EA2' }}>
                  Resilient <span style={{ color: 'var(--blue)' }}>Network</span><br />Architectures.
                </h1>
                <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '500px', lineHeight: '1.6' }}>
                  We don't just "install" networks—we engineer high-performance data backbones that ensure zero-latency connectivity for global enterprises.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ background: '#034EA2', color: '#fff', borderRadius: '12px' }}>Engineer My Network →</Link>
                  <a href="#topology" style={{ color: '#034EA2', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #cbd5e1' }}>View Topology</a>
                </div>
              </div>
              <div className="fade-in-right nt-visual" style={{ position: 'relative' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                  <img src="/server-rack.png" alt="Networking" style={{ width: '100%', borderRadius: '12px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#fff', border: '1px solid var(--blue)', padding: '15px 25px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 10 }}>
                  <div style={{ fontSize: '10px', color: 'var(--blue)', fontWeight: '800' }}>STATUS: OPTIMAL</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#034EA2' }}>100 Gbps</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TECHNICAL SPECIFICATIONS ── */}
        <div style={{ background: '#f8fafc', padding: '30px 0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
            {['Layer 3 Switching', 'SD-WAN Integration', 'WiFi 6E Ready', 'BGP Routing', 'MPLS Support', 'Zero Trust Access'].map((spec, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b' }}>// {spec}</span>
            ))}
          </div>
        </div>

        {/* ── 3. INFRASTRUCTURE PILLARS (Blueprint Mode) ── */}
        <section id="topology" style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px', color: '#034EA2' }}>The <span style={{ color: 'var(--blue)' }}>Blueprint</span> for Enterprise Speed.</h2>
                <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                  Our network designs are not off-the-shelf. We create custom topologies that account for every rack, floor, and remote office in your organization.
                </p>
                <div style={{ marginTop: '40px' }}>
                  {[
                    { t: 'Low Latency Backbone', d: 'Sub-millisecond switching for real-time apps.' },
                    { t: 'Multi-Path Redundancy', d: 'Failover mechanisms that keep you online 24/7.' },
                    { t: 'Secure Edge Computing', d: 'Bringing speed to the perimeter of your network.' }
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '30px', borderLeft: '2px solid var(--blue)', paddingLeft: '20px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: '#034EA2' }}>{item.t}</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="nt-capability-list">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    { i: <IconCabling />, t: 'Structured Cabling', d: 'High-density fiber & Cat6A deployments for data centers.' },
                    { i: <IconWiFi />, t: 'Enterprise WiFi', desc: 'Secure, seamless roaming with AI-driven radio management.' },
                    { i: <IconLock />, t: 'SD-WAN & VPN', desc: 'Connect global offices with military-grade encryption.' },
                    { i: <IconNOC />, t: 'Network NOC', desc: '24/7 monitoring and predictive bottleneck analysis.' },
                    { i: <IconTools />, t: 'Hardware Refresh', desc: 'Lifecycle management for routers, switches, and APs.' },
                    { i: <IconSolution />, t: 'IP Management', desc: 'IPv6 transition strategies and IPAM automation.' }
                  ].map((cap, i) => (
                    <div key={i} className="fade-up" style={{ background: '#fff', border: '1px solid #f1f5f9', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--blue)', marginBottom: '16px' }}>{cap.i}</div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#034EA2' }}>{cap.t}</h3>
                      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{cap.d || cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. DEPLOYMENT TIMELINE (LIGHT) ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '60px', color: '#034EA2' }}>Deployment <span style={{ color: 'var(--blue)' }}>Lifecycle</span></h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '25px', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 1 }}></div>
              {[
                { s: '01', t: 'Site Audit', d: 'RF surveys & rack analysis.', i: <IconNOC /> },
                { s: '02', t: 'Topology Design', d: 'Logical & physical schematics.', i: <IconSolution /> },
                { s: '03', t: 'Execution', d: 'Precision cabling & config.', i: <IconTools /> },
                { s: '04', t: 'Validation', d: 'Stress testing & certification.', i: <IconZap /> }
              ].map((step, i) => (
                <div key={i} className="process-step fade-up" style={{ width: '22%', position: 'relative', zIndex: 2 }}>
                  <div className="step-num">{step.s}</div>
                  <h4 className="text-center" style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#034EA2', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--blue)' }}>{step.i}</span>
                    {step.t}
                  </h4>
                  <p className="text-center" style={{ fontSize: '13px', color: '#64748b' }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CLEAN CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#034EA2', padding: '80px 40px', borderRadius: '40px', color: '#fff' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px' }}>Eliminate <span style={{ color: 'var(--blue-light)' }}>Latency.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '18px' }}>
                Your business only moves as fast as your network. Let's build a faster one together.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: '#034EA2', padding: '18px 40px', fontSize: '18px', borderRadius: '12px' }}>Start Infrastructure Audit →</Link>
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
