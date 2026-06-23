import React from "react";

export default function DigitalMandir() {
  const openUPI = () => {
    window.location.href =
      "upi://pay?pa=9699445148@ybl&tn=Digital Mandir Support";
  };

  return (
    <div className="pageContainer">
      <div className="detailCard">

        <img
          src="/mandir.jpg"
          alt="Digital Mandir"
          className="bannerImage"
        />

        <h1>Digital Mandir</h1>

        <p className="appDesc">
          Your digital companion for daily spiritual activities,
          darshan, aartis and devotional content.
        </p>

        <h2>Features</h2>

        <ul className="featureList">
          <li>Daily Darshan</li>
          <li>Aarti Collection</li>
          <li>Bhajan Audio</li>
          <li>Temple Information</li>
          <li>Festival Updates</li>
        </ul>

        <a
          href="/digital_mandir.apk"
          download
          className="downloadBtn"
        >
          Download APK
        </a>

        <div className="supportBox">
          <h2>❤️ Support Development</h2>

          <p>
            If you enjoy using Digital Mandir and would like
            to support future development, you can make a
            voluntary contribution.
          </p>

          <p className="upiText">
            UPI ID: 9699445148@ybl
          </p>

          <button
            onClick={openUPI}
            className="supportBtn"
          >
            Support via UPI
          </button>
        </div>

        <div className="policySection">
          <h2>Privacy Policy</h2>

          <p>
            Digital Mandir does not collect, store, sell,
            rent or share personal information.
          </p>

          <a
            href="/privacy-policy.html"
            target="_blank"
            rel="noreferrer"
          >
            View Full Privacy Policy
          </a>
        </div>

      </div>
    </div>
  );
}