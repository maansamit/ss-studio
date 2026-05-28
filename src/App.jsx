import React from 'react';

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0b0f19",
        backgroundImage: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent), radial-gradient(circle at bottom left, rgba(251, 146, 60, 0.08), transparent)",
        minHeight: "100vh",
        color: "#f8fafc",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: "0",
        margin: "0",
        boxSizing: "border-box"
      }}
    >
      {/* GLOBAL HOVER EFFECTS AND RESPONSIVE STYLES */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; html { scroll-behavior: smooth; } }
        body { background-color: #0b0f19; }
        .nav-link:hover { color: #fb923c !important; }
        .download-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(251, 146, 60, 0.5) !important; }
        .app-card:hover { transform: translateY(-5px); border-color: rgba(251, 146, 60, 0.3) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 30px rgba(251, 146, 60, 0.15) !important; }
        @media (max-width: 968px) {
          .hero-container { flex-direction: column !important; text-align: center !important; padding: 40px 20px !important; }
          .left-column { max-width: 100% !important; margin-bottom: 40px !important; align-items: center !important; }
          .profile-box { margin: 0 auto !important; }
          .app-title-block { text-align: center !important; }
        }
      `}</style>

      {/* STICKY GLASSMORPHIC HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(11, 15, 25, 0.8)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          position: "sticky",
          top: "0",
          zIndex: "100"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "35px", height: "35px" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px", color: "#fb923c" }}>
            SS STUDIO 🚩
          </span>
        </div>
        <nav style={{ display: "flex", gap: "25px" }}>
          <a href="#" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px", fontWeight: "500", transition: "color 0.2s" }}>Home</a>
          <a href="#apps" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px", fontWeight: "500", transition: "color 0.2s" }}>My Apps</a>
          <a href="#footer" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px", fontWeight: "500", transition: "color 0.2s" }}>Contact</a>
        </nav>
      </header>

      {/* SPLIT HERO SECTION */}
      <main
        className="hero-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px",
          gap: "60px"
        }}
      >
        {/* LEFT COLUMN: DEVELOPER BIO & BRANDING */}
        <div
          className="left-column"
          style={{
            flex: "1.1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            maxWidth: "520px"
          }}
        >
          {/* PROFILE BOX */}
          <div
            className="profile-box"
            style={{
              backgroundColor: "rgba(30, 41, 59, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "25px",
              borderRadius: "24px",
              width: "100%",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              marginBottom: "35px"
            }}
          >
            <img
              src="/profile.png"
              alt="Samit Singh"
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #3b82f6",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                marginBottom: "12px"
              }}
            />
            <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "4px", color: "#f8fafc" }}>
              Samit Singh
            </h2>
            <p style={{ fontSize: "13px", color: "#3b82f6", fontWeight: "600", letterSpacing: "1.5px", marginBottom: "12px" }}>
              SOFTWARE & APP DEVELOPER
            </p>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "22px" }}>
              Crafting premium, highly optimized mobile applications and exceptionally secure modern digital experiences.
            </p>
          </div>

          <h1 style={{ fontSize: "46px", fontWeight: "800", lineHeight: "54px", marginBottom: "15px", color: "#f8fafc", textAlign: "left" }}>
            Next-Gen Apps Built For <span style={{ color: "#fb923c" }}>Performance</span>.
          </h1>
          <p style={{ fontSize: "17px", color: "#94a3b8", lineHeight: "26px", textAlign: "left" }}>
            Explore my creations built on optimization, clean layouts, and complete privacy frameworks.
          </p>
        </div>

        {/* RIGHT COLUMN: HIGH-END APP CARD */}
        <div
          id="apps"
          style={{
            flex: "0.9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            className="app-card"
            style={{
              backgroundColor: "#111827",
              backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.4) 0%, rgba(17, 24, 39, 1) 100%)",
              width: "100%",
              maxWidth: "380px",
              padding: "25px",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            {/* APP BANNER FRAME */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px", marginBottom: "20px", boxShadow: "0 8px 16px rgba(0,0,0,0.4)" }}>
              <img
                src="/mandir.jpg"
                alt="Digital Mandir"
                style={{
                  width: "100%",
                  display: "block"
                }}
              />
              <div style={{ position: "absolute", top: "12px", right: "12px", backgroundColor: "rgba(11, 15, 25, 0.85)", backdropFilter: "blur(6px)", padding: "4px 10px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", fontSize: "11px", color: "#fb923c", fontWeight: "bold" }}>
                v1.0 Live
              </div>
            </div>

            {/* CARD BODY */}
            <div className="app-title-block" style={{ textAlign: "left" }}>
              <h3 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "4px", color: "#f8fafc" }}>
                Digital Mandir
              </h3>
              <p style={{ fontSize: "14px", color: "#fb923c", fontWeight: "600", marginBottom: "15px" }}>
                🚩 Premium Privacy-First Devotional App
              </p>
              <p style={{ color: "#94a3b8", fontSize: "13.5px", lineHeight: "22px", marginBottom: "18px" }}>
                Your comprehensive pocket temple for dynamic daily darshan, background streaming aartis with integrated timeline sliders, and personalized shlokas.
              </p>
            </div>

            {/* COMPACT FEATURE LIST */}
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.04)", padding: "12px 15px", borderRadius: "14px", marginBottom: "18px", textAlign: "left" }}>
              <span style={{ fontSize: "13px", fontWeight: "bold", color: "#f8fafc", display: "block", marginBottom: "8px" }}>
                🚀 Installed Upgrades:
              </span>
              <ul style={{ listStyleType: "none", color: "#cbd5e1", fontSize: "13px", lineHeight: "20px" }}>
                <li style={{ marginBottom: "6px", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  <span>📿</span> <span><strong>108 Jaap Mala Counter</strong> with premium tactical haptic vibration response.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  <span>🎵</span> <span><strong>Advanced Audio Engine</strong> equipped with custom live seek tracking sliders.</span>
                </li>
              </ul>
            </div>

            {/* TRUST PRIVACY CARD */}
            <div style={{ backgroundColor: "rgba(251, 146, 60, 0.05)", borderLeft: "4px solid #fb923c", padding: "12px 15px", borderRadius: "6px", marginBottom: "22px", textAlign: "left" }}>
              <span style={{ color: "#fdbb74", fontWeight: "bold", fontSize: "13px", display: "block", marginBottom: "4px" }}>
                🔒 Zero-Permission Trust Promise
              </span>
              <p style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "17px" }}>
                Requires <strong style={{ color: "#fff" }}>ZERO PERMISSIONS</strong>. Absolutely no background tracking or hidden scripts. No access to your Location, Storage, Photos, or Contacts.
              </p>
            </div>

            {/* DOWNLOADING BUTTON */}
            <a
              href="/digital_mandir.apk"
              download
              className="download-btn"
              style={{
                display: "block",
                backgroundColor: "#fb923c",
                color: "#ffffff",
                padding: "12px 0",
                borderRadius: "14px",
                fontSize: "15px",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 4px 14px rgba(251, 146, 60, 0.3)",
                transition: "all 0.2s ease",
                cursor: "pointer"
              }}
            >
              Download App Directly 🚩
            </a>
            <span style={{ display: "block", fontSize: "11px", color: "#64748b", marginTop: "8px", textAlign: "center" }}>
              Optimized Lightweight APK (~50MB)
            </span>
          </div>
        </div>
      </main>

      {/* PROFESSIONAL CONTACT & FOOTER SECTION */}
      <footer
        id="footer"
        style={{
          marginTop: "80px",
          padding: "50px 20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          backgroundColor: "#070a12",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "30px" }}>
          <h4 style={{ fontSize: "22px", fontWeight: "700", color: "#fb923c", marginBottom: "10px" }}>
            Get In Touch
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>
            Have any questions, feedback, or business inquiries about Digital Mandir? Feel free to reach out!
          </p>
          
          {/* PERSONALIZED EMAIL BUTTON */}
          <a 
            href="mailto:tinnu.maan@gmail.com" 
            style={{ 
              display: "inline-block", 
              color: "#f8fafc", 
              textDecoration: "none", 
              backgroundColor: "rgba(59, 130, 246, 0.1)", 
              border: "1px solid rgba(59, 130, 246, 0.2)", 
              padding: "10px 20px", 
              borderRadius: "10px", 
              fontSize: "14px", 
              fontWeight: "600",
              transition: "all 0.2s" 
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'}
          >
            ✉️ tinnu.maan@gmail.com
          </a>
        </div>

        {/* COPYRIGHT LINE */}
        <p style={{ color: "#64748b", fontSize: "13px", borderTop: "1px solid rgba(255,255,255,0.02)", paddingTop: "20px" }}>
          © 2026 SS Studio. Built with total architectural security. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;