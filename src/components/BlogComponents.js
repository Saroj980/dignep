"use client";
import React from 'react';
import Link from 'next/link';

export const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card" style={{ 
      background: '#fff', 
      borderRadius: '24px', 
      overflow: 'hidden', 
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          background: 'rgba(255,255,255,0.9)', 
          padding: '6px 16px', 
          borderRadius: '100px', 
          fontSize: '11px', 
          fontWeight: '800', 
          color: 'var(--blue)',
          textTransform: 'uppercase'
        }}>
          {blog.category}
        </div>
      </div>
      <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px', fontWeight: '600' }}>
          {blog.date} • {blog.readTime}
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#034EA2', marginBottom: '16px', lineHeight: '1.4' }}>
          {blog.title}
        </h3>
        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
          {blog.excerpt}
        </p>
        <Link href={`/blog/${blog.slug}`} style={{ 
          color: 'var(--blue)', 
          fontWeight: '700', 
          fontSize: '14px', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          Read Full Article →
        </Link>
      </div>
    </div>
  );
};

export const RelatedBlogs = ({ blogs, serviceName }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <span style={{ color: 'var(--blue)', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>Insights & Resources</span>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#034EA2', marginTop: '10px' }}>
              Latest from our <span style={{ color: 'var(--blue)' }}>{serviceName}</span> experts
            </h2>
          </div>
          <Link href="/blog" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '12px', background: '#fff' }}>
            View All Blogs
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {blogs.map((blog, i) => (
            <div key={i} className="fade-up">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
