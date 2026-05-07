'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import IntroAnimation from '../components/ui/scroll-morph-hero';
import styles from './page.module.css';

const services = [
  { num: '01', title: 'Social Media Marketing', desc: 'Engaging content and strategies to grow your audience and build community.', icon: '◆' },
  { num: '02', title: 'Brand Marketing', desc: 'Positioning, identity, and messaging that makes your brand impossible to ignore.', icon: '▲' },
  { num: '03', title: 'Ad Shooting', desc: 'High-quality commercial production that captures attention and drives action.', icon: '●' },
  { num: '04', title: 'Influencer Marketing', desc: 'Connecting your brand with the right voices to amplify your message.', icon: '■' },
  { num: '05', title: 'Brochure, Cards & Designing', desc: 'Stunning visual assets, print collateral, and comprehensive graphic design.', icon: '◈' },
  { num: '06', title: 'Product Shoots', desc: 'Professional photography that highlights the best features of your products.', icon: '◉' },
  { num: '07', title: 'Marketing', desc: 'Data-backed strategies and comprehensive campaigns to scale your business.', icon: '▣' },
  { num: '08', title: 'Web Development', desc: 'Custom, high-performance websites that serve as your digital storefront.', icon: '▼' },
];

const works = [
  { slug: 'nova', label: 'NOVA', gradient: 'linear-gradient(135deg, #2C3E50, #3D5166)', tag: 'Brand Identity · 2025', name: 'Nova Fintech — Full brand overhaul' },
  { slug: 'greenleaf', label: 'GROW', gradient: 'linear-gradient(135deg, #8B9A6D, #6B7A4D)', tag: 'Digital Campaign · 2025', name: 'GreenLeaf Organics — Launch campaign' },
  { slug: 'pulse', label: 'PULSE', gradient: 'linear-gradient(135deg, #D4836B, #C06E55)', tag: 'Social Strategy · 2024', name: 'Pulse Studios — Social growth 0→100k' },
];

const stats = [
  { num: '80+', label: 'Brands Launched' },
  { num: '4x', label: 'Avg. ROAS' },
  { num: '6yr', label: 'In the Game' },
  { num: '12', label: 'Awards Won' },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef}>
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
        <IntroAnimation />
      </div>



      {/* SERVICES PREVIEW */}
      <section className={styles.services}>
        <div className={`${styles.sectionHead} reveal`}>
          <div className={styles.sectionLabel}>What We Do</div>
          <h2 className={styles.sectionTitle}>Our Services</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <div key={s.num} className={`${styles.serviceCard} reveal reveal-delay-${i + 1}`}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <div className={styles.serviceNum}>{s.num}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.sectionAction} reveal`}>
          <Link href="/services" className={styles.btnOutline}>View All Services →</Link>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className={styles.workSection}>
        <div className={`${styles.sectionHead} reveal`}>
          <div className={styles.sectionLabel}>Portfolio</div>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
        </div>
        <div className={styles.workGrid}>
          {works.map((w, i) => (
            <Link href="/work" key={w.slug} className={`${styles.workCard} reveal reveal-delay-${i + 1}`}>
              <div className={styles.workThumb} style={{ background: w.gradient }}>{w.label}</div>
              <div className={styles.workInfo}>
                <div className={styles.workTag}>{w.tag}</div>
                <div className={styles.workName}>{w.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className={`${styles.sectionAction} reveal`}>
          <Link href="/work" className={styles.btnOutline}>View All Work →</Link>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        {stats.map((s, i) => (
          <div key={s.label} className={`${styles.stat} reveal reveal-delay-${i + 1}`}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="reveal">
          <h2 className={styles.ctaTitle}>Ready to play<br />your best hand?</h2>
          <p className={styles.ctaSub}>Let&apos;s build something unforgettable together.</p>
        </div>
        <Link href="/contact" className={`${styles.btnDark} reveal reveal-delay-2`}>Start a Project →</Link>
      </section>

      {/* PARTNERS */}
      <section className={styles.partnersSection}>
        <div className={styles.partnerHead}>Our Partners</div>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <span className={styles.partnerLabel}>Tech Partner</span>
            <span className={styles.partnerName}>RyzenTech</span>
          </div>
          <div className={styles.partnerCard}>
            <span className={styles.partnerLabel}>Media Partner</span>
            <span className={styles.partnerName}>Pixellence Studio</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
