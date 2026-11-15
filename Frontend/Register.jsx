import React, { useState } from 'react';

function Register({ goToLogin }) {
  const [form, setForm] = useState({ name: '', rollNo: '', phone: '', course: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert('Registered Successfully!');
      goToLogin();
    } else {
      alert('Registration Failed');
    }
  };

  return (
    <div style={box}>
      <h2 style={{ color: '#16a34a', textAlign: 'center' }}>Student Register</h2>
      <form onSubmit={handleRegister} style={form}>
        <input 
          name="name" 
          type="text"
          placeholder="Full Name (Alphabets Only)" 
          pattern="[A-Za-z ]+" 
          title="Name should only contain letters"
          onChange={handleChange} 
          required 
          style={input} 
        />
        <input 
          name="rollNo" 
          type="number"
          placeholder="Roll Number (Numbers Only)" 
          onChange={handleChange} 
          required 
          style={input} 
        />
        <input 
          name="phone" 
          type="tel"
          placeholder="Phone Number (10 Digits)" 
          pattern="[0-9]{10}" 
          maxLength="10"
          title="Enter a valid 10-digit mobile number"
          onChange={handleChange} 
          required 
          style={input} 
        />
        <input 
          name="course" 
          type="text"
          placeholder="Course (e.g. MCA)" 
          onChange={handleChange} 
          required 
          style={input} 
        />
        <input 
          name="password" 
          type="password"
          placeholder="Password" 
          onChange={handleChange} 
          required 
          style={input} 
        />
        <button type="submit" style={btn('#16a34a')}>Register</button>
      </form>
      <p style={link} onClick={goToLogin}>Already registered? Login</p>
    </div>
  );
}

const box = { background: '#fff', padding: '30px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };
const form = { display: 'flex', flexDirection: 'column', gap: '10px' };
const input = { padding: '9px', borderRadius: '4px', border: '1px solid #ccc' };
const btn = (bg) => ({ padding: '10px', background: bg, color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' });
const link = { textAlign: 'center', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginTop: '10px' };

export default Register;
