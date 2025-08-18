import React, { useState } from 'react';


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Account created successfully!');
      } else {
        setMessage(data.message || 'Sign up failed');
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
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '40px 32px',
        width: 350,
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#2d3e50', fontWeight: 700, fontSize: 28 }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#2d3e50', fontWeight: 500 }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
            <label style={{ display: 'block', marginBottom: 6, color: '#2d3e50', fontWeight: 500 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <div style={{ marginTop: 20, color: message === 'Account created successfully!' ? '#43a047' : '#e53935', fontWeight: 500 }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
