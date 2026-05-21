function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="SS Studio Logo"
        style={{
          width: "140px",
          marginBottom: "20px",
        }}
      />

      {/* WEBSITE NAME */}
      <span style={{ fontSize: "60px", fontWeight: "bold", display: "block", marginBottom: "20px" }}>
        SS Studio
      </span>

      {/* TAGLINE */}
      <p
        style={{
          fontSize: "22px",
          color: "#94a3b8",
          marginBottom: "20px",
        }}
      >
        Apps & Digital Experiences
      </p>

      {/* PROFILE SECTION */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <img
          src="/profile.png"
          alt="Samit Singh"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3b82f6",
            boxShadow: "0 0 25px rgba(59,130,246,0.5)",
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          Samit Singh
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#cbd5e1",
          }}
        >
          Software & App Developer
        </p>
      </div>

      {/* APPS SECTION */}
      <h2
        style={{
          fontSize: "40px",
          marginBottom: "30px",
        }}
      >
        My Apps
      </h2>

      {/* APP CARD */}
      <div
        style={{
          backgroundColor: "#1e293b",
          width: "320px",
          margin: "auto",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(59,130,246,0.3)",
        }}
      >
        {/* APP IMAGE */}
        <img
          src="/mandir.jpg"
          alt="Digital Mandir"
          style={{
            width: "100%",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        />

        {/* APP NAME */}
        <h3
          style={{
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          Digital Mandir
        </h3>

        {/* APP DESCRIPTION (SHORT & CRISP) */}
        <div style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: "20px", lineHeight: "24px", textAlign: "left" }}>
          <p style={{ fontSize: "16px", color: "#fdba74", fontWeight: "600", marginBottom: "10px", textAlign: "center" }}>
            🚩 Premium Privacy-First Devotional App
          </p>
          
          <p style={{ color: "#94a3b8", marginBottom: "15px", textAlign: "center" }}>
            Your pocket temple for daily darshan, audio aartis with live sliders, and dynamic daily mantras.
          </p>

          {/* KEY FEATURES */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "10px 15px", borderRadius: "10px", marginBottom: "15px" }}>
            🔑 <strong>New Features:</strong>
            <ul style={{ paddingLeft: "15px", margin: "5px 0 0 0", color: "#cbd5e1" }}>
              <li>📿 108 Jaap Mala with vibration feedback.</li>
              <li>🎵 Advanced audio player with seek-slider.</li>
            </ul>
          </div>

          {/* PRIVACY TRUST SIGN */}
          <div style={{ borderLeft: "3px solid #fb923c", paddingLeft: "10px", margin: "15px 0" }}>
            🔒 <strong>100% Privacy Promise:</strong><br />
            Requires <span style={{ color: "#fb923c", fontWeight: "bold" }}>ZERO permissions</span>. No access to your Photos, Location, Storage, or Contacts. Pure, ad-free, and safe!
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div style={{ marginTop: "15px" }}>
          <a
            href="/digital_mandir.apk"
            download
            style={{
              display: "inline-block",
              padding: "12px 35px",
              borderRadius: "30px",
              backgroundColor: "#fb923c",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(251, 146, 60, 0.4)"
            }}
          >
            Download App 🚩
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <p
        style={{
          marginTop: "80px",
          color: "#64748b",
          fontSize: "15px",
        }}
      >
        © 2026 SS Studio. All Rights Reserved.
      </p>
    </div>
  );
}

export default App;