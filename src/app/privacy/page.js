"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }, []);

  const sections = [
    {
      icon: "📊",
      title: "1. Information Collection",
      content: "We collect information that you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, and phone number."
    },
    {
      icon: "⚙️",
      title: "2. Use of Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects and inquiries, and to send you updates."
    },
    {
      icon: "🍪",
      title: "3. Cookies and Tracking",
      content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings if preferred."
    },
    {
      icon: "🔒",
      title: "4. Data Security",
      content: "We take reasonable measures to protect your personal information from unauthorized access. However, no internet transmission is ever fully secure."
    },
    {
      icon: "🔗",
      title: "5. Third-Party Links",
      content: "Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and recommend reading their policies."
    },
    {
      icon: "📝",
      title: "6. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 'Last updated' date for transparency."
    },
    {
      icon: "📧",
      title: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact our data team at dignepaltechnologies@gmail.com."
    }
  ];

  return (
    <main style={{backgroundColor: "var(--bg-navy)"}}>
      {/* Light Theme Hero - Mirrored from Homepage */}
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
                  fontSize: "28px"
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
