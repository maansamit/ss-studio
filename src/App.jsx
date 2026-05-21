function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial",
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
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        SS Studio
      </h1>

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

        {/* APP DESCRIPTION */}
        <p
          style={{
            color: "#cbd5e1",
            fontSize: "17px",
            marginBottom: "20px",
            lineHeight: "28px",
          }}
        >
          Digital Mandir is a devotional mobile application where users
          can explore gods, view divine images, and listen to devotional
          aartis anytime.
        </p>

        {/* DOWNLOAD BUTTON */}
<a href="digital_mandir.apk" download>Download App🚩</a>
          <button
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#3b82f6",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Download APK
          </button>
        </a>
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