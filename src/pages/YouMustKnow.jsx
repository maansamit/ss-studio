import React from "react";

export default function YouMustKnow() {
return ( <div className="pageContainer"> <div className="detailCard">

    <h1>You Must Know</h1>

    <p className="appDesc">
      Daily learning application designed to improve general awareness,
      technology knowledge, practical life skills and useful facts.
      Learn something new every day through carefully selected questions,
      explanations and knowledge-based exercises.
    </p>

    <h2 style={{ marginTop: "25px" }}>Features</h2>

    <ul className="featureList">
      <li>Daily 10 Questions</li>
      <li>Google Sign-In</li>
      <li>General Knowledge</li>
      <li>Science & Technology</li>
      <li>Current Affairs</li>
      <li>Practical Life Knowledge</li>
      <li>Daily Learning Habit</li>
      <li>Progress Review</li>
    </ul>

    <a
      href="/youmustknow.apk"
      className="downloadBtn"
      download
    >
      Download APK
    </a>

    <div className="policySection">
      <h2>Privacy Policy</h2>

      <p className="appDesc">
        You Must Know uses Google Sign-In for authentication.
        The application may collect your Google Name, Google Email
        Address and Firebase Authentication UID only for account
        identification and application functionality.
      </p>

      <p className="appDesc" style={{ marginTop: "12px" }}>
        No subscription is required.
        No advertisements are shown.
        No analytics services are used.
        Personal information is not sold, rented or shared with third parties.
      </p>

      <br />

      <a href="/privacy-policy-youmustknow.html">
        View Full Privacy Policy
      </a>
    </div>

  </div>
</div>

);
}
