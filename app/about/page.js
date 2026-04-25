'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const team = [
  { name: 'Ada Chen', role: 'Co-Founder & Creative Director', initials: 'AC' },
  { name: 'Marcus Aces', role: 'Co-Founder & Strategy Lead', initials: 'MA' },
  { name: 'Priya Nair', role: 'Head of Digital', initials: 'PN' },
  { name: 'Jordan Blake', role: 'Lead Designer', initials: 'JB' },
  { name: 'Sam Torres', role: 'Performance Marketer', initials: 'ST' },
  { name: 'Riley Park', role: 'Content Strategist', initials: 'RP' },
];

const values = [
  { num: '01', title: 'Obsession over mediocrity', desc: 'We go unreasonably deep on every project. Good enough is never good enough.' },
  { num: '02', title: 'Clarity in chaos', desc: 'We cut through noise to find the single idea that changes everything.' },
  { num: '03', title: 'Results, not just vibes', desc: 'Beautiful work that doesn\'t perform is decoration. We build for both.' },
  { num: '04', title: 'Radical honesty', desc: 'We tell you what you need to hear, not just what you want to hear.' },
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

export default function About() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.eyebrow}>Our Story</div>
        <h1 className={styles.title}>Crafted for<br /><em>challengers.</em></h1>
        <div className={styles.heroDivider} />
      </section>

      <section className={styles.story}>
        <div className={styles.storyGrid}>
          <div className={`${styles.storyText} reveal`}>
            <p>Ads and Aces was born out of frustration. Too many brilliant brands were being handed forgettable campaigns by agencies more interested in retainers than results.</p>
            <p>We started as a two-person team in 2018 with one simple conviction: strategy and creativity shouldn&apos;t be siloed. The best marketing is both intellectually rigorous and visually arresting.</p>
            <p>Today we&apos;re a team of twelve working with founders, growth teams, and brand leads across the globe — from early-stage startups to scale-ups ready to make serious noise.</p>
            <Link href="/contact" className={styles.btn}>Work With Us →</Link>
          </div>
          <div className={`${styles.storyVisual} reveal reveal-delay-2`}>
            <div className={styles.bigYear}>2018</div>
            <div className={styles.storyCaption}>Founded in Mumbai,<br />operating everywhere.</div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={`${styles.sectionLabel} reveal`}>What We Stand For</div>
        <h2 className={`${styles.sectionTitle} reveal`}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={v.num} className={`${styles.valueCard} reveal reveal-delay-${i + 1}`}>
              <div className={styles.valueNum}>{v.num}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <div className={`${styles.sectionLabel} reveal`}>The People</div>
        <h2 className={`${styles.sectionTitle} reveal`}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          {team.map((m, i) => (
            <div key={m.name} className={`${styles.teamCard} reveal reveal-delay-${(i % 4) + 1}`}>
              <div className={styles.avatar}>
                {m.initials}
              </div>
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberRole}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
