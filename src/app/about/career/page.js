"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconCareer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconExcellence = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconGrowth = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);

export default function CareerPage() {
  const [formStatus, setFormStatus] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Application submitted successfully! Our talent acquisition team will review and connect with you shortly.');
  };

  const openRoles = [
    { title: 'Full Stack Engineer (React/Next.js/Node)', type: 'Full-Time | Kathmandu', exp: '3+ Years' },
    { title: 'Network Infrastructure Engineer', type: 'Full-Time | Remote Friendly', exp: '2+ Years' },
    { title: 'Cybersecurity Analyst (SOC)', type: 'Full-Time | On-Site', exp: '2+ Years' }
  ];

  return (
    <main>
      <div className="page active" id="page-career">
        
        {/* ── 1. HERO ── */}
        <section className="about-hero sp-hero" style={{ padding: '160px 0 100px' }}>
          <div className="sp-hero-bg-grid" />
          <div className="container">
            <div className="grid-split-hero">
              <div className="fade-up text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                   <span style={{ width: '40px', height: '2px', background: 'var(--blue)' }}></span>
                   <span style={{ color: 'var(--blue)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Join Us</span>
                </div>
                <h1 className="sp-hero-title">
                  Build Your <br /><span className="highlight">Tech Career</span> at DigNep
                </h1>
                <p className="sp-hero-desc">
                  Explore new limits of digital innovation. We offer a progressive, open, and dynamic environment where tech visionaries create software and networks that matter.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link href="#job-openings" className="btn-primary">Browse Current Roles →</Link>
                </div>
              </div>
              <div className="fade-up sp-hero-visual">
                <div className="sp-hero-img-frame">
                  <img src="/web-dev-workspace.png" alt="Working at DigNep" className="sp-hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. OPENINGS SECTION ── */}
        <section id="job-openings" style={{ padding: '100px 0', background: 'var(--bg-navy)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-tag why-tag">Current Opportunities</span>
              <h2 className="section-title why-title" style={{ marginTop: '12px' }}>Open Technical <span className="highlight">Roles</span></h2>
              <p style={{ opacity: 0.8, maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)' }}>Help us craft enterprise IT infrastructures across borders.</p>
            </div>

            <div className="grid-3-cols" style={{ gap: '30px', marginBottom: '80px' }}>
              {openRoles.map((role, i) => (
                <div key={i} className="fade-up" style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.05)', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--bg-accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: '24px' }}>
                    <IconCareer />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', color: 'var(--navy-dark)' }}>{role.title}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: '700', marginBottom: '14px' }}>{role.type}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Required Experience: {role.exp}</p>
                </div>
              ))}
            </div>

            {/* Application form */}
            <div className="fade-up" style={{ background: 'var(--white)', padding: '60px', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(15,23,42,0.03)', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--navy-dark)' }}>Send Your Resume</h3>
                <p style={{ color: 'var(--text-muted)' }}>Can't find a direct role? Submit your profile for future openings.</p>
              </div>

              {formStatus ? (
                <div style={{ background: '#ecfdf5', color: 'var(--green-dark)', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: '600', marginBottom: '20px' }}>
                  {formStatus}
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div className="grid-2-cols" style={{ gap: '24px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '8px' }}>Full Name</label>
                      <input type="text" required style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1.5px solid var(--light-gray)', fontSize: '14px', outlineColor: 'var(--blue)' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '8px' }}>Email Address</label>
                      <input type="email" required style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1.5px solid var(--light-gray)', fontSize: '14px', outlineColor: 'var(--blue)' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '8px' }}>Message / Cover Letter</label>
                    <textarea rows="4" required style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1.5px solid var(--light-gray)', fontSize: '14px', outlineColor: 'var(--blue)' }} placeholder="Tell us a bit about your experience..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px 24px', border: 'none', cursor: 'pointer' }}>Submit Application →</button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ── 3. WORKPLACE CULTURE & PERKS ── */}
        <section style={{ padding: '120px 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="section-tag">Working Here</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>Enterprise Growth <span className="highlight">& Benefits</span></h2>
            </div>
            <div className="grid-3-cols">
              {[
                { t: 'Strategic Autonomy', d: 'Engage in open workspace protocols and pursue creative software directions.', i: <IconGrowth /> },
                { t: 'Competitive Compensation', d: 'Excellent salaries coupled with periodic performance incentives.', i: <IconCareer /> },
                { t: 'Dynamic Environment', d: 'Work with the top international developers and senior cloud system engineers.', i: <IconExcellence /> }
              ].map((val, i) => (
                <div key={i} className="fade-up" style={{ padding: '40px', background: 'var(--bg-navy)', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.06)', transition: 'all 0.3s ease' }}>
                  <div style={{ color: 'var(--blue)', marginBottom: '20px' }}>{val.i}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '15px' }}>{val.t}</h3>
                  <p style={{ color: 'var(--text-body)', lineHeight: '1.6', fontSize: '14.5px' }}>{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section style={{ padding: '100px 0', textAlign: 'center', background: 'var(--bg-navy)' }}>
          <div className="container">
            <h2 className="section-title">Elevate Your Career <span className="highlight">Today</span></h2>
            <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '40px' }}>Explore opportunities to build global systems.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Learn more →</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
