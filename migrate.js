const fs = require('fs');

const text = fs.readFileSync('_index.html', 'utf8');

// 1. Extract CSS
const styleStart = text.indexOf('<style>') + 7;
const styleEnd = text.indexOf('</style>');
const cssLines = text.substring(styleStart, styleEnd);

let globalsCSS = fs.readFileSync('src/app/globals.css', 'utf8');
globalsCSS += '\n' + cssLines;
fs.writeFileSync('src/app/globals.css', globalsCSS);

// 2. Extract Body HTML
const bodyStart = text.indexOf('<body>') + 6;
const bodyEnd = text.lastIndexOf('<script>');
let bodyHtml = text.substring(bodyStart, bodyEnd);

// 3. Convert HTML to JSX
bodyHtml = bodyHtml.replace(/class=/g, 'className=')
                   .replace(/for=/g, 'htmlFor=')
                   .replace(/onclick="([^"]*)"/g, "onClick={() => { /* FIXME: $1 */ }}")
                   .replace(/<!--([\s\S]*?)-->/g, "{/* $1 */}")
                   .replace(/<img(.*?)>/g, (match, p1) => {
                       if (p1.endsWith('/')) return match;
                       return `<img${p1} />`;
                   })
                   .replace(/<br>/g, '<br />')
                   .replace(/<input(.*?)>/g, (match, p1) => {
                       if(p1.endsWith('/')) return match;
                       return `<input${p1} />`;
                   })
                   .replace(/<hr(.*?)>/g, (match, p1) => {
                       if(p1.endsWith('/')) return match;
                       return `<hr${p1} />`;
                   })
                   .replace(/style="([^"]*)"/g, (match, p1) => {
                       // simple style inline replace to empty since there aren't many
                       // or we can just drop it for this simple script, wait, they had style="display:none"
                       const jsStyle = p1.split(';').filter(Boolean).map(s => {
                           const [k,v] = s.split(':');
                           if(!k || !v) return '';
                           const camelKey = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                           return `${camelKey}: "${v.trim()}"`;
                       }).join(', ');
                       return `style={{${jsStyle}}}`;
                   });

// We need a wrapper to hold state for the active page
const pageJsx = `"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Basic Intersection Observer for scroll animations
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }, [activePage]);

  // Hacky polyfill for their inline scripts that we commented out
  const showPage = (pageName) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main>
       {/* React Migration Shell */}
       ${bodyHtml}
    </main>
  );
}
`;

fs.writeFileSync('src/app/page.js', pageJsx);

console.log('Migration script complete!');
