"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS
const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IconBarChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
);
const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export default function SocialMediaMarketingServicePage() {
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
      <div className="page active" id="page-service-smm">
        
        {/* ── 1. HERO ── */}
        <section className="sw-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '24px' }}>
                <IconGlobe />
                <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Digital Growth</span>
              </div>
              <h1 className="sp-hero-title">
                Social Media <span className="highlight">Marketing</span><br />and Engagement
              </h1>
              <p className="sp-hero-desc">
                Amplify your digital visibility. We create data-driven and targeted social media campaigns that spark meaningful interaction and convert audience engagement into concrete enterprise growth.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Drive Growth Now →</Link>
              </div>
            </div>
            <div className="fade-up sp-hero-visual">
              <div style={{ background: 'var(--navy)', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: '#fff', fontFamily: 'monospace', fontSize: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ color: 'var(--blue-light)' }}>// Marketing Dynamics</div>
                <div style={{ marginTop: '10px' }}><span style={{ color: 'var(--green)' }}>const</span> campaign = <span style={{ color: 'var(--blue-light)' }}>new</span> MarketingCampaign();</div>
                <div style={{ paddingLeft: '20px' }}>campaign.setTargetAudience(<span style={{ color: 'var(--blue-light)' }}>"Global"</span>);</div>
                <div style={{ paddingLeft: '20px' }}>campaign.setROI(<span style={{ color: 'var(--blue-light)' }}>"Maximum"</span>);</div>
                <div style={{ paddingLeft: '20px' }}>campaign.launch();</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. FEATURES SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Our Marketing <span className="highlight">Expertise</span></h2>
            <div className="grid-4-cols">
              {[
                { t: 'Strategic Campaigns', d: 'Engaging content geared toward maximum conversion.', i: <IconGlobe /> },
                { t: 'Advanced Targeting', d: 'Reaching highly specific and qualified buyers.', i: <IconSearch /> },
                { t: 'Performance Analytics', d: 'Continuous campaign performance optimization.', i: <IconBarChart /> },
                { t: 'Brand Presence', d: 'High impact consistent digital brand messaging.', i: <IconGlobe /> }
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

        {/* ── 3. VISUAL SECTION ── */}
        <section style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up">
                <img src="/ai-data-hub.png" alt="Marketing Hub" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div className="fade-up text-left">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Build a Stronger <span className="highlight">Digital Presence</span></h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  Our campaigns deliver consistent return on investment. We construct digital funnels that reliably convert high volumes of traffic into high-value interactions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Custom lead generation workflows', 'End-to-end content distribution', 'Advanced retargeting setups', 'Influencer and partner marketing'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontWeight: '700', color: 'var(--navy-dark)' }}>
                      <span style={{ color: 'var(--green)' }}><IconGlobe /></span> {f}
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
            <h2 className="section-title">Ready to <span className="highlight">Launch?</span></h2>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '12px' }}>Consult With an Expert →</Link>
          </div>
        </section>

        {/* ── 5. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'cloud')} 
          serviceName="Marketing" 
        />

      </div>
    </main>
  );
}
