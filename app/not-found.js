import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className={styles.page}>
        <div className={styles.num}>404</div>
        <h1 className={styles.title}>Page not found.</h1>
        <p className={styles.sub}>Looks like this hand was a bust. Let&apos;s get you back to the table.</p>
        <Link href="/" className={styles.btn}>Back to Home →</Link>
      </section>
      <Footer />
    </>
  );
}
