
'use client';
export default function AuthPage() {
  return (
    <div className="portal-container" style={{ maxWidth: '450px', marginTop: '3rem' }}>
      <div className="card">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Student Account</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Enter your Nepal mobile number or student email
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Email or Phone (+977)</label>
            <input type="text" placeholder="student@tu.edu.np or 98XXXXXXXX" style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }} />
          </div>
          <button className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Log In / Continue</button>
        </div>
      </div>
    </div>
  );
}
