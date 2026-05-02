"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconBarChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default function SEOAndGrowthServicePage() {
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
      <div className="page active" id="page-service-seo">
        
        {/* ── 1. HERO ── */}
        <section className="sw-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                <IconSearch />
                <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>SEO & Visibility</span>
              </div>
              <h1 className="sp-hero-title">
                Search Engine <br /><span className="highlight">Optimization</span>
              </h1>
              <p className="sp-hero-desc">
                Dominate organic search. We help businesses rank higher, capture high-intent inbound traffic, and systematically drive sustainable digital growth.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Audit Your Website →</Link>
              </div>
            </div>
            <div className="fade-up sp-hero-visual">
              <div style={{ background: 'var(--navy)', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ color: 'var(--blue-light)' }}>// SEO Insights</div>
                <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>const</span> rankings = <span style={{ color: 'var(--blue-light)' }}>new</span> SearchOptimization();</div>
                <div style={{ paddingLeft: '20px' }}>rankings.targetKeywords([<span style={{ color: 'var(--blue-light)' }}>"IT Solutions"</span>, <span style={{ color: 'var(--blue-light)' }}>"Networking"</span>]);</div>
                <div style={{ paddingLeft: '20px' }}>rankings.optimizeMetadata();</div>
                <div style={{ paddingLeft: '20px' }}>rankings.trackResults();</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STACK SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Drive Search <span className="highlight">Growth</span></h2>
            <div className="grid-4-cols">
              {[
                { t: 'Keyword Strategy', d: 'Deep intent and competitive gap keyword analysis.', i: <IconSearch /> },
                { t: 'Technical SEO', d: 'High performance loading speeds and crawl optimization.', i: <IconZap /> },
                { t: 'Analytics Integration', d: 'Clear insights through advanced tracking setups.', i: <IconBarChart /> },
                { t: 'Authority Building', d: 'High quality link architecture and content building.', i: <IconShield /> }
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
                <img src="/cyber-security.png" alt="SEO Framework" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Rank Higher. <span className="highlight">Scale Faster.</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our search optimization framework ensures continuous value. We improve organic traffic and conversion rates while establishing brand credibility online.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Thorough on-page content enhancement', 'Clean search console integration', 'Site architecture and accessibility tuning', 'Ongoing performance tracking and reporting'].map((f, i) => (
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
            <h2 className="section-title">Ready to <span className="highlight">Grow?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Request a Strategy →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'cloud')} 
          serviceName="SEO" 
        />

      </div>
    </main>
  );
}
