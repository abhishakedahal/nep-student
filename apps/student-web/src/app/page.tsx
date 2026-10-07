
'use client';
import { useState } from 'react';

export default function StudentHomePage() {
  const [selectedCity, setSelectedCity] = useState('ALL');
  const offers = [
    { id: 1, title: '25% Off at Himalayan Java Coffee', merchant: 'Himalayan Java', category: 'Food & Drinks', city: 'Kathmandu', discount: '25% OFF', badge: 'INSTANT VOUCHER' },
    { id: 2, title: '15% Off Coding & Tech Books at Heritage Bookshop', merchant: 'Heritage Books', category: 'Stationery', city: 'Lalitpur', discount: '15% OFF', badge: 'VALLEY EXCLUSIVE' },
    { id: 3, title: 'Free Dessert with Meals at Roadhouse Cafe', merchant: 'Roadhouse Cafe', category: 'Food & Drinks', city: 'Bhaktapur', discount: 'FREE ITEM', badge: 'STUDENT SPECIAL' },
    { id: 4, title: '20% Off Noise Cancelling Earphones at Oliz Store', merchant: 'Oliz Store', category: 'Electronics', city: 'Kathmandu', discount: '20% OFF', badge: 'POPULAR' }
  ];

  const filtered = selectedCity === 'ALL' ? offers : offers.filter(o => o.city === selectedCity);

  return (
    <div className="portal-container">
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Exclusive Discounts for Nepal's Students</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          Open browsing for all students across Kathmandu, Lalitpur, and Bhaktapur. Verification required at voucher redemption.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          {['ALL', 'Kathmandu', 'Lalitpur', 'Bhaktapur'].map(c => (
            <button
              key={c}
              onClick={() => setSelectedCity(c)}
              className={`btn ${selectedCity === c ? 'btn-primary' : 'btn-outline'}`}
            >
              {c === 'ALL' ? 'All Kathmandu Valley' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map(offer => (
          <div key={offer.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge badge-success">{offer.badge}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📍 {offer.city}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{offer.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{offer.merchant} • {offer.category}</p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4ade80' }}>{offer.discount}</span>
              <button className="btn btn-accent" onClick={() => alert('Verification required to redeem: Navigate to /verify to activate instant verification.')}>
                Redeem Voucher
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
