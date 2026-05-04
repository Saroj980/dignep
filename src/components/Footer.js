"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-intro">
        <h2 className="footer-main-title">Building Global <span className="highlight-blue">Infrastructure</span></h2>
        <p className="footer-subtext">Premier networking and IT solutions company delivering excellence across borders.</p>
      </div>

      <div className="footer-links-grid">
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/networking">Networking & IT</a></li>
            <li><a href="/services/security">Cyber Security</a></li>
            <li><a href="/services/soc-noc">SOC & NOC Services</a></li>
            <li><a href="/services/ai">AI & Machine Learning</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About DigNep</a></li>
            <li><a href="/training">Professional Training</a></li>
            <li><a href="/contact">Work With Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Latest Insights</a></li>
            <li><a href="/blog">Success Stories</a></li>
            <li><a href="/services#faq">Support Center</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <div className="social-links-minimal">
               <a href="#" aria-label="LinkedIn">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
               </a>
               <a href="#" aria-label="Facebook">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="footer-huge-logo-wrap">
        <img src="/dignep-logo.png" alt="DigNep Logo" className="footer-huge-logo-img" />
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} DigNep Technologies. All rights reserved.</p>
          <div className="status-indicator">
            <span className="dot"></span> Digital Infrastructure: Optimized
          </div>
        </div>
      </div>
    </footer>

  );
}
