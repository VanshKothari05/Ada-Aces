import './globals.css';

export const metadata = {
  title: 'Ada & Aces — Marketing Agency',
  description: 'Bold strategy. Relentless execution. We craft brands that command attention.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
