
'use client';
import { useState } from 'react';

export default function CollegePortalDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [records] = useState([
    { id: 'TU-2024-8891', name: 'Aayush Sharma', program: 'BSc. CSIT', batch: 2024, status: 'ACTIVE', matchedCount: 14 },
    { id: 'TU-2024-8892', name: 'Pooja Shrestha', program: 'BBA', batch: 2023, status: 'ACTIVE', matchedCount: 8 },
    { id: 'TU-2023-1102', name: 'Bibek Adhikari', program: 'B.E. Computer', batch: 2022, status: 'GRADUATED', matchedCount: 22 }
  ]);

  return (
    <div className="portal-container">
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Enrolled Students on Roster</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>1,842</div>
          <div style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: '0.25rem' }}>↑ 120 added via SFTP sync</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Instant Matches (30 Days)</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>648</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Zero document friction</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Manual Claims Requiring Review</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#fbbf24' }}>3</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Unmatched roll numbers</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem' }}>Authoritative Institutional Roster</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Student records used for Track 1 instant verification</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              placeholder="Search roll number or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid var(--surface-border)',
                padding: '0.5rem 0.85rem',
                borderRadius: '0.375rem',
                color: 'white',
                outline: 'none'
              }}
            />
            <button className="btn btn-primary">Upload CSV Roster</button>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>College Roll / ID</th>
                <th>Legal Name</th>
                <th>Program</th>
                <th>Batch Year</th>
                <th>Status</th>
                <th>Discount Verifications</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map(r => (
                <tr key={r.id}>
                  <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{r.id}</td>
                  <td>{r.name}</td>
                  <td>{r.program}</td>
                  <td>{r.batch}</td>
                  <td>
                    <span className={`badge ${r.status === 'ACTIVE' ? 'badge-success' : 'badge-warning'}`}>
                      {r.status}
                    </span>
                  </td>
                  <td>{r.matchedCount} redemptions</td>
                  <td><button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>Audit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
