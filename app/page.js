'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  { num: '01', title: 'Brand Strategy', desc: 'Positioning, identity, and messaging that makes your brand impossible to ignore.', icon: '◆' },
  { num: '02', title: 'Digital Campaigns', desc: 'Performance-driven campaigns across paid, organic, and social channels.', icon: '▲' },
  { num: '03', title: 'Creative Direction', desc: 'Visuals, copy, and creative assets that stop the scroll and start conversations.', icon: '●' },
  { num: '04', title: 'Growth Marketing', desc: 'Data-backed strategies to acquire, retain, and scale your customer base.', icon: '■' },
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
      <section className={styles.hero}>
        <div className={styles.heroDecorations}>
          <span className={styles.spade1}>♠</span>
          <span className={styles.spade2}>♠</span>
          <span className={styles.diamond1}>◆</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Creative Marketing Agency
            </div>
            <h1 className={styles.heroTitle}>
              We Make<br />
              Brands{' '}
              <span className={styles.heroTitleAccent}>Unforgettable</span>
            </h1>
            <div className={styles.heroTagline}>
              <span className={styles.taglineDot}>♠</span>
              Shoot · Create · Elevate
            </div>
            <p className={styles.heroSub}>
              We craft brands that command attention and campaigns that convert. Bold strategy meets stunning creative.
            </p>
            <div className={styles.heroActions}>
              <Link href="/work" className={styles.btnPrimary}>See Our Work</Link>
              <Link href="/contact" className={styles.btnOutline}>Get In Touch</Link>
            </div>
            <div className={styles.heroBadges}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeNum}>80+</span>
                <span className={styles.badgeLabel}>Brands Launched</span>
              </div>
              <div className={styles.heroBadgeDivider} />
              <div className={styles.heroBadge}>
                <span className={styles.badgeNum}>4x</span>
                <span className={styles.badgeLabel}>Avg. ROAS</span>
              </div>
              <div className={styles.heroBadgeDivider} />
              <div className={styles.heroBadge}>
                <span className={styles.badgeNum}>12</span>
                <span className={styles.badgeLabel}>Awards Won</span>
              </div>
            </div>
          </div>
          <div className={styles.heroLogoWrap}>
            <img src="/logo.jpeg" alt="Ads and Aces" className={styles.heroLogo} />
          </div>
        </div>
      </section>

      {/* TICKER / MARQUEE */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[...Array(3)].flatMap((_, copy) =>
            ['Brand Strategy','Digital Campaigns','Creative Direction','Performance Marketing','Content Studio','Social Media'].map((t, i) => (
              <span key={`${copy}-${i}`}>{t}</span>
            ))
          )}
        </div>
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

      <Footer />
    </div>
  );
}
