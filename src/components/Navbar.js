"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vanished, setVanished] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVanished(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('#footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav id="navbar" className={vanished ? 'vanished' : ''}>
        <div className="nav-inner">
          <div className="nav-links-left">
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <div className="nav-item-dropdown">
              <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-menu-content">
                    <div className="mega-cols">
                      <div className="mega-col">
                        <h4>Infrastructure</h4>
                        <ul>
                          <li>
                            <Link href="/services/networking">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="18" y1="18" x2="18" y2="18"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Networking & IT</span>
                                <span className="mega-desc">Enterprise-grade network architecture.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/data-center">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><rect width="8" height="8" x="13" y="3" rx="2"/><rect width="8" height="8" x="3" y="13" rx="2"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Data Center Services</span>
                                <span className="mega-desc">Tier-certified facility management.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/security">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Enterprise Security</span>
                                <span className="mega-desc">Advanced SOC & threat protection.</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-col">
                        <h4>Digital Solutions</h4>
                        <ul>
                          <li>
                            <Link href="/services/ai">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">AI & Machine Learning</span>
                                <span className="mega-desc">Predictive modeling & automation.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/cloud">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.6 0 1.1-.4 1.3-.9.2-.6 0-1.1-.4-1.3l-.9-.2c-.1-.7-.5-1.4-1-1.9-.5-.5-1.2-.9-1.9-1l-.2-.9c-.2-.4-.7-.6-1.3-.4-.5.2-.9.7-.9 1.3v.9c-.7.1-1.4.5-1.9 1-.5.5-.9 1.2-1 1.9l-.9.2c-.4.2-.6.7-.4 1.3.2.5.7.9 1.3.9h1v1c0 .6.4 1.1.9 1.3.6.2 1.1 0 1.3-.4l.2-.9c.7-.1 1.4-.5 1.9-1 .5-.5.9-1.2 1-1.9l.9-.2c.4-.2.6-.7.4-1.3-.2-.5-.7-.9-1.3-.9h-1V17.5c0-.6-.4-1.1-.9-1.3-.6-.2-1.1 0-1.3.4l-.2.9c-.7.1-1.4.5-1.9 1-.5.5-.9 1.2-1 1.9l-.9.2c-.4.2-.6.7-.4 1.3.2.5.7.9 1.3.9h1v1c0 .6.4 1.1.9 1.3.6.2 1.1 0 1.3-.4l.2-.9c.7-.1 1.4-.5 1.9-1 .5-.5.9-1.2 1-1.9l.9-.2z"/><path d="M12 12c-3.3 0-6 2.7-6 6"/><path d="M12 6c3.3 0 6 2.7 6 6"/><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Cloud Computing</span>
                                <span className="mega-desc">Scalable multi-cloud deployments.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/software">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Software Engineering</span>
                                <span className="mega-desc">Custom enterprise application dev.</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          </div>

          <Link href="/" className="nav-logo">
            <img src="/dignep-logo.png" alt="DigNep Logo" className="site-logo" />
          </Link>

          <div className="nav-links-right">
            <Link href="/training" className={isActive('/training') ? 'active' : ''}>Training</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <div className="nav-cta-wrap">
               <Link href="/contact" className="nav-cta">Start a Project</Link>
            </div>
          </div>

          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <img src="/dignep-logo.png" alt="DigNep Logo" className="mobile-logo" />
            <div className="close-menu" onClick={() => setMenuOpen(false)}>✕</div>
          </div>
          <div className="mobile-links">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="mobile-dropdown-section">
               <span className="mobile-link-header">Services</span>
               <div className="mobile-sublinks">
                 <Link href="/services/networking" onClick={() => setMenuOpen(false)}>Networking & IT</Link>
                 <Link href="/services/data-center" onClick={() => setMenuOpen(false)}>Data Center</Link>
                 <Link href="/services/security" onClick={() => setMenuOpen(false)}>Cyber Security</Link>
                 <Link href="/services/ai" onClick={() => setMenuOpen(false)}>AI & ML</Link>
                 <Link href="/services/cloud" onClick={() => setMenuOpen(false)}>Cloud Computing</Link>
                 <Link href="/services/software" onClick={() => setMenuOpen(false)}>Software Engineering</Link>
               </div>
            </div>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/training" onClick={() => setMenuOpen(false)}>Training</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
          <div className="mobile-menu-footer">
            <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Start a Project →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
