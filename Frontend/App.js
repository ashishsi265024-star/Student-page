import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  return (
    <div style={{ background: '#0f172a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      {page === 'login' && <Login onLogin={(u) => { setUser(u); setPage('dashboard'); }} goToRegister={() => setPage('register')} />}
      {page === 'register' && <Register goToLogin={() => setPage('login')} />}
      {page === 'dashboard' && user && <Dashboard user={user} onLogout={() => { setUser(null); setPage('login'); }} />}
    </div>
  );
}

export default App;
        
