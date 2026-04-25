import './globals.css';

export const metadata = {
  title: 'Ads and Aces — Shoot. Create. Elevate.',
  description: 'A creative marketing agency that shoots, creates, and elevates brands. Bold strategy meets stunning visuals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
