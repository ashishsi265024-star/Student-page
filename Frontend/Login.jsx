import React, { useState } from 'react';

function Login({ onLogin, goToRegister }) {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rollNo, password })
    });
    const data = await res.json();
    if (data.success) {
      onLogin(data.user);
    } else {
      alert('Invalid Roll No or Password');
    }
  };

  return (
    <div style={box}>
      <h2 style={{ color: '#1e3a8a', textAlign: 'center' }}>Student Login</h2>
      <form onSubmit={handleLogin} style={form}>
        <input 
          type="number" 
          placeholder="Roll Number (Numbers Only)" 
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)} 
          required 
          style={input} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={input} 
        />
        <button type="submit" style={btn('#1e3a8a')}>Login</button>
      </form>
      <p style={link} onClick={goToRegister}>New user? Register</p>
    </div>
  );
}

const box = { background: '#fff', padding: '30px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };
const form = { display: 'flex', flexDirection: 'column', gap: '12px' };
const input = { padding: '10px', borderRadius: '4px', border: '1px solid #ccc' };
const btn = (bg) => ({ padding: '10px', background: bg, color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' });
const link = { textAlign: 'center', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginTop: '10px' };

export default Login;
