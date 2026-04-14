import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  { num: '01', title: 'Brand Strategy', desc: 'Positioning, identity, and messaging that makes your brand impossible to ignore.' },
  { num: '02', title: 'Digital Campaigns', desc: 'Performance-driven campaigns across paid, organic, and social channels.' },
  { num: '03', title: 'Creative Direction', desc: 'Visuals, copy, and creative assets that stop the scroll and start conversations.' },
  { num: '04', title: 'Growth Marketing', desc: 'Data-backed strategies to acquire, retain, and scale your customer base.' },
];

const works = [
  { slug: 'nova', label: 'NOVA', bg: '#1a1200', color: '#F5C842', tag: 'Brand Identity · 2025', name: 'Nova Fintech — Full brand overhaul' },
  { slug: 'greenleaf', label: 'GROW', bg: '#001a0a', color: '#4ade80', tag: 'Digital Campaign · 2025', name: 'GreenLeaf Organics — Launch campaign' },
  { slug: 'pulse', label: 'PULSE', bg: '#1a001a', color: '#c084fc', tag: 'Social Strategy · 2024', name: 'Pulse Studios — Social growth 0→100k' },
];

const stats = [
  { num: '80+', label: 'Brands Launched' },
  { num: '4x', label: 'Avg. ROAS' },
  { num: '6yr', label: 'In the Game' },
  { num: '12', label: 'Awards Won' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Marketing Agency</div>
          <h1 className={styles.heroTitle}>
            Win <em>Every</em><br />Room.
          </h1>
          <p className={styles.heroSub}>
            We craft brands that command attention and campaigns that convert. Bold strategy. Relentless execution.
          </p>
          <div className={styles.heroActions}>
            <Link href="/work" className={styles.btnPrimary}>See Our Work</Link>
            <Link href="/contact" className={styles.btnOutline}>Get In Touch</Link>
          </div>
        </div>
        <div className={styles.heroBg}>ACES</div>
      </section>

      {/* TICKER */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {['Brand Strategy','Digital Campaigns','Creative Direction','Performance Marketing','Content Studio','Social Media','Brand Strategy','Digital Campaigns','Creative Direction','Performance Marketing','Content Studio','Social Media'].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className={styles.services}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionLabel}>What We Do</div>
          <h2 className={styles.sectionTitle}>Our Services</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.num} className={styles.serviceCard}>
              <div className={styles.serviceNum}>{s.num}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.sectionAction}>
          <Link href="/services" className={styles.btnOutline}>View All Services →</Link>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className={styles.workSection}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionLabel}>Portfolio</div>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
        </div>
        <div className={styles.workGrid}>
          {works.map((w) => (
            <Link href={`/work`} key={w.slug} className={styles.workCard}>
              <div className={styles.workThumb} style={{ background: w.bg, color: w.color }}>{w.label}</div>
              <div className={styles.workInfo}>
                <div className={styles.workTag}>{w.tag}</div>
                <div className={styles.workName}>{w.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.sectionAction}>
          <Link href="/work" className={styles.btnOutline}>View All Work →</Link>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div>
          <h2 className={styles.ctaTitle}>Ready to play<br />your best hand?</h2>
          <p className={styles.ctaSub}>Let&apos;s build something unforgettable together.</p>
        </div>
        <Link href="/contact" className={styles.btnDark}>Start a Project →</Link>
      </section>

      <Footer />
    </>
  );
}
