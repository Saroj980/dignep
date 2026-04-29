"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

// PROFESSIONAL VECTOR ICONS
const IconData = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const IconCookie = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
);
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const IconEdit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function PrivacyPage() {
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
      icon: <IconData />,
      title: "1. Information Collection",
      content: "We collect information that you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, and phone number."
    },
    {
      icon: <IconSettings />,
      title: "2. Use of Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects and inquiries, and to send you updates."
    },
    {
      icon: <IconCookie />,
      title: "3. Cookies and Tracking",
      content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings if preferred."
    },
    {
      icon: <IconShield />,
      title: "4. Data Security",
      content: "We take reasonable measures to protect your personal information from unauthorized access. However, no internet transmission is ever fully secure."
    },
    {
      icon: <IconLink />,
      title: "5. Third-Party Links",
      content: "Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and recommend reading their policies."
    },
    {
      icon: <IconEdit />,
      title: "6. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 'Last updated' date for transparency."
    },
    {
      icon: <IconEmail />,
      title: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact our data team at dignepaltechnologies@gmail.com."
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
            <span style={{color: "var(--green-dark)"}}>Privacy Policy</span>
          </div>
          
          <h1 className="fade-up" style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)", 
            fontWeight: "800",
            marginBottom: "24px",
            letterSpacing: "-2px",
            color: "var(--navy-dark)",
            lineHeight: "1.1"
          }}>
            Privacy <span style={{color: "var(--green)"}}>Policy</span>
          </h1>
          
          <p className="fade-up" style={{
            margin: "0 auto",
            maxWidth: "700px",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "var(--text-body)",
            fontWeight: "500"
          }}>
            Transparent and professional guidelines on how we handle your digital information across our global infrastructure and enterprise operations.
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
                  background: "rgba(39, 127, 196, 0.06)", 
                  borderRadius: "16px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "var(--blue)"
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
            <p style={{fontSize: "14px", color: "var(--text-muted)"}}>Agreement to our privacy standards is fundamental to our professional engagement.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
