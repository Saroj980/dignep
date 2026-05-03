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
                        <h4>Digital Solution & Cybersecurity</h4>
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
                            <Link href="/services/social-media-marketing">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Social Media Marketing</span>
                                <span className="mega-desc">Targeted digital visibility campaigns.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/seo">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">SEO & Growth</span>
                                <span className="mega-desc">Rank higher and drive qualified leads.</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-col">
                        <h4>Software & Automation</h4>
                        <ul>
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
                          <li>
                            <Link href="/services/software-development">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Custom Software Development</span>
                                <span className="mega-desc">Robust bespoke software solutions.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/automation">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">DevOps & Automation</span>
                                <span className="mega-desc">Optimized CI/CD & cloud workflows.</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/mobile-app">
                              <span className="mega-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                              </span>
                              <div className="mega-text">
                                <span className="mega-title">Mobile App Development</span>
                                <span className="mega-desc">High performance native & hybrid apps.</span>
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
            <div className="nav-item-dropdown relative">
              <Link href="/about" className={isActive('/about') || pathname.startsWith('/about') ? 'active' : ''}>
                About <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </Link>
              <div className="about-dropdown">
                <div className="mega-menu-inner">
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>
                      <Link href="/about/company" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onClick={() => setMenuOpen(false)}>
                        <span className="mega-icon-box" style={{ width: '32px', height: '32px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </span>
                        <div className="mega-text">
                          <span className="mega-title" style={{ fontSize: '13px', margin: 0 }}>About Company</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/mission-vision" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onClick={() => setMenuOpen(false)}>
                        <span className="mega-icon-box" style={{ width: '32px', height: '32px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </span>
                        <div className="mega-text">
                          <span className="mega-title" style={{ fontSize: '13px', margin: 0 }}>Mission & Vision</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/team" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onClick={() => setMenuOpen(false)}>
                        <span className="mega-icon-box" style={{ width: '32px', height: '32px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </span>
                        <div className="mega-text">
                          <span className="mega-title" style={{ fontSize: '13px', margin: 0 }}>Our Team</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/career" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onClick={() => setMenuOpen(false)}>
                        <span className="mega-icon-box" style={{ width: '32px', height: '32px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <div className="mega-text">
                          <span className="mega-title" style={{ fontSize: '13px', margin: 0 }}>Careers</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                 <Link href="/services/social-media-marketing" onClick={() => setMenuOpen(false)}>Marketing</Link>
                 <Link href="/services/seo" onClick={() => setMenuOpen(false)}>SEO & Growth</Link>
                 <Link href="/services/software" onClick={() => setMenuOpen(false)}>Software Engineering</Link>
                 <Link href="/services/software-development" onClick={() => setMenuOpen(false)}>Software Development</Link>
                 <Link href="/services/automation" onClick={() => setMenuOpen(false)}>DevOps & Automation</Link>
                 <Link href="/services/mobile-app" onClick={() => setMenuOpen(false)}>Mobile App Development</Link>
               </div>
            </div>
            <div className="mobile-dropdown-section">
               <span className="mobile-link-header">About Us</span>
               <div className="mobile-sublinks">
                 <Link href="/about/company" onClick={() => setMenuOpen(false)}>About Company</Link>
                 <Link href="/about/mission-vision" onClick={() => setMenuOpen(false)}>Mission & Vision</Link>
                 <Link href="/about/team" onClick={() => setMenuOpen(false)}>Our Team</Link>
                 <Link href="/about/career" onClick={() => setMenuOpen(false)}>Careers</Link>
               </div>
            </div>
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
