import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import DigitalMandir from "./pages/DigitalMandir";
import YouMustKnow from "./pages/YouMustKnow";

import "./App.css";

function HomePage() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logoBox">
          <img src="/logo.png" alt="logo" />
          <span>SS STUDIO</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#apps">My Apps</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img
          src="/profile.png"
          alt="Samit Singh"
          className="profileImg"
        />

        <h1>Samit Singh</h1>

        <h3>Software & App Developer</h3>

        <p>
          Passionate Flutter and Android developer focused on
          building useful, modern and user-friendly mobile
          applications.
        </p>

        <div className="heroButtons">
          <a href="#apps" className="primaryBtn">
            View My Apps
          </a>

          <a href="#contact" className="secondaryBtn">
            Contact Me
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>

        <div className="aboutCard">
          <p>
            I am Samit Singh, a software and mobile application
            developer. I create Android, Flutter and Web
            applications focused on productivity, learning,
            spirituality and useful digital experiences.
          </p>

          <div className="skills">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Firebase</span>
            <span>Android</span>
            <span>React</span>
            <span>Web Development</span>
          </div>
        </div>
      </section>

      <section className="appsSection" id="apps">
        <h2>My Applications</h2>

        <div className="appsMenu">
          <Link
            to="/digital-mandir"
            className="appMenuBtn"
          >
            <span>📱 Digital Mandir</span>
            <span>→</span>
          </Link>

          <Link
            to="/you-must-know"
            className="appMenuBtn"
          >
            <span>📘 You Must Know</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <h2>Contact</h2>

        <div className="contactCard">
          <p>Email</p>

          <br />

          <a href="mailto:tinnu.maan@gmail.com">
            tinnu.maan@gmail.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <h3>SS Studio</h3>

        <p>
          Building useful Android and Flutter applications.
        </p>

        <div className="footerLinks">
          <a
            href="/privacy-policy.html"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-conditions.html"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </a>
        </div>

        <p>
          Contact: tinnu.maan@gmail.com
        </p>

        <p>
          © 2026 SS Studio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/digital-mandir"
          element={<DigitalMandir />}
        />

        <Route
          path="/you-must-know"
          element={<YouMustKnow />}
        />
      </Routes>
    </Router>
  );
}

export default App;