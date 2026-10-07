
'use client';
export default function BusinessPortalDashboard() {
  const offers = [
    { id: 'OFF-1', title: '25% Flat Off Espresso & Bakery', code: 'JAVA-STUDENT-25', redemptions: 412, quota: 500, status: 'ACTIVE' },
    { id: 'OFF-2', title: 'Buy 1 Get 1 Free on Study Hours (2pm - 5pm)', code: 'BOGO-STUDY', redemptions: 198, quota: 250, status: 'ACTIVE' },
    { id: 'OFF-3', title: 'Free Wi-Fi High-Speed Pass with Coffee', code: 'PERK-WIFI', redemptions: 320, quota: 1000, status: 'PAUSED' }
  ];

  return (
    <div className="portal-container">
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Total Student Redemptions</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>930</div>
          <div style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: '0.25rem' }}>Verified Nepali students only</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Estimated Student Savings (NPR)</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>Rs. 184,200</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Avg. Rs. 198 per redemption</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Top Participating Colleges</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '0.5rem' }}>Pulchowk Campus (38%)</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Followed by St. Xavier's (24%)</div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Active Student Discount Campaigns</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Campaign Title</th>
                <th>Promo Code</th>
                <th>Redemptions</th>
                <th>Quota Progress</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600 }}>{o.title}</td>
                  <td><code>{o.code}</code></td>
                  <td>{o.redemptions}</td>
                  <td>
                    <div style={{ width: '100%', background: '#334155', height: '6px', borderRadius: '3px' }}>
                      <div style={{ width: `${(o.redemptions / o.quota) * 100}%`, background: '#3b82f6', height: '100%', borderRadius: '3px' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{o.redemptions} / {o.quota}</span>
                  </td>
                  <td><span className={`badge ${o.status === 'ACTIVE' ? 'badge-success' : 'badge-warning'}`}>{o.status}</span></td>
                  <td><button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
