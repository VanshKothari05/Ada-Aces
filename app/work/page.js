'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const projects = [
  { label: 'NOVA', gradient: 'linear-gradient(135deg, #2C3E50, #4A6274)', tag: 'Brand Identity', year: '2025', name: 'Nova Fintech', desc: 'Full brand overhaul for a Series A fintech. Positioning, visual identity, and launch campaign.', results: ['3x brand awareness lift', '40% increase in sign-ups', 'Featured in TechCrunch'] },
  { label: 'GROW', gradient: 'linear-gradient(135deg, #8B9A6D, #A3B085)', tag: 'Digital Campaign', year: '2025', name: 'GreenLeaf Organics', desc: 'Go-to-market strategy and digital campaign for a D2C organic food brand entering metro India.', results: ['₹2Cr revenue in month 1', '6.2x ROAS on Meta', '50k Instagram followers'] },
  { label: 'PULSE', gradient: 'linear-gradient(135deg, #D4836B, #E09B85)', tag: 'Social Strategy', year: '2024', name: 'Pulse Studios', desc: 'Built a social media presence from zero to 100k for an indie gaming studio.', results: ['0 → 100k followers in 8 months', '4.8% avg. engagement rate', 'Viral TikTok series'] },
  { label: 'COVE', gradient: 'linear-gradient(135deg, #4A7C8A, #6BA3B3)', tag: 'Brand Strategy', year: '2024', name: 'Cove Hospitality', desc: 'Brand strategy and identity for a boutique hotel chain expanding across Southeast Asia.', results: ['Launched in 3 cities', 'Won Design Week award', '90% occupancy in launch quarter'] },
  { label: 'ZEST', gradient: 'linear-gradient(135deg, #C06E55, #D4836B)', tag: 'Growth Marketing', year: '2024', name: 'Zest Beauty', desc: 'Full-funnel growth strategy for a bootstrapped beauty brand. From email to paid to CRO.', results: ['2.8x MoM revenue growth', '35% email open rate', 'CAC reduced by 42%'] },
  { label: 'AXIS', gradient: 'linear-gradient(135deg, #5B6D8A, #7A8FA6)', tag: 'Creative Direction', year: '2023', name: 'Axis Mobility', desc: 'Campaign creative and video production for an EV scooter brand targeting Gen Z commuters.', results: ['15M+ video views', '22% conversion lift', 'Campaign of the Year shortlist'] },
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

export default function Work() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Portfolio</div>
        <h1 className={styles.title}>Work that<br /><em>moves needles.</em></h1>
      </section>

      <section className={styles.grid}>
        {projects.map((p, i) => (
          <div key={p.label} className={`${styles.card} reveal`}>
            <div className={styles.thumb} style={{ background: p.gradient }}>
              {p.label}
            </div>
            <div className={styles.info}>
              <div className={styles.meta}>
                <span className={styles.tag}>{p.tag}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.results}>
                {p.results.map((r) => (
                  <div key={r} className={styles.result}>
                    <span className={styles.dot} />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className="reveal">Want results like these?</h2>
        <p className="reveal">Let&apos;s talk about what we can build for you.</p>
        <a href="/contact" className={`${styles.ctaBtn} reveal`}>Start a Project →</a>
      </section>

      <Footer />
    </div>
  );
}
