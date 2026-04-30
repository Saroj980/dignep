"use client";
import React, { useEffect } from 'react';
import { blogs } from '@/data/blogs';
import { BlogCard } from '@/components/BlogComponents';

export default function BlogListingPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: '#fff' }}>
      <div className="page active" id="page-blog">
        
        {/* ── 1. BLOG HERO ── */}
        <section className="sp-hero" style={{ background: 'var(--bg-navy)' }}>
          <div className="sp-hero-bg-grid" />
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag why-tag mb-16" style={{ margin: '0 auto 24px' }}>DigNep Perspectives</span>
            <h1 className="sp-hero-title">
              Insights on <span className="highlight">Infrastructure</span><br />
              and Global IT Standards.
            </h1>
            <p className="sp-hero-desc" style={{ margin: '0 auto' }}>
              Deep dives into networking protocols, cybersecurity threats, AI implementation, and the future of enterprise data hubs.
            </p>
          </div>
        </section>

        {/* ── 2. BLOG GRID ── */}
        <section style={{ padding: '80px 0 140px', background: 'var(--white)' }}>
          <div className="container">
            <div className="grid-3-cols">
              {blogs.map((blog, i) => (
                <div key={i} className="fade-up">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
