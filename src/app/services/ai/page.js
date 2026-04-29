"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RelatedBlogs } from '@/components/BlogComponents';
import { blogs } from '@/data/blogs';

// PROFESSIONAL VECTOR ICONS (Consistent with Theme)
const IconBrain = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54Z"/></svg>
);
const IconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconBot = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>
);
const IconData = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-1.8-1.4-3.3-3.2-3.5A5.5 5.5 0 0 0 7 12a4 4 0 0 0-3.5 6.5"/></svg>
);

export default function AIServicePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .fade-in-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{background: '#fff', color: '#034EA2'}}>
      <div className="page active" id="page-service-ai">
        
        {/* ── 1. SCHEMATIC HERO (MATCHES THEME) ── */}
        <section className="ai-hero" style={{ padding: '180px 0 100px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at top right, #f0f9ff 0%, #ffffff 50%)', borderBottom: '1px solid #e2e8f0' }}>
          <div className="ai-grid-bg" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#007A3D 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
              <div className="fade-up">
                <span style={{ color: '#007A3D', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', border: '1px solid #007A3D', padding: '4px 12px', borderRadius: '4px' }}>Neural Intelligence</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1', margin: '24px 0', color: '#034EA2' }}>
                  The Future is <span style={{ color: '#007A3D' }}>Autonomous</span><br />Intelligence.
                </h1>
                <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '500px', lineHeight: '1.6' }}>
                  We engineer production-grade machine learning systems that transform raw enterprise data into mission-critical predictive insights.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ background: '#034EA2', color: '#fff', borderRadius: '12px' }}>Build My AI Model →</Link>
                  <a href="#solutions" style={{ color: '#034EA2', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #cbd5e1' }}>Explore Solutions</a>
                </div>
              </div>
              <div className="fade-in-right ai-visual" style={{ position: 'relative' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                  <img src="/ai-data-hub.png" alt="AI Intelligence" style={{ width: '100%', borderRadius: '12px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#fff', border: '1px solid #007A3D', padding: '15px 25px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 10 }}>
                  <div style={{ fontSize: '10px', color: '#007A3D', fontWeight: '800' }}>INFERENCE: ACTIVE</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#034EA2' }}>99.9% Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TECHNICAL SPECIFICATIONS ── */}
        <div style={{ background: '#f8fafc', padding: '30px 0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
            {['PyTorch Ready', 'Edge Inference', 'Custom LLMs', 'Computer Vision', 'Anomaly Detection', 'TensorFlow Native'].map((spec, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b' }}>// {spec}</span>
            ))}
          </div>
        </div>

        {/* ── 3. AI PILLARS (Consistent with Service Theme) ── */}
        <section id="solutions" style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px', color: '#034EA2' }}>Building <span style={{ color: '#007A3D' }}>Moats</span> with Data Intelligence.</h2>
                <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                  Our AI solutions are not black boxes. We provide transparent, scalable intelligence frameworks that integrate directly into your existing infrastructure.
                </p>
                <div style={{ marginTop: '40px' }}>
                  {[
                    { t: 'Predictive Infrastructure', d: 'Forecast maintenance and bottlenecks with 95%+ precision.' },
                    { t: 'Enterprise Knowledge', d: 'Custom internal LLMs that understand your specific industry data.' },
                    { t: 'Cognitive Automation', d: 'Replacing manual workflows with self-correcting AI loops.' }
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '30px', borderLeft: '2px solid #007A3D', paddingLeft: '20px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: '#034EA2' }}>{item.t}</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="ai-capability-list">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    { i: <IconBrain />, t: 'Predictive Analytics', desc: 'Transform historical telemetry into proactive operational signals.' },
                    { i: <IconEye />, t: 'Computer Vision', desc: 'Automate visual inspection and security with real-time neural optic processing.' },
                    { i: <IconBot />, t: 'NLP Systems', desc: 'Secure, local deployment of Large Language Models for internal ops.' },
                    { i: <IconData />, t: 'Data Engineering', desc: 'Building the ingestion pipelines that feed your intelligence layer.' },
                    { i: <IconSearch />, t: 'Anomaly Detection', desc: 'Spot fraud or hardware failures before they escalate into outages.' },
                    { i: <IconCloud />, t: 'Edge AI Deployment', desc: 'Optimizing models to run locally on branch hardware with zero latency.' }
                  ].map((cap, i) => (
                    <div key={i} className="fade-up" style={{ background: '#fff', border: '1px solid #f1f5f9', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}>
                      <div style={{ color: '#007A3D', marginBottom: '16px' }}>{cap.i}</div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#034EA2' }}>{cap.t}</h3>
                      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. AI LIFECYCLE (MATCHES THEME) ── */}
        <section style={{ padding: '100px 0', background: '#f8fafc' }}>
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '60px', color: '#034EA2' }}>Intelligence <span style={{ color: '#007A3D' }}>Lifecycle</span></h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '25px', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 1 }}></div>
              {[
                { s: '01', t: 'Data Audit', d: 'Identifying & cleaning critical datasets.' },
                { s: '02', t: 'Model Training', d: 'Custom neural architecture development.' },
                { s: '03', t: 'Deployment', d: 'Cloud or local edge integration.' },
                { s: '04', t: 'Active Tuning', d: 'Continuous learning & bias correction.' }
              ].map((step, i) => (
                <div key={i} className="fade-up" style={{ width: '22%', position: 'relative', zIndex: 2 }}>
                  <div style={{ width: '50px', height: '50px', background: '#fff', border: '2px solid #007A3D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '900', color: '#007A3D', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{margin: '0 auto'}}>{step.s}</div>
                  </div>
                  <h4 className="text-center" style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#034EA2' }}>{step.t}</h4>
                  <p className="text-center" style={{ fontSize: '13px', color: '#64748b' }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. BRANDED CTA ── */}
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#034EA2', padding: '80px 40px', borderRadius: '40px', color: '#fff' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px' }}>Evolve Your <span style={{ color: 'var(--blue-light)' }}>Enterprise.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '18px' }}>
                The window for AI adoption is closing. Start building your intelligence moat today with DigNep.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: '#034EA2', padding: '18px 40px', fontSize: '18px', borderRadius: '12px' }}>Consult AI Architect →</Link>
            </div>
          </div>
        </section>

        {/* ── 6. RELATED BLOGS ── */}
        <RelatedBlogs 
          blogs={blogs.filter(b => b.service === 'ai')} 
          serviceName="AI Solutions" 
        />

      </div>
    </main>
  );
}
