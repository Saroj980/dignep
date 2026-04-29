"use client";
import React, { useEffect } from 'react';

// PROFESSIONAL VECTOR ICONS
const IconAcademy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);
const IconCertificate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);
const IconLab = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.5m4-7.5v7.5M4.5 22h15c1 0 1.5-1 1-2l-4-7V5c0-1-1-2-2-2h-5c-1 0-2 1-2 2v8l-4 7c-.5 1 0 2 1 2z"/></svg>
);
const IconNetwork = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>
);
const IconSecurity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.3-4.3-4.5-.3-3.1-2.9-5.5-6.2-5.5-2.7 0-5 1.6-6 4C3.2 9.2 1 11.6 1 14.5 1 17.5 3.5 20 6.5 20h11"/></svg>
);
const IconMentor = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default function TrainingPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: '#fff' }}>
      <div className="page active" id="page-training">
        
        {/* ── 1. UNIQUE TRAINING HERO: GRID & TECHNICAL ── */}
        <section className="tr-hero" style={{ padding: '200px 0 120px', position: 'relative', overflow: 'hidden', background: '#034EA2' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.3 }}></div>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'var(--blue)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.2 }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', color: '#fff', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px' }}>
                <span style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}><IconAcademy /></span>
                Elite Engineering Academy
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '900', color: '#fff', lineHeight: '0.9', marginBottom: '30px', letterSpacing: '-3px' }}>
                Master the <span style={{ color: 'var(--green)' }}>Infrastructure</span> <br />of the Future.
              </h1>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '45px', maxWidth: '750px', margin: '0 auto 45px' }}>
                From Tier standards to High-Density networking, our training programs are designed by engineers for the next generation of infrastructure experts.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <a href="#courses" className="btn-primary" style={{ background: 'var(--green)', color: '#034EA2', padding: '20px 45px', borderRadius: '12px' }}>Explore Programs ↓</a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex' }}>
                    {[1,2,3].map(i => <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #034EA2', background: '#e2e8f0', marginLeft: i > 1 ? '-10px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#034EA2', fontWeight: '900' }}>{i}</div>)}
                  </div>
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>1,200+ Professionals Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. COURSE GRID ── */}
        <section id="courses" style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { t: 'DC Engineering', d: 'Master Tier standards, power cycles, and rack management.', i: <IconNetwork />, l: 'Beginner → Adv' },
                { t: 'Cybersecurity', d: 'SOC operations, firewall hardening, and perimeter defense.', i: <IconSecurity />, l: 'Intermediate' },
                { t: 'Cloud Architecture', d: 'AWS/Azure multi-cloud strategy and secure migration.', i: <IconCloud />, l: 'Advanced' }
              ].map((course, i) => (
                <div key={i} className="fade-up" style={{ padding: '50px 40px', background: '#fff', border: '1px solid #f1f5f9', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--blue)' }}></div>
                  <div style={{ fontSize: '40px', marginBottom: '30px', color: 'var(--blue)' }}>{course.i}</div>
                  <span style={{ fontSize: '11px', fontWeight: '900', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>{course.l}</span>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#034EA2', margin: '15px 0' }}>{course.t}</h3>
                  <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '30px' }}>{course.d}</p>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: '#64748b', fontWeight: '700', alignItems: 'center' }}>
                    <span>🕒 120 Hrs</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><IconCertificate /> Certificate</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. TRAINING PHILOSOPHY: THE LAB ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div className="fade-up">
                <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#034EA2', marginBottom: '30px' }}>Real Hardware. <br /><span style={{ color: 'var(--blue)' }}>Real Skills.</span></h2>
                <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                  We don't believe in just theory. Our students get hands-on access to enterprise-grade routers, servers, and cooling systems in our state-of-the-art laboratory.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ padding: '20px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: '900', color: '#034EA2', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconLab /></span> Live Labs
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Configure real enterprise devices.</div>
                  </div>
                  <div style={{ padding: '20px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: '900', color: '#034EA2', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}><IconMentor /></span> Expert Mentors
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Learn from working engineers.</div>
                  </div>
                </div>
              </div>
              <div className="fade-up" style={{ position: 'relative' }}>
                <img src="/web-dev-workspace.png" alt="Training Lab" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--green)', padding: '24px', borderRadius: '24px', color: '#034EA2', fontWeight: '900', fontSize: '18px', boxShadow: '0 15px 30px rgba(16, 185, 129, 0.2)' }}>
                  100% Practical
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. BRANDED CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ background: '#034EA2', borderRadius: '60px', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '300px', height: '300px', border: '40px solid rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
              <h2 style={{ fontSize: '50px', fontWeight: '900', color: '#fff', marginBottom: '24px' }}>Ready to <span style={{ color: 'var(--green)' }}>Level Up?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px', maxWidth: '600px', margin: '0 auto 50px' }}>
                Enrollment for the Summer cohort is now open. Secure your spot and join the ranks of elite IT professionals.
              </p>
              <a href="/contact" className="btn-primary" style={{ background: 'var(--green)', color: '#034EA2', padding: '22px 60px', borderRadius: '100px', fontWeight: '900' }}>Enroll Now →</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
