"use client";
import React, { useEffect, useState } from 'react';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }, []);

  const faqs = [
    {
      q: "Do you serve clients globally?",
      a: "Yes, DigNep provides global IT infrastructure and networking solutions. While our headquarters are in Nepal, our team has the expertise to manage projects, remote deployments, and consulting for enterprise clients across international markets."
    },
    {
      q: "How quickly can you respond to a network emergency?",
      a: "Emergency response is our priority. For clients on our managed support plans, we offer a 1-hour response guarantee for critical network failures. Our Network Operations Center (NOC) operates 24/7 to monitor and resolve issues heartbeat-to-heartbeat."
    },
    {
      q: "What is the cost of a typical network setup?",
      a: "The cost depends entirely on the scope, scale, and complexity of your requirements. We offer competitive pricing starting from basic office setups to high-density enterprise data centers. Please contact us for a detailed, no-obligation quote tailored to your specific needs."
    },
    {
      q: "Do you provide on-site training for corporate teams?",
      a: "Yes, we specialize in high-impact corporate training for Networking (Cisco, MikroTik), Cybersecurity, and AI. We can deliver training at your premises or virtually, customized to your team's current skill levels and organizational goals."
    }
  ];

  return (
    <main>
      <div className="page active" id="page-contact">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-tag" style={{background: "rgba(127,180,94,0.12)", color: "var(--green)", marginBottom: "16px", display: "inline-block"}}>Contact Us</span>
              <h1>Let's Build Something<br /><span style={{color: "var(--green)"}}>Great Together</span></h1>
              <p>Get in touch with our team for a free consultation, project quote, or any IT-related inquiry. We serve clients across global markets.</p>
            </div>
          </div>
        </div>

        <section style={{background: "var(--bg-navy)"}}>
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3 style={{color: "var(--navy-dark)"}}>Get In Touch</h3>
                <p>Our team of IT experts is ready to help. Reach out through any of the channels below, and we'll respond within 24 hours.</p>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="contact-detail-text">
                    <label>Our Office</label>
                    <span style={{color: "var(--navy-dark)"}}>Dhangadhi -04, Nepal</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="contact-detail-text">
                    <label>Phone / WhatsApp</label>
                    <a href="tel:9828031562" style={{color: "var(--blue)"}}>9828031562</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className="contact-detail-text">
                    <label>Email Address</label>
                    <a href="mailto:dignepaltechnologies@gmail.com" style={{color: "var(--blue)"}}>dignepaltechnologies@gmail.com</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">🕒</div>
                  <div className="contact-detail-text">
                    <label>Business Hours</label>
                    <span style={{color: "var(--navy-dark)"}}>Sunday – Friday: 9:00 AM – 6:00 PM</span>
                    <span style={{color: "var(--text-muted)", fontSize: "13px"}}>Emergency support available 24/7</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrap" style={{background: "var(--bg-card)", borderColor: "rgba(15,23,42,0.06)"}}>
                <h3 style={{color: "var(--navy-dark)"}}>Send Us a Message</h3>

                <div id="contactForm">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fname" style={{color: "var(--navy-dark)"}}>First Name *</label>
                      <input type="text" id="fname" placeholder="Ram" style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname" style={{color: "var(--navy-dark)"}}>Last Name *</label>
                      <input type="text" id="lname" placeholder="Shrestha" style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" style={{color: "var(--navy-dark)"}}>Email Address *</label>
                    <input type="email" id="email" placeholder="ram@example.com" style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" style={{color: "var(--navy-dark)"}}>Phone Number</label>
                    <input type="tel" id="phone" placeholder="9828031562" style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" style={{color: "var(--navy-dark)"}}>Service Interested In</label>
                    <select id="service" style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}}>
                      <option value="" style={{background: "var(--white)"}}>Select a service...</option>
                      <option style={{background: "var(--white)"}}>Data Centre Design & Engineering</option>
                      <option style={{background: "var(--white)"}}>Server Hub Maintenance & Ops</option>
                      <option style={{background: "var(--white)"}}>Cybersecurity</option>
                      <option style={{background: "var(--white)"}}>AI Solutions</option>
                      <option style={{background: "var(--white)"}}>Web Design & Development</option>
                      <option style={{background: "var(--white)"}}>Mobile App Development</option>
                      <option style={{background: "var(--white)"}}>Network Configuration & Maintenance</option>
                      <option style={{background: "var(--white)"}}>IT Training & Certification</option>
                      <option style={{background: "var(--white)"}}>IoT Services</option>
                      <option style={{background: "var(--white)"}}>Software Development</option>
                      <option style={{background: "var(--white)"}}>IT Consultancy</option>
                      <option style={{background: "var(--white)"}}>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" style={{color: "var(--navy-dark)"}}>Your Message *</label>
                    <textarea id="message" placeholder="Tell us about your project, requirements, or questions..." style={{background: "rgba(15, 23, 42, 0.02)", border: "1px solid rgba(15, 23, 42, 0.08)", color: "var(--navy-dark)"}}></textarea>
                  </div>

                  <button className="form-submit" onClick={() => {}}>
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{background: "var(--bg-navy)", padding: "80px 0"}}>
          <div className="container">
            <div style={{textAlign: "center", marginBottom: "16px"}}>
              <span className="section-tag">FAQ</span>
            </div>
            <h2 className="section-title" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto 12px"}}>
              Frequently Asked <span className="accent">Questions</span>
            </h2>

            <div style={{maxWidth: "800px", margin: "48px auto 0", display: "flex", flexDirection: "column", gap: "16px"}} id="faqList">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item" 
                  style={{
                    background: "var(--bg-card)", 
                    border: "1px solid rgba(255,255,255,0.1)", 
                    borderRadius: "var(--radius-md)", 
                    overflow: "hidden",
                    transition: "var(--transition)"
                  }}
                >
                  <div 
                    className="faq-q" 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    style={{
                      padding: "20px 24px", 
                      fontFamily: "var(--font-heading)", 
                      fontWeight: "700", 
                      fontSize: "15px", 
                      color: activeFaq === index ? "var(--blue)" : "var(--navy-dark)", 
                      cursor: "pointer", 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center"
                    }}
                  >
                    {faq.q}
                    <span style={{
                      fontSize: "20px", 
                      transition: "transform 0.3s ease",
                      transform: activeFaq === index ? "rotate(45deg)" : "rotate(0deg)"
                    }} className="faq-icon">+</span>
                  </div>
                  <div 
                    className="faq-a" 
                    style={{
                      padding: activeFaq === index ? "0 24px 24px" : "0 24px", 
                      fontSize: "14px", 
                      color: "var(--text-body)", 
                      lineHeight: "1.7", 
                      maxHeight: activeFaq === index ? "200px" : "0",
                      opacity: activeFaq === index ? "1" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
