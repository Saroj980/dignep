"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ServicePageTemplate({
  tag, tagColor = 'why-tag',
  headline, headlineAccent, accentColor = 'highlight',
  heroDesc, heroImg, heroImgAlt,
  metrics,
  subServices,
  benefits,
  processSteps,
  relatedBlogs,
  ctaHeadline, ctaAccent, ctaDesc, ctaBtn, ctaBtnHref = '/contact',
  pageId,
}) {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <div className="page active" id={pageId}>

        {/* ── HERO ── */}
        <div className="sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="sp-hero-orb" />
          <div className="container sp-hero-inner">
            <div className="sp-hero-text fade-up">
              <span className={`section-tag ${tagColor} mb-16`}>{tag}</span>
              <h1 className="sp-hero-title">
                {headline}<br />
                <span className={accentColor}>{headlineAccent}</span>
              </h1>
              <p className="sp-hero-desc">{heroDesc}</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Get Free Consultation →</Link>
                <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
              </div>
            </div>
            <div className="sp-hero-visual fade-up">
              <div className="sp-hero-img-frame">
                <img src={heroImg} alt={heroImgAlt} className="sp-hero-img" />
                <div className="sp-hero-img-overlay" />
              </div>
            </div>
          </div>
        </div>

        {/* ── METRICS BAR ── */}
        {metrics && (
          <div className="sp-metrics-bar">
            <div className="container sp-metrics-inner">
              {metrics.map((m, i) => (
                <div key={i} className="sp-metric">
                  <div className="sp-metric-num">{m.num}<span>{m.suffix}</span></div>
                  <div className="sp-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SUB-SERVICES (alternating rows) ── */}
        {subServices && (
          <section style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
              <div className="text-center mb-16">
                <span className="section-tag">What's Included</span>
              </div>
              <h2 className="section-title text-center centered-max-width">
                Comprehensive <span className="accent">Solutions</span> Under One Roof
              </h2>
              <p className="section-subtitle text-center centered-margin sp-section-gap" />

              <div className="services-full">
                {subServices.map((svc, i) => (
                  <div key={i} className={`service-detail-row fade-up${i % 2 !== 0 ? ' reverse' : ''}`}>
                    <div className="service-detail-content">
                      <span className="tag">{svc.tag}</span>
                      <h2>{svc.title}</h2>
                      <p>{svc.desc}</p>
                      <ul className="service-features">
                        {svc.features.map((f, fi) => <li key={fi}>{f}</li>)}
                      </ul>
                    </div>
                    <div className="service-visual">
                      <img src={svc.img} alt={svc.title} className="service-img" style={{ aspectRatio: '4/3' }} />
                      <div className="service-visual-overlay">
                        <h3 style={{ color: 'white' }}>{svc.imgLabel}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BENEFITS ── */}
        {benefits && (
          <section className="why-section">
            <div className="container">
              <div className="why-inner">
                <div className="why-left">
                  <span className={`section-tag ${tagColor} mb-16`}>Key Benefits</span>
                  <h2 className="section-title why-title">
                    Why Choose DigNep for <span className="highlight">{benefits.title}</span>
                  </h2>
                  <p className="section-subtitle">{benefits.intro}</p>
                  <div className="why-features">
                    {benefits.items.map((b, i) => (
                      <div key={i} className="why-feature fade-up">
                        <div className="why-feature-icon">{b.icon}</div>
                        <div className="why-feature-text">
                          <h4>{b.title}</h4>
                          <p>{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="why-right">
                  {benefits.stats.map((s, i) => (
                    <div key={i} className="metric-card fade-up">
                      <div className="metric-num">{s.num}<span>{s.suffix}</span></div>
                      <div className="metric-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── PROCESS STEPS ── */}
        {processSteps && (
          <section className="process-section">
            <div className="container">
              <div className="text-center mb-16">
                <span className="section-tag">Our Approach</span>
              </div>
              <h2 className="section-title text-center" style={{ maxWidth: '520px', margin: '0 auto 12px' }}>
                How We <span className="accent">Deliver</span> This Service
              </h2>
              <p className="section-subtitle text-center" style={{ margin: '0 auto' }} />
              <div className="process-steps">
                {processSteps.map((step, i) => (
                  <div key={i} className="process-step fade-up">
                    <div className="step-num">{i + 1}</div>
                    <h3>{step.icon} {step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED BLOGS ── */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="sp-blogs-section">
            <div className="container">
              <div className="text-center mb-16">
                <span className={`section-tag ${tagColor}`}>Insights & Resources</span>
              </div>
              <h2 className="section-title text-center centered-max-width">
                Related <span className="accent">Expert Articles</span>
              </h2>
              <p className="section-subtitle text-center centered-margin" style={{ marginBottom: '48px' }}>
                Stay ahead with expert insights, industry trends, and practical guides from the DigNep team.
              </p>
              <div className="sp-blog-grid">
                {relatedBlogs.map((blog, i) => (
                  <Link key={i} href={blog.href} className="sp-blog-card fade-up">
                    <div className="sp-blog-img-wrap">
                      <div className="sp-blog-img-placeholder" style={{ background: blog.gradient }}>
                        <span className="sp-blog-icon">{blog.icon}</span>
                      </div>
                      <span className="sp-blog-category">{blog.category}</span>
                    </div>
                    <div className="sp-blog-body">
                      <div className="sp-blog-meta">
                        <span className="sp-blog-date">{blog.date}</span>
                        <span className="sp-blog-read">{blog.readTime} min read</span>
                      </div>
                      <h3 className="sp-blog-title">{blog.title}</h3>
                      <p className="sp-blog-excerpt">{blog.excerpt}</p>
                      <span className="sp-blog-link">Read Article →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>{ctaHeadline} <span>{ctaAccent}</span></h2>
              <p>{ctaDesc}</p>
              <div className="cta-actions">
                <Link href={ctaBtnHref} className="btn-primary">{ctaBtn} →</Link>
                <Link href="/contact" className="btn-secondary">✉️ Email Our Team</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
