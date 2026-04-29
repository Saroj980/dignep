"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconAgreement = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconTools = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
const IconScale = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16 2 6"/><path d="m2 16 14-10"/><path d="M21 21H3"/><path d="M16 16a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5"/><path d="M2 16a5 5 0 0 0-5 5h0a5 5 0 0 0-5-5"/></svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const IconWarning = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4.11 21h15.78a2 2 0 0 0 1.84-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);
const IconFlag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
);
const IconRefresh = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
);
const IconSmartphone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
);

export default function TermsPage() {
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

  const sections = [
    {
      icon: <IconAgreement />,
      title: "1. Agreement to Terms",
      content: "By accessing and using the DigNep website and services, you agree to be bound by these Terms. If you do not agree, please do not use our platform."
    },
    {
      icon: <IconTools />,
      title: "2. Use of Services",
      content: "You agree to use our services only for lawful purposes. You are responsible for maintaining the confidentiality of any account details used on our site."
    },
    {
      icon: <IconScale />,
      title: "3. Intellectual Property",
      content: "All content on this website, including text, graphics, and logos, is the property of DigNep and is protected by international copyright laws."
    },
    {
      icon: <IconLock />,
      title: "4. Limitation of Liability",
      content: "DigNep will not be liable for any damages arising from the use of this site or from any services included on or otherwise made available through this site."
    },
    {
      icon: <IconWarning />,
      title: "5. Termination",
      content: "We reserve the right to suspend your access to our services for any conduct that we believe violates these Terms or is harmful to our community."
    },
    {
      icon: <IconFlag />,
      title: "6. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law principles."
    },
    {
      icon: <IconRefresh />,
      title: "7. Updates to Terms",
      content: "We may revise these Terms at any time by updating this page. Your continued use of the site following changes means you accept those revisions."
    },
    {
      icon: <IconSmartphone />,
      title: "8. Contact Information",
      content: "For any questions regarding these Terms, please contact our legal department at dignepaltechnologies@gmail.com."
    }
  ];

  return (
    <main style={{backgroundColor: "var(--bg-navy)"}}>
      <div className="hero" style={{
        minHeight: "auto",
        padding: "180px 0 100px", 
        background: "var(--bg-deep)", 
        position: "relative", 
        overflow: "hidden",
        textAlign: "center",
        display: "block"
      }}>
        <div className="hero-bg-grid"></div>
        <div className="hero-orb-1" style={{opacity: 0.5}}></div>
        <div className="hero-orb-2" style={{opacity: 0.4}}></div>
        
        <div className="container" style={{position: "relative", zIndex: 3}}>
          <div className="fade-up" style={{
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px", 
            fontSize: "13px", 
            fontWeight: "700", 
            color: "var(--navy)", 
            marginBottom: "32px",
            background: "rgba(3, 78, 162, 0.05)",
            padding: "8px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(3, 78, 162, 0.1)"
          }}>
            <Link href="/" style={{color: "inherit", textDecoration: "none"}}>Home</Link>
            <span style={{opacity: 0.4}}>/</span>
            <span style={{color: "var(--blue-dark)"}}>Operational Standards</span>
          </div>
          
          <h1 className="fade-up" style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)", 
            fontWeight: "800",
            marginBottom: "24px",
            letterSpacing: "-2px",
            color: "var(--navy-dark)",
            lineHeight: "1.1"
          }}>
            Terms of <span style={{color: "var(--green)"}}>Service</span>
          </h1>
          
          <p className="fade-up" style={{
            margin: "0 auto",
            maxWidth: "700px",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "var(--text-body)",
            fontWeight: "500"
          }}>
            Building mutual trust through clear, professionally structured operational guidelines that reflect our enterprise commitment to excellence.
          </p>
        </div>
      </div>

      <section style={{padding: "100px 0", backgroundColor: "var(--bg-navy)"}}>
        <div className="container">
          <div style={{
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", 
            gap: "32px",
            alignItems: "stretch"
          }}>
            {sections.map((s, idx) => (
              <div key={idx} className="fade-up" style={{
                background: "var(--bg-card)",
                padding: "40px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(15, 23, 42, 0.04)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "var(--blue)";
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.04)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
              }}
              >
                <div style={{
                  width: "60px", 
                  height: "60px", 
                  background: "rgba(127, 180, 94, 0.06)", 
                  borderRadius: "16px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "var(--green)"
                }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{fontSize: "22px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "16px", fontFamily: "var(--font-heading)"}}>{s.title}</h3>
                  <p style={{fontSize: "16px", lineHeight: "1.8", color: "var(--text-body)", opacity: 0.85}}>{s.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="fade-up" style={{marginTop: "80px", textAlign: "center", padding: "60px 40px", background: "rgba(15, 23, 42, 0.02)", borderRadius: "var(--radius-xl)", border: "1px dashed rgba(15, 23, 42, 0.1)"}}>
            <p style={{marginBottom: "12px", fontSize: "16px", fontWeight: "600", color: "var(--navy-dark)"}}>Last updated: April 28, 2026</p>
            <p style={{fontSize: "14px", color: "var(--text-muted)"}}>Professional engagement is governed by these operational standards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
