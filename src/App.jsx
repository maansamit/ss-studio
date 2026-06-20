import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage'; // Ensure this file exists

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#0b0f19", minHeight: "100vh", color: "#f8fafc", fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<HomePage />} />
          {/* Payment Page Route */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// HOME PAGE COMPONENT
function HomePage() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backdropFilter: "blur(12px)", backgroundColor: "rgba(11, 15, 25, 0.8)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", position: "sticky", top: "0", zIndex: "100" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "35px", height: "35px" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#fb923c" }}>SS STUDIO 🚩</span>
        </div>
        <nav style={{ display: "flex", gap: "25px" }}>
          <Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link>
          <a href="#apps" style={{ color: "#94a3b8", textDecoration: "none" }}>My Apps</a>
          <Link to="/payment" style={{ color: "#fb923c", textDecoration: "none", fontWeight: "600" }}>Premium</Link>
        </nav>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 40px", display: "flex", gap: "60px", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h1 style={{ fontSize: "46px", fontWeight: "800" }}>Next-Gen Apps Built For <span style={{ color: "#fb923c" }}>Performance</span>.</h1>
          <p style={{ color: "#94a3b8", fontSize: "17px", marginTop: "20px" }}>Premium, highly optimized mobile applications.</p>
        </div>

        <div id="apps" style={{ flex: "0.8", minWidth: "300px" }}>
          <div style={{ backgroundColor: "#111827", padding: "25px", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <img src="/mandir.jpg" alt="Digital Mandir" style={{ width: "100%", borderRadius: "16px", marginBottom: "20px" }} />
            <h3 style={{ fontSize: "28px", fontWeight: "800" }}>Digital Mandir</h3>
            <a href="/digital_mandir.apk" download style={{ display: "block", backgroundColor: "#fb923c", color: "#fff", padding: "12px", borderRadius: "14px", textAlign: "center", textDecoration: "none", fontWeight: "bold", marginTop: "15px" }}>Download APK</a>
            <Link to="/payment" style={{ display: "block", marginTop: "12px", color: "#fb923c", border: "1px solid rgba(251, 146, 60, 0.3)", padding: "12px", borderRadius: "14px", textAlign: "center", textDecoration: "none", fontWeight: "bold" }}>Upgrade to Premium</Link>
          </div>
        </div>
      </main>

      <footer style={{ marginTop: "80px", padding: "50px", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <p style={{ color: "#64748b" }}>© 2026 SS Studio. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;