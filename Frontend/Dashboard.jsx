import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div style={box}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2 style={{ margin: 0, color: '#1e3a8a' }}>Dashboard</h2>
        <button onClick={onLogout} style={{ padding: '6px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Logout</button>
      </div>
      <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0 }}><strong>Name:</strong> {user.name}</p>
        <p style={{ margin: 0 }}><strong>Roll No:</strong> {user.rollNo}</p>
        <p style={{ margin: 0 }}><strong>Phone:</strong> {user.phone}</p>
        <p style={{ margin: 0 }}><strong>Course:</strong> {user.course}</p>
      </div>
    </div>
  );
}

const box = { background: '#fff', padding: '30px', borderRadius: '10px', width: '320px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };

export default Dashboard;
