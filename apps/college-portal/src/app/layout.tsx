
import './globals.css';
export const metadata = {
  title: 'NepStudent — College Partner Portal',
  description: 'Manage institutional student rosters, batch enrollments, and instant verification queries.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🏛️</span>
            <div>
              <h1 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>NepStudent Partner College Portal</h1>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tribhuvan University & Valley Affiliates</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="badge badge-success">Roster API Active</span>
            <button className="btn btn-outline">Logout</button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
