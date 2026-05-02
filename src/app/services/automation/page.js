"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconServer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
);
const IconTerminal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
);

export default function AutomationServicePage() {
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
      <div className="page active" id="page-service-automation">
        
        {/* ── 1. CLEAN DEVELOPER HERO ── */}
        <section className="sw-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                <IconZap />
                <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Enterprise Automation</span>
              </div>
              <h1 className="sp-hero-title">
                Reliable <span className="highlight">DevOps & Automation</span><br />Workflows
              </h1>
              <p className="sp-hero-desc">
                Streamline and optimize operations. We deploy robust CI/CD, cloud orchestration, and testing pipelines that ensure maximum availability and performance.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Optimize Your Workflow →</Link>
              </div>
            </div>
            <div className="fade-up sp-hero-visual">
              <div style={{ background: 'var(--navy)', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ color: 'var(--blue-light)' }}>// DigNep Automation System</div>
                <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>const</span> deployPipeline = <span style={{ color: 'var(--blue-light)' }}>() =&gt;</span> { '{' }</div>
                <div style={{ paddingLeft: '20px' }}><span style={{ color: 'var(--blue-light)' }}>build()</span>;</div>
                <div style={{ paddingLeft: '20px' }}><span style={{ color: 'var(--blue-light)' }}>test()</span>;</div>
                <div style={{ paddingLeft: '20px' }}><span style={{ color: 'var(--blue-light)' }}>deploy({ '{' } env: "production", zeroDowntime: true { '}' })</span>;</div>
                <div style={{ marginTop: '10px' }}>{ '}' }</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STACK SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>End-to-End <span className="highlight">Automation Ecosystem</span></h2>
            <div className="grid-4-cols">
              {[
                { t: 'Modern CI/CD', d: 'Automated software building, testing, and continuous deployment pipelines.', i: <IconTerminal /> },
                { t: 'Infrastructure as Code', d: 'Terraform, Ansible, and automated cloud deployments.', i: <IconServer /> },
                { t: 'Secure Cloud Operations', d: 'Secure multi-cloud access control and active threat detection.', i: <IconShield /> },
                { t: 'Performance Scaling', d: 'Load optimization and compute cluster scaling.', i: <IconZap /> }
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
                <img src="/cyber-security.png" alt="Automation Workspace" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Fast. Reliable. <span className="highlight">Automated.</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Eliminate developer bottlenecks and manual tasks with automated pipelines. Our systems provide full observability from source commit to production deployment.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Automated cloud provisioning', 'Zero downtime deployment pipelines', 'Infrastructure as Code templates', 'Centralized system observability'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontWeight: '700', color: 'var(--navy-dark)' }}>
                      <span style={{ color: 'var(--green)' }}><IconZap /></span> {f}
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
            <h2 className="section-title">Ready to <span className="highlight">Automate?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Talk to an Expert →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'cloud')} 
          serviceName="DevOps & Automation" 
        />

      </div>
    </main>
  );
}
