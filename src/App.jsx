import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';

const AppContent = () => {
  const navigate = useNavigate();

  const apps = [
    {
      title: "Digital Mandir",
      image: "/image_a24e5c.jpg", // Yahan apni purani image ka naam daal dein
      apkLink: "#"
    },
    {
      title: "You Must Know",
      image: "/image_a1d5ff.jpg", // image_a1d5ff.jpg use ho gayi
      apkLink: "#"
    }
  ];

  return (
    <div className="container">
      <nav>
        <h1>SS STUDIO</h1>
        <div>
          <a href="/">Home</a>
          <a href="#apps">My Apps</a>
        </div>
      </nav>

      <section id="apps" style={{ padding: '50px 20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {apps.map((app, index) => (
          <div key={index} style={{ background: '#1a1f2e', padding: '20px', borderRadius: '15px', width: '300px', textAlign: 'center' }}>
            <img src={app.image} alt={app.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h2 style={{ color: 'white', margin: '15px 0' }}>{app.title}</h2>
            <button onClick={() => window.location.href = app.apkLink} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#fb923c', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
              Download APK
            </button>
            <button onClick={() => navigate('/payment')} style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid #fb923c', color: '#fb923c', borderRadius: '5px', cursor: 'pointer' }}>
              Upgrade to Premium
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;