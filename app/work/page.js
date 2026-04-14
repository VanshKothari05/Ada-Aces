import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const projects = [
  { label: 'NOVA', bg: '#1a1200', color: '#F5C842', tag: 'Brand Identity', year: '2025', name: 'Nova Fintech', desc: 'Full brand overhaul for a Series A fintech. Positioning, visual identity, and launch campaign.', results: ['3x brand awareness lift', '40% increase in sign-ups', 'Featured in TechCrunch'] },
  { label: 'GROW', bg: '#001a0a', color: '#4ade80', tag: 'Digital Campaign', year: '2025', name: 'GreenLeaf Organics', desc: 'Go-to-market strategy and digital campaign for a D2C organic food brand entering metro India.', results: ['₹2Cr revenue in month 1', '6.2x ROAS on Meta', '50k Instagram followers'] },
  { label: 'PULSE', bg: '#1a001a', color: '#c084fc', tag: 'Social Strategy', year: '2024', name: 'Pulse Studios', desc: 'Built a social media presence from zero to 100k for an indie gaming studio.', results: ['0 → 100k followers in 8 months', '4.8% avg. engagement rate', 'Viral TikTok series'] },
  { label: 'COVE', bg: '#001218', color: '#38bdf8', tag: 'Brand Strategy', year: '2024', name: 'Cove Hospitality', desc: 'Brand strategy and identity for a boutique hotel chain expanding across Southeast Asia.', results: ['Launched in 3 cities', 'Won Design Week award', '90% occupancy in launch quarter'] },
  { label: 'ZEST', bg: '#180018', color: '#f472b6', tag: 'Growth Marketing', year: '2024', name: 'Zest Beauty', desc: 'Full-funnel growth strategy for a bootstrapped beauty brand. From email to paid to CRO.', results: ['2.8x MoM revenue growth', '35% email open rate', 'CAC reduced by 42%'] },
  { label: 'AXIS', bg: '#0a0010', color: '#a78bfa', tag: 'Creative Direction', year: '2023', name: 'Axis Mobility', desc: 'Campaign creative and video production for an EV scooter brand targeting Gen Z commuters.', results: ['15M+ video views', '22% conversion lift', 'Campaign of the Year shortlist'] },
];

export const metadata = { title: 'Our Work — Ada & Aces' };

export default function Work() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Portfolio</div>
        <h1 className={styles.title}>Work that<br /><em>moves needles.</em></h1>
      </section>

      <section className={styles.grid}>
        {projects.map((p) => (
          <div key={p.label} className={styles.card}>
            <div className={styles.thumb} style={{ background: p.bg, color: p.color }}>
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
        <h2>Want results like these?</h2>
        <p>Let&apos;s talk about what we can build for you.</p>
        <a href="/contact" className={styles.ctaBtn}>Start a Project →</a>
      </section>

      <Footer />
    </>
  );
}
