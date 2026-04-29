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
        <section style={{ 
          padding: '200px 0 100px', 
          background: 'radial-gradient(circle at 50% -20%, #f0f9ff 0%, #ffffff 60%)',
          textAlign: 'center'
        }}>
          <div className="container">
            <span style={{ 
              color: 'var(--blue)', 
              fontWeight: '800', 
              fontSize: '13px', 
              letterSpacing: '3px', 
              textTransform: 'uppercase', 
              marginBottom: '24px', 
              display: 'block' 
            }}>DigNep Perspectives</span>
            <h1 style={{ 
              fontSize: 'clamp(3rem, 7vw, 5rem)', 
              fontWeight: '900', 
              color: '#034EA2', 
              lineHeight: '1', 
              marginBottom: '32px', 
              letterSpacing: '-2px' 
            }}>
              Insights on <span style={{ color: 'var(--blue)' }}>Infrastructure</span><br />
              and Global IT Standards.
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: '#64748b', 
              lineHeight: '1.7', 
              maxWidth: '700px', 
              margin: '0 auto' 
            }}>
              Deep dives into networking protocols, cybersecurity threats, AI implementation, and the future of enterprise data hubs.
            </p>
          </div>
        </section>

        {/* ── 2. BLOG GRID ── */}
        <section style={{ padding: '80px 0 140px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
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
