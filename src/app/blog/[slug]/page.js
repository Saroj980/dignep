"use client";
import React, { useEffect, useState } from 'react';
import { blogs } from '@/data/blogs';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BlogCard } from '@/components/BlogComponents';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const recentBlogs = blogs.filter(b => b.slug !== slug).slice(0, 3);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [blog]);

  if (!blog) return <div style={{ padding: '200px 0', textAlign: 'center' }}>Blog not found.</div>;

  return (
    <main style={{ background: '#fff', color: '#0f172a' }}>
      {/* ── CLEAN PROGRESS BAR (THEME GREEN) ── */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: `${scrollProgress}%`, 
        height: '4px', 
        background: '#007A3D', 
        zIndex: 2000, 
        transition: 'width 0.1s ease-out' 
      }}></div>

      <article>
        {/* ── 1. BRANDED HERO (NAVY BLUE AS PER PROJECT THEME) ── */}
        <section style={{ 
          padding: '220px 0 120px', 
          background: '#034EA2', 
          position: 'relative', 
          overflow: 'hidden'
        }}>
          {/* Subtle Project-themed Accents */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(255,255,255,0.05) 0%, transparent 60%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(to right, #007A3D, #EE2A35, #007A3D)' }}></div>
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(255, 255, 255, 0.03)', filter: 'blur(100px)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '950px' }}>
              <Link href="/blog" style={{ 
                color: '#fff', 
                fontWeight: '800', 
                textDecoration: 'none', 
                fontSize: '12px', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                display: 'inline-block',
                background: 'rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '6px',
                marginBottom: '32px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                ← Insight Archive
              </Link>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
                <span style={{ padding: '4px 12px', background: '#007A3D', color: '#fff', borderRadius: '4px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.category}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '700' }}>{blog.date}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>•</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '700' }}>{blog.readTime}</span>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                fontWeight: '900', 
                color: '#fff', 
                lineHeight: '1.1', 
                marginBottom: '48px', 
                letterSpacing: '-3px' 
              }}>{blog.title}</h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#034EA2' }}>DN</div>
                <div>
                  <div style={{ fontWeight: '800', color: '#fff', fontSize: '16px' }}>{blog.author}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineering Publication</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STRUCTURED CONTENT AREA ── */}
        <section style={{ padding: '100px 0 140px', background: '#fff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '80px' }}>
              
              {/* MAIN CONTENT */}
              <div className="fade-up">
                <div style={{ borderRadius: '32px', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 30px 60px rgba(3, 78, 162, 0.08)', border: '1px solid #f1f5f9' }}>
                  <img src={blog.img} alt={blog.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                
                <div 
                  className="blog-refined-content"
                  style={{ 
                    fontSize: '20px', 
                    lineHeight: '1.85', 
                    color: '#334155'
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }} 
                />

                {/* Consultation CTA (Themed) */}
                <div style={{ marginTop: '100px', padding: '64px', background: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ color: '#034EA2', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>Ready for Implementation?</div>
                  <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#034EA2', marginBottom: '20px' }}>Optimize your infrastructure with DigNep</h3>
                  <p style={{ color: '#64748b', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px', fontSize: '17px' }}>Our technical board provides deep-dive audits and deployment strategies for high-performance enterprise networks.</p>
                  <Link href="/contact" className="btn-primary" style={{ padding: '18px 45px', borderRadius: '12px', background: '#034EA2', color: '#fff' }}>Start Technical Audit →</Link>
                </div>
              </div>

              {/* SIDEBAR: BRAND CONSISTENT */}
              <aside style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                
                {/* Related Reads */}
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '900', color: '#034EA2', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px', borderBottom: '2px solid #007A3D', paddingBottom: '12px', display: 'inline-block' }}>Further Reading</h4>
                  <div style={{ display: 'grid', gap: '36px' }}>
                    {recentBlogs.map((r, i) => (
                      <Link key={i} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                        <div style={{ fontSize: '11px', fontWeight: '900', color: '#007A3D', textTransform: 'uppercase', marginBottom: '8px' }}>{r.category}</div>
                        <div style={{ fontSize: '17px', fontWeight: '800', color: '#034EA2', lineHeight: '1.4', transition: 'opacity 0.2s' }}>{r.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Box (Brand Navy) */}
                <div style={{ 
                  background: '#034EA2', 
                  padding: '48px 40px', 
                  borderRadius: '32px', 
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(3, 78, 162, 0.2)'
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#EE2A35' }}></div>
                  <h4 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '16px' }}>The DigNep Feed</h4>
                  <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '32px', lineHeight: '1.6' }}>Global infrastructure news and mission-critical engineering guides.</p>
                  <input type="email" placeholder="Work Email" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', marginBottom: '16px', fontWeight: '600' }} />
                  <button style={{ width: '100%', padding: '18px', background: '#fff', color: '#034EA2', border: 'none', borderRadius: '12px', fontWeight: '900', cursor: 'pointer' }}>Subscribe Now</button>
                </div>

                {/* Technical Help */}
                <div style={{ padding: '40px', border: '2px dashed #e2e8f0', borderRadius: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Need assistance with specialized networking or AI infrastructure?</div>
                  <Link href="/contact" style={{ color: '#007A3D', fontWeight: '900', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>Talk to an Expert →</Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ── 3. RECOMMENDED FEED ── */}
        <section style={{ padding: '120px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <div className="container">
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#034EA2', marginBottom: '80px', textAlign: 'center' }}>Explore <span style={{ color: '#007A3D' }}>More Insights.</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {recentBlogs.map((blog, i) => (
                <BlogCard key={i} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      </article>

      <style jsx global>{`
        .blog-refined-content h3 {
          font-size: 32px;
          font-weight: 900;
          color: #034EA2;
          margin: 64px 0 24px;
          letter-spacing: -1.5px;
        }
        .blog-refined-content p {
          margin-bottom: 28px;
        }
        .blog-refined-content ul {
          margin: 0 0 40px 24px;
        }
        .blog-refined-content li {
          margin-bottom: 16px;
        }
        .blog-refined-content strong {
          color: #034EA2;
          font-weight: 900;
        }
      `}</style>
    </main>
  );
}
