'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    num: '01', title: 'Brand Strategy',
    desc: 'We dig deep into your category, competitors, and customers to build a brand position that is genuinely ownable. Naming, messaging architecture, brand voice — the full blueprint.',
    items: ['Positioning & Messaging', 'Brand Architecture', 'Naming & Taglines', 'Tone of Voice', 'Competitive Audit'],
  },
  {
    num: '02', title: 'Creative Direction',
    desc: 'From visual identity to campaign concepts, we bring the creative ideas that make your brand impossible to forget. Strategy-led, design-obsessed.',
    items: ['Visual Identity Systems', 'Campaign Concepting', 'Art Direction', 'Brand Guidelines', 'Collateral Design'],
  },
  {
    num: '03', title: 'Digital Campaigns',
    desc: 'Full-funnel campaigns across paid social, search, and programmatic. We plan, execute, and optimize until the numbers make sense.',
    items: ['Paid Social (Meta, TikTok)', 'Google & YouTube Ads', 'Programmatic Display', 'A/B Testing', 'Analytics & Reporting'],
  },
  {
    num: '04', title: 'Growth Marketing',
    desc: 'We build acquisition and retention engines built to scale. CRO, lifecycle, and channel strategy to accelerate your growth trajectory.',
    items: ['Funnel Optimization', 'Email & Lifecycle', 'CRO & Landing Pages', 'Channel Strategy', 'Data & Attribution'],
  },
  {
    num: '05', title: 'Content Studio',
    desc: 'High-production content built for performance. Photography, video, UGC-style assets, and copy — all designed to work in-feed and on-site.',
    items: ['Video Production', 'Photography', 'Copywriting', 'Social Content', 'UGC Management'],
  },
  {
    num: '06', title: 'Social Media',
    desc: 'Always-on social management that builds community, drives conversation, and keeps your brand relevant between campaigns.',
    items: ['Strategy & Planning', 'Content Calendar', 'Community Management', 'Influencer Partnerships', 'Monthly Reporting'],
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
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

export default function Services() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.eyebrow}>What We Do</div>
        <h1 className={styles.title}>Everything you need<br /><em>to win.</em></h1>
      </section>

      <section className={styles.intro}>
        <p className="reveal">We don&apos;t do half-measures. Each engagement is built around your specific goals, with the right mix of strategy, creative, and execution to get you there.</p>
      </section>

      <section className={styles.list}>
        {services.map((s, i) => (
          <div key={s.num} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.alt : ''} reveal`}>
            <div className={styles.serviceLeft}>
              <div className={styles.serviceNum}>{s.num}</div>
              <h2 className={styles.serviceTitle}>{s.title}</h2>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <Link href="/contact" className={styles.btn}>Enquire →</Link>
            </div>
            <div className={styles.serviceRight}>
              {s.items.map((item) => (
                <div key={item} className={styles.item}>
                  <span className={styles.dot} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className="reveal">Not sure where to start?</h2>
        <p className="reveal">Let&apos;s talk. We&apos;ll help you figure out what you actually need.</p>
        <Link href="/contact" className={`${styles.ctaBtn} reveal`}>Book a Free Call →</Link>
      </section>

      <Footer />
    </div>
  );
}
