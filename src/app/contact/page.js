"use client";
import React, { useEffect, useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const res = await fetch("https://formsubmit.co/ajax/dignepaltechnologies@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ background: '#fff', color: '#034EA2' }}>
      <div className="page active" id="page-contact">
        
        {/* ── 1. HERO ── */}
        <section className="cn-hero sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="container sp-hero-inner grid-split-hero">
            <div className="fade-up text-left">
              <span className="section-tag why-tag mb-16">Get In Touch</span>
              
              <h1 className="sp-hero-title">
                We’re Here to <br />
                <span className="highlight">Support Your</span> <br />
                Digital Growth.
              </h1>
              
              <p className="sp-hero-desc">
                Have a question or a project in mind? Our team of enterprise architects and engineers is ready to provide the technical guidance you need.
              </p>
              
              <div className="hero-actions">
                <a href="#contact-section" className="btn-primary">Reach Out Now</a>
                <a href="tel:9828031562" className="btn-secondary">Quick Call</a>
              </div>
            </div>
            
            <div className="fade-up sp-hero-visual">
              <div className="sp-hero-img-frame">
                <img src="/web-dev-workspace.png" alt="DigNep Office" className="sp-hero-img" />
                <div className="sp-hero-img-overlay" />
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
        </section>

        {/* ── 2. TWO-COLUMN DETAILS & CONTACT FORM ── */}
        <section id="contact-section" style={{ padding: '100px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-split-hero" style={{ gap: '60px', alignItems: 'start' }}>
              
              {/* LEFT COLUMN: CONTACT DETAILS & HOURS */}
              <div className="fade-up text-left" style={{ display: 'grid', gap: '40px' }}>
                <div>
                  <span className="section-tag why-tag mb-16">Connect Directly</span>
                  <h2 style={{ fontSize: '38px', fontWeight: '900', color: 'var(--navy-dark)', marginTop: '8px' }}>Let’s Build Something <span className="highlight">Great.</span></h2>
                  <p style={{ color: 'var(--text-body)', marginTop: '14px', fontSize: '17px', lineHeight: '1.7' }}>
                    Need a dedicated partner for enterprise development? Our experts are here to turn complex software and network ideas into resilient, production-ready solutions.
                  </p>
                </div>

                {/* Contact Cards Stacking */}
                <div style={{ display: 'grid', gap: '20px' }}>
                  {[
                    { 
                      t: 'Address & Location', 
                      d: 'Dhangadhi -04, Nepal', 
                      i: <IconLocation />, 
                      c: 'var(--blue)' 
                    },
                    { 
                      t: 'Direct Email', 
                      d: 'dignepaltechnologies@gmail.com', 
                      i: <IconEmail />, 
                      c: 'var(--green)' 
                    },
                    { 
                      t: 'Call or WhatsApp', 
                      d: '+977 9828031562', 
                      i: <IconPhone />, 
                      c: 'var(--navy)' 
                    }
                  ].map((card, i) => (
                    <div key={i} style={{ 
                      padding: '24px', 
                      background: 'var(--bg-navy)', 
                      borderRadius: '20px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '20px',
                      border: '1px solid rgba(15,23,42,0.06)'
                    }}>
                      <div style={{ 
                        width: '54px', 
                        height: '54px', 
                        background: '#fff', 
                        borderRadius: '14px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: card.c,
                        boxShadow: 'var(--shadow-sm)',
                        flexShrink: 0
                      }}>{card.i}</div>
                      <div>
                        <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '4px' }}>{card.t}</h3>
                        <p style={{ color: 'var(--text-body)', fontWeight: '600', fontSize: '16px' }}>{card.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working Hours */}
                <div style={{ padding: '32px', background: 'var(--bg-navy)', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.05)' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '18px' }}>Working Hours</h3>
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {[
                      { d: 'Sun - Fri', h: '9:00 AM - 6:00 PM' },
                      { d: 'Saturday', h: 'Strategic Support Only' },
                      { d: 'NOC Status', h: '24/7 Monitoring' }
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(15,23,42,0.08)' }}>
                        <span style={{ fontWeight: '700', color: 'var(--navy-dark)', fontSize: '15px' }}>{row.d}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{row.h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: CONTACT FORM */}
              <div className="fade-up" style={{ background: '#fff', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 80px -20px rgba(3, 78, 162, 0.1)', border: '1px solid rgba(15,23,42,0.06)', width: '100%' }}>
                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy-dark)' }}>Send Us a <span className="highlight">Message</span></h2>
                  <p style={{ color: 'var(--text-body)', marginTop: '8px', fontSize: '15px', fontWeight: '500' }}>We typically respond within a few business hours.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', fontSize: '13px', color: 'var(--navy-dark)' }} htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.12)', background: '#fff', fontSize: '15px', outline: 'none' }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', fontSize: '13px', color: 'var(--navy-dark)' }} htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.12)', background: '#fff', fontSize: '15px', outline: 'none' }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', fontSize: '13px', color: 'var(--navy-dark)' }} htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.12)', background: '#fff', fontSize: '15px', outline: 'none' }}
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', fontSize: '13px', color: 'var(--navy-dark)' }} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.12)', background: '#fff', fontSize: '15px', outline: 'none', resize: 'vertical' }}
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{ width: '100%', padding: '16px', borderRadius: '10px', fontWeight: '800', cursor: isSubmitting ? 'not-allowed' : 'pointer', border: 'none', textAlign: 'center', transition: 'all 0.3s ease' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </div>

                  {status === 'success' && (
                    <div style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #10b981', padding: '14px', borderRadius: '10px', fontWeight: '700', textAlign: 'center', marginTop: '12px', fontSize: '14px' }}>
                      Thank you! Your message has been sent successfully. We will get back to you shortly.
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{ background: '#fef2f2', color: '#991b1b', border: '1px solid #ef4444', padding: '14px', borderRadius: '10px', fontWeight: '700', textAlign: 'center', marginTop: '12px', fontSize: '14px' }}>
                      Oops! Something went wrong while sending your message. Please try again later.
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
