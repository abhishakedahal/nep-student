
import './globals.css';
export const metadata = {
  title: 'NepStudent — Merchant Business Portal',
  description: 'Merchant dashboard for student campaigns, voucher validation, and revenue analytics.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🛍️</span>
            <div>
              <h1 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>NepStudent Merchant Partner Portal</h1>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Himalayan Java & Kathmandu Partners</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn btn-primary">+ Create Student Offer</button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
