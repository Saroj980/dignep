"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconSmartphone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconCode = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function MobileAppDevelopmentServicePage() {
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
      <div className="page active" id="page-service-mobile">
        
        {/* ── 1. HERO ── */}
        <section className="sw-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                <IconSmartphone />
                <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>App Development</span>
              </div>
              <h1 className="sp-hero-title">
                Mobile App <br /><span className="highlight">Development</span>
              </h1>
              <p className="sp-hero-desc">
                High-performance iOS and Android applications. We build feature-rich mobile platforms tailored for enterprise scale and maximum user engagement.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Start an App →</Link>
              </div>
            </div>
            <div className="fade-up sp-hero-visual">
              <div style={{ background: 'var(--navy)', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ color: 'var(--blue-light)' }}>// Mobile App Core</div>
                <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>const</span> mobileApp = <span style={{ color: 'var(--blue-light)' }}>new</span> EnterpriseApp();</div>
                <div style={{ paddingLeft: '20px' }}>mobileApp.platforms = [<span style={{ color: 'var(--blue-light)' }}>"iOS"</span>, <span style={{ color: 'var(--blue-light)' }}>"Android"</span>];</div>
                <div style={{ paddingLeft: '20px' }}>mobileApp.build();</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STACK SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Our App <span className="highlight">Expertise</span></h2>
            <div className="grid-4-cols">
              {[
                { t: 'iOS Development', d: 'High performance native Swift application builds.', i: <IconSmartphone /> },
                { t: 'Android Ecosystems', d: 'Comprehensive Kotlin enterprise app frameworks.', i: <IconZap /> },
                { t: 'Cross-Platform', d: 'Optimized React Native and Flutter hybrid codebases.', i: <IconCode /> },
                { t: 'Advanced Security', d: 'Enterprise-level access management and encryption.', i: <IconShield /> }
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

        {/* ── 3. DETAILED WORK ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up">
                <img src="/mobile-app-studio.png" alt="App Workspace" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Empowering <span className="highlight">Mobile Experiences</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our mobile development methodologies deliver seamless user onboarding and high long-term retention. We use continuous integration to keep your app up-to-date.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Highly fluid cross-platform UI/UX design', 'Comprehensive push notification flows', 'Robust cloud API integration setups', 'Clean app store release management'].map((f, i) => (
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
            <h2 className="section-title">Ready to <span className="highlight">Build?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Start Development →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'software')} 
          serviceName="Mobile Apps" 
        />

      </div>
    </main>
  );
}
