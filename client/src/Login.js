import React, { useState } from 'react';


function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameOrEmail, email: usernameOrEmail, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      background: `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.1)',
        zIndex: 0
      }} />
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '40px 32px',
        width: 350,
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ marginBottom: 24 }}>
          <img src="https://img.icons8.com/ios-filled/100/4a90e2/accounting.png" alt="Accounting Firm Logo" style={{ width: 60, marginBottom: 8 }} />
          <h2 style={{ margin: 0, color: '#2d3e50', fontWeight: 700, fontSize: 28 }}>FirmLedger</h2>
          <p style={{ color: '#4a90e2', fontWeight: 500, marginTop: 4, fontSize: 16 }}>Accounting Firm Login</p>
        </div>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#2d3e50', fontWeight: 500 }}>Username or Email</label>
            <input
              type="text"
              value={usernameOrEmail}
              onChange={e => setUsernameOrEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 6,
                border: '1px solid #cfd8dc',
                fontSize: 16,
                outline: 'none',
                boxSizing: 'border-box',
                background: '#f7fafc'
              }}
              autoFocus
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#2d3e50', fontWeight: 500 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 6,
                border: '1px solid #cfd8dc',
                fontSize: 16,
                outline: 'none',
                boxSizing: 'border-box',
                background: '#f7fafc'
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: 6,
              border: 'none',
              background: '#4a90e2',
              color: '#fff',
              fontWeight: 600,
              fontSize: 18,
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(74,144,226,0.08)'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && (
          <div style={{ marginTop: 20, color: message === 'Login successful' ? '#43a047' : '#e53935', fontWeight: 500 }}>
            {message}
          </div>
        )}
        <div style={{ marginTop: 32, fontSize: 13, color: '#90a4ae' }}>
          &copy; {new Date().getFullYear()} FirmLedger Accounting. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Login;
