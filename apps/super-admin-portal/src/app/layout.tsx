
import './globals.css';
export const metadata = {
  title: 'NepStudent — Super Admin Portal',
  description: 'Enterprise master console for student verification reviews, fraud monitoring, and audit trails.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <div>
              <h1 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>NepStudent Super Admin Console</h1>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Trust, Verification & System Operations</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="badge badge-success">Kafka Cluster Healthy</span>
            <span className="badge badge-success">Outbox Workers 3/3 Active</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
