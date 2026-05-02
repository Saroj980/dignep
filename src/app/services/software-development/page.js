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
const IconCpu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2"/></svg>
);

export default function CustomSoftwareDevelopmentPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-software-dev">
        
        {/* ── 1. CLEAN DEVELOPER HERO ── */}
        <section className="sw-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                <IconCode />
                <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Enterprise Development</span>
              </div>
              <h1 className="sp-hero-title">
                Custom <span className="highlight">Software Solutions</span><br />Built to Scale
              </h1>
              <p className="sp-hero-desc">
                Accelerate your growth with bespoke enterprise software. We design, build, and deploy reliable web and mobile platforms customized precisely for your business needs.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Get in Touch →</Link>
              </div>
            </div>
            <div className="fade-up sp-hero-visual">
              <div style={{ background: 'var(--navy)', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ color: 'var(--blue-light)' }}>// DigNep Custom Software Architecture</div>
                <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>class</span> BespokeSolution <span style={{ color: 'var(--blue-light)' }}>{ '{' }</span></div>
                <div style={{ paddingLeft: '20px' }}>constructor() { '{' }</div>
                <div style={{ paddingLeft: '40px' }}><span style={{ color: 'var(--green)' }}>this</span>.scalability = <span style={{ color: 'var(--blue-light)' }}>"Unlimited"</span>;</div>
                <div style={{ paddingLeft: '40px' }}><span style={{ color: 'var(--green)' }}>this</span>.security = <span style={{ color: 'var(--blue-light)' }}>"Military-Grade"</span>;</div>
                <div style={{ paddingLeft: '20px' }}>{ '}' }</div>
                <div style={{ marginTop: '10px' }}>{ '}' }</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STACK SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Built with the <span className="highlight">Best Technologies</span></h2>
            <div className="grid-4-cols">
              {[
                { t: 'Modern Web Platforms', d: 'Enterprise-grade React and Next.js applications.', i: <IconLayout /> },
                { t: 'Secure Data Core', d: 'Scalable cloud databases for enterprise data consistency.', i: <IconDatabase /> },
                { t: 'Bespoke API Hubs', d: 'Fast and reliable GraphQL and REST web services.', i: <IconTerminal /> },
                { t: 'Performant Computing', d: 'High availability architecture and performance tuning.', i: <IconCpu /> }
              ].map((stack, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px 30px', background: 'var(--bg-navy)', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.06)' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{stack.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '12px' }}>{stack.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.6' }}>{stack.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FEATURED WORK VISUAL ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up">
                <img src="/web-dev-workspace.png" alt="Workspace" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Tailored to Your <span className="highlight">Business Workflow</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our customized solutions integrate seamlessly into your existing operations. We build specialized portals that streamline workflows and optimize internal efficiencies.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Highly scalable cloud deployments', 'Complete DevOps automation integration', 'Comprehensive user access control', 'Seamless API and legacy connectivity'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontWeight: '700', color: 'var(--navy-dark)' }}>
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
            <h2 className="section-title">Ready to <span className="highlight">Scale Up?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Start a Project →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'software')} 
          serviceName="Software Development" 
        />

      </div>
    </main>
  );
}
