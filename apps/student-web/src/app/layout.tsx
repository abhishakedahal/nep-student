
import './globals.css';
export const metadata = {
  title: 'NepStudent — Exclusive Nepal Student Discounts & Benefits',
  description: 'Instant student discounts across Kathmandu, Lalitpur, and Bhaktapur with automated college verification.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🇳🇵</span>
            <div>
              <h1 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NepStudent</h1>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kathmandu Valley Student Marketplace</span>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Offers</a>
            <a href="/verify" style={{ color: 'white', textDecoration: 'none' }}>Get Verified</a>
            <a href="/(auth)" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
