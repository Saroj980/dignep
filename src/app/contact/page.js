"use client";
import React, { useEffect } from 'react';

// Simplified Professional Vector Icons
const IconLocation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export default function ContactPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: '#fff', color: '#034EA2' }}>
      <div className="page active" id="page-contact">
        
        {/* ── 1. ATTRACTIVE & VIBRANT HERO ── */}
        <section className="cn-hero" style={{ 
          padding: '180px 0 100px', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #fff 0%, #f0f9ff 100%)'
        }}>
          {/* Vibrant Background Orbs */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-100px', left: '-50px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', borderRadius: '50%' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up">
                <span style={{ 
                  color: 'var(--blue)', 
                  fontWeight: '800', 
                  fontSize: '13px', 
                  letterSpacing: '3px', 
                  textTransform: 'uppercase', 
                  marginBottom: '24px', 
                  display: 'block' 
                }}>Get In Touch</span>
                
                <h1 style={{ 
                  fontSize: 'clamp(3rem, 7vw, 5rem)', 
                  fontWeight: '900', 
                  lineHeight: '1', 
                  marginBottom: '32px', 
                  letterSpacing: '-2px' 
                }}>
                  We’re Here to <br />
                  <span style={{ color: 'var(--blue)' }}>Support Your</span> <br />
                  Digital Growth.
                </h1>
                
                <p style={{ 
                  fontSize: '20px', 
                  color: '#64748b', 
                  lineHeight: '1.7', 
                  maxWidth: '550px', 
                  marginBottom: '48px' 
                }}>
                  Have a question or a project in mind? Our team of enterprise architects and engineers is ready to provide the technical guidance you need.
                </p>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="mailto:dignepaltechnologies@gmail.com" className="btn-primary" style={{ padding: '20px 40px', borderRadius: '12px', color: '#fff' }}>Start a Conversation</a>
                  <a href="tel:9828031562" className="btn-secondary" style={{ padding: '20px 40px', borderRadius: '12px', background: '#fff' }}>Quick Call</a>
                </div>
              </div>
              
              <div className="fade-up" style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  borderRadius: '32px', 
                  overflow: 'hidden', 
                  boxShadow: '0 30px 60px rgba(3, 78, 162, 0.1)' 
                }}>
                  <img src="/web-dev-workspace.png" alt="DigNep Office" style={{ width: '100%', display: 'block' }} />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(3, 78, 162, 0.4))' 
                  }}></div>
                </div>
                {/* Floating Badge */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-20px', 
                  right: '-20px', 
                  background: 'var(--green)', 
                  color: '#fff', 
                  padding: '24px', 
                  borderRadius: '24px', 
                  fontWeight: '900', 
                  boxShadow: '0 15px 30px rgba(16, 185, 129, 0.2)',
                  zIndex: 3
                }}>
                  Active Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. VIBRANT CONTACT CARDS ── */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { 
                  t: 'Location', 
                  d: 'Dhangadhi -04, Nepal', 
                  i: <IconLocation />, 
                  c: '#0EA5E9' 
                },
                { 
                  t: 'Email Us', 
                  d: 'dignepaltechnologies@gmail.com', 
                  i: <IconEmail />, 
                  c: '#10B981' 
                },
                { 
                  t: 'Call Us', 
                  d: '+977 9828031562', 
                  i: <IconPhone />, 
                  c: '#034EA2' 
                }
              ].map((card, i) => (
                <div key={i} className="fade-up" style={{ 
                  padding: '50px 40px', 
                  background: '#f8fafc', 
                  borderRadius: '32px', 
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f1f5f9'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: '#fff', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px',
                    color: card.c,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
                  }}>{card.i}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>{card.t}</h3>
                  <p style={{ color: '#64748b', fontWeight: '500' }}>{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MAP & DETAILS SECTION ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up" style={{ 
                height: '400px', 
                background: '#e2e8f0', 
                borderRadius: '40px', 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
              }}>
                {/* Visual Map Placeholder */}
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'url("/cyber-security.png") center/cover', 
                  opacity: 0.15,
                  filter: 'grayscale(1) brightness(1.2)'
                }}></div>
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'var(--blue)' }}>
                  <IconLocation />
                  <div style={{ fontWeight: '900', marginTop: '10px', fontSize: '18px' }}>DHANGADHI, NEPAL</div>
                </div>
              </div>
              
              <div className="fade-up">
                <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '32px' }}>Working <span style={{ color: 'var(--blue)' }}>Hours</span></h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  {[
                    { d: 'Sun - Fri', h: '9:00 AM - 6:00 PM' },
                    { d: 'Saturday', h: 'Strategic Support Only' },
                    { d: 'NOC Status', h: '24/7 Monitoring' }
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
                      <span style={{ fontWeight: '700', fontSize: '17px' }}>{row.d}</span>
                      <span style={{ color: '#64748b' }}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CALL TO ACTION ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ 
              background: '#034EA2', 
              borderRadius: '60px', 
              padding: '100px 40px', 
              color: '#fff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
              <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '24px' }}>Ready to Scale?</h2>
              <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                Join hundreds of businesses that trust DigNep for their mission-critical IT infrastructure.
              </p>
              <a href="mailto:dignepaltechnologies@gmail.com" className="btn-primary" style={{ 
                background: '#fff', 
                color: '#034EA2', 
                padding: '20px 60px', 
                borderRadius: '100px', 
                fontWeight: '900',
                border: 'none'
              }}>Contact Us Now →</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
