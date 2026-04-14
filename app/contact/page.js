'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const services = ['Brand Strategy', 'Creative Direction', 'Digital Campaigns', 'Growth Marketing', 'Content Studio', 'Social Media', 'Not sure yet'];
const budgets = ['Under ₹5L', '₹5L – ₹15L', '₹15L – ₹50L', '₹50L+', 'Let\'s discuss'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Get In Touch</div>
        <h1 className={styles.title}>Let&apos;s build<br /><em>something.</em></h1>
      </section>

      <section className={styles.body}>
        <div className={styles.left}>
          <h2>Start the conversation</h2>
          <p>Tell us about your brand and what you&apos;re trying to achieve. We&apos;ll get back to you within 24 hours.</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div className={styles.detailLabel}>Email</div>
              <a href="mailto:hello@adaaces.com">hello@adaaces.com</a>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailLabel}>Phone</div>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailLabel}>Location</div>
              <span>Mumbai, India (serving globally)</span>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailLabel}>Office Hours</div>
              <span>Mon – Fri, 10am – 7pm IST</span>
            </div>
          </div>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance ↗</a>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Message received!</h3>
              <p>We&apos;ll be in touch within 24 hours. Keep an eye on your inbox.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your Name *</label>
                  <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Jane Doe" required />
                </div>
                <div className={styles.field}>
                  <label>Email Address *</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="jane@company.com" required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Company / Brand</label>
                <input type="text" value={form.company} onChange={e => set('company', e.target.value)} placeholder="Your brand name" />
              </div>
              <div className={styles.field}>
                <label>Service Interested In</label>
                <div className={styles.chips}>
                  {services.map(s => (
                    <button type="button" key={s} className={`${styles.chip} ${form.service === s ? styles.chipActive : ''}`} onClick={() => set('service', s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className={styles.field}>
                <label>Approximate Budget</label>
                <div className={styles.chips}>
                  {budgets.map(b => (
                    <button type="button" key={b} className={`${styles.chip} ${form.budget === b ? styles.chipActive : ''}`} onClick={() => set('budget', b)}>{b}</button>
                  ))}
                </div>
              </div>
              <div className={styles.field}>
                <label>Tell us about your project *</label>
                <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="What are you trying to achieve? What's the challenge?" rows={5} required />
              </div>
              <button type="submit" className={styles.submit}>Send Message →</button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
