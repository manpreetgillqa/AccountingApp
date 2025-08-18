import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      background: `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: 0,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '48px 36px',
        maxWidth: 500,
        textAlign: 'center',
      }}>
        <img src="https://img.icons8.com/ios-filled/100/4a90e2/accounting.png" alt="FirmLedger Logo" style={{ width: 70, marginBottom: 16 }} />
        <h1 style={{ color: '#2d3e50', fontWeight: 700, fontSize: 36, margin: '0 0 12px' }}>Welcome to FirmLedger</h1>
        <p style={{ color: '#4a90e2', fontSize: 18, marginBottom: 32 }}>
          Your trusted accounting partner for modern businesses.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Link to="/login">
            <button style={{
              padding: '14px 32px',
              borderRadius: 8,
              border: 'none',
              background: '#4a90e2',
              color: '#fff',
              fontWeight: 600,
              fontSize: 20,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(74,144,226,0.08)'
            }}>
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button style={{
              padding: '14px 32px',
              borderRadius: 8,
              border: 'none',
              background: '#43a047',
              color: '#fff',
              fontWeight: 600,
              fontSize: 20,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(67,160,71,0.08)'
            }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 40, fontSize: 14, color: '#90a4ae' }}>
        &copy; {new Date().getFullYear()} FirmLedger Accounting. All rights reserved.
      </div>
    </div>
  );
}

export default LandingPage;
