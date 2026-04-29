"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconCode = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const IconDatabase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconTerminal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
);
const IconLayout = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
);
const IconSmartphone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
);

export default function SoftwareServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .float-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-software">
        
        {/* ── 1. CLEAN DEVELOPER HERO (FIXED SPACING) ── */}
        <section className="sw-hero" style={{ padding: '180px 0 100px', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)', transform: 'rotate(-15deg)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                  <IconCode />
                  <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Full-Stack Engineering</span>
                </div>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '900', color: '#034EA2', lineHeight: '1.1', marginBottom: '30px', letterSpacing: '-2px' }}>
                  Software that <br /><span style={{ color: 'var(--blue)' }}>Powers Enterprises.</span>
                </h1>
                <p style={{ fontSize: '20px', color: '#64748b', lineHeight: '1.7', marginBottom: '40px', maxWidth: '600px' }}>
                  We don't just write code; we build resilient digital ecosystems. From mission-critical OCC dashboards to high-security mobile NOC apps.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '18px 40px', borderRadius: '12px' }}>Start a Development Project →</Link>
                </div>
              </div>
              <div className="fade-up" style={{ position: 'relative' }}>
                <div style={{ background: '#034EA2', padding: '30px', borderRadius: '24px', boxShadow: '0 30px 60px rgba(3, 78, 162, 0.15)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                  </div>
                  <div style={{ color: 'var(--blue-light)' }}>// DigNep Software Architecture</div>
                  <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>class</span> Infrastructure <span style={{ color: 'var(--blue-light)' }}>{ '{' }</span></div>
                  <div style={{ paddingLeft: '20px' }}>constructor() { '{' }</div>
                  <div style={{ paddingLeft: '40px' }}><span style={{ color: 'var(--green)' }}>this</span>.security = <span style={{ color: 'var(--blue-light)' }}>"Enterprise"</span>;</div>
                  <div style={{ paddingLeft: '40px' }}><span style={{ color: 'var(--green)' }}>this</span>.scaling = <span style={{ color: 'var(--blue-light)' }}>"Infinite"</span>;</div>
                  <div style={{ paddingLeft: '20px' }}>{ '}' }</div>
                  <div style={{ marginTop: '10px' }}>{ '}' }</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STACK SECTION ── */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container">
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#034EA2', textAlign: 'center', marginBottom: '60px' }}>Our Technical <span style={{ color: 'var(--blue)' }}>DNA</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
              {[
                { t: 'Web Architecture', d: 'Next.js, React, and high-performance Node.js backends.', i: <IconLayout /> },
                { t: 'Mobile Ecosystems', d: 'Secure React Native and Flutter enterprise applications.', i: <IconSmartphone /> },
                { t: 'Data Hubs', d: 'PostgreSQL, MongoDB, and Redis at petabyte scale.', i: <IconDatabase /> },
                { t: 'DevOps & CI/CD', d: 'Automated deployment pipelines and containerization.', i: <IconTerminal /> }
              ].map((stack, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px 30px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{stack.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#034EA2', marginBottom: '12px' }}>{stack.t}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>{stack.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FEATURED WORK VISUAL ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up">
                <img src="/web-dev-workspace.png" alt="OCC Dashboard" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
              </div>
              <div className="fade-up">
                <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#034EA2', marginBottom: '30px' }}>Built for <span style={{ color: 'var(--blue)' }}>Mission-Critical</span> Visibility.</h2>
                <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  We specialize in building the software that manages the infrastructure. Our dashboards provide real-time telemetry from every node in your network.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Real-time WebSocket telemetry', 'Enterprise-grade SSO integration', 'Custom SVG network topology maps', 'Role-based access control (RBAC)'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontWeight: '700', color: '#034EA2' }}>
                      <span style={{ color: 'var(--green)' }}><IconCode /></span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '45px', fontWeight: '900', color: '#034EA2', marginBottom: '30px' }}>Ready to <span style={{ color: 'var(--blue)' }}>Build?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Start a Project →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'software')} 
          serviceName="Software" 
        />

      </div>
    </main>
  );
}
