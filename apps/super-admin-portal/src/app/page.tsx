
'use client';
export default function SuperAdminDashboard() {
  const queue = [
    { id: 'REQ-901', student: 'Rohan Thapa', college: 'Unlisted: Kathmandu Valley College', docType: 'Student ID Front + Selfie', lockExpires: '24m left', reviewer: 'Claimed by You' },
    { id: 'REQ-902', student: 'Sunita Maharjan', college: 'Unlisted: Kantipur Academy', docType: 'Enrollment Slip', lockExpires: 'Available', reviewer: 'Unclaimed' },
    { id: 'REQ-903', student: 'Prabin Karki', college: 'Unlisted: Everest Engineering', docType: 'Student ID Front & Back', lockExpires: 'Available', reviewer: 'Unclaimed' }
  ];

  return (
    <div className="portal-container">
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Track 2 Manual Review Queue</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#fbbf24' }}>14 Pending</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>30-min concurrent claim locking active</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Automated Track 1 Roster Matches</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>92.4%</div>
          <div style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: '0.25rem' }}>Instant sub-second approval rate</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Fraud / Duplicate Rejections (24h)</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#f87171' }}>2</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>24h cooldown applied</div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Unlisted College Document Verification Queue</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Student Legal Name</th>
                <th>Claimed College</th>
                <th>Uploaded Artifacts</th>
                <th>Lock Status</th>
                <th>Reviewer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {queue.map(q => (
                <tr key={q.id}>
                  <td style={{ fontFamily: 'monospace' }}>{q.id}</td>
                  <td style={{ fontWeight: 600 }}>{q.student}</td>
                  <td>{q.college}</td>
                  <td>{q.docType}</td>
                  <td>
                    <span className={`badge ${q.lockExpires.includes('left') ? 'badge-warning' : 'badge-success'}`}>
                      {q.lockExpires}
                    </span>
                  </td>
                  <td>{q.reviewer}</td>
                  <td>
                    <button className="btn btn-primary" style={{ padding: '0.25rem 0.6rem' }}>
                      {q.reviewer === 'Unclaimed' ? 'Claim & Review' : 'Open Review'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
