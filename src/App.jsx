import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';

const AppContent = () => {
  const navigate = useNavigate();

  const apps = [
    {
      title: "Digital Mandir",
      image: "/mandir.jpg",
      description: "Your comprehensive pocket temple for dynamic daily darshan, background streaming aartis with integrated timeline sliders, and personalized shlokas.",
      apk: "/digital_mandir.apk"
    },
    {
      title: "You Must Know",
      image: "/image_a1d5ff.jpg",
      description: "Explore daily essential knowledge, facts, and updates curated for your smart mobile experience.",
      apk: "#"
    }
  ];

  return (
    <div style={{ backgroundColor: "#0b0f19", minHeight: "100vh", color: "#f8fafc", fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backdropFilter: "blur(12px)", backgroundColor: "rgba(11, 15, 25, 0.8)", position: "sticky", top: "0", zIndex: "100" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src="/logo.png" style={{ width: "35px" }} /> <span style={{ fontSize: "20px", fontWeight: "bold", color: "#fb923c" }}>SS STUDIO 🚩</span></div>
        <nav style={{ display: "flex", gap: "25px" }}><a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</a><a href="#apps" style={{ color: "#94a3b8", textDecoration: "none" }}>My Apps</a></nav>
      </header>

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Profile Section */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
           <img src="/profile.png" style={{ width: "110px", borderRadius: "50%", border: "3px solid #3b82f6" }} />
           <h2 style={{ fontSize: "24px" }}>Samit Singh</h2>
           <p style={{ color: "#94a3b8" }}>SOFTWARE & APP DEVELOPER</p>
        </div>

        {/* Apps Section */}
        <div id="apps" style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {apps.map((app, index) => (
            <div key={index} style={{ backgroundColor: "#111827", padding: "25px", borderRadius: "24px", width: "380px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src={app.image} style={{ width: "100%", borderRadius: "16px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "28px" }}>{app.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: "15px 0" }}>{app.description}</p>
              
              <a href={app.apk} download className="download-btn" style={{ display: "block", background: "#fb923c", color: "white", padding: "12px", borderRadius: "14px", textAlign: "center", textDecoration: "none", fontWeight: "bold", marginBottom: "10px" }}>
                Download APK
              </a>
              <button onClick={() => navigate('/payment')} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #fb923c", color: "#fb923c", borderRadius: "14px", cursor: "pointer", fontWeight: "bold" }}>
                Upgrade to Premium
              </button>
            </div>
          ))}
        </div>
      </main>
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