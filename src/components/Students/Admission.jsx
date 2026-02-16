import React from "react";
import "./Admission.css";
import heroImage from "../../assets/students/asian.png";
import artsImg from "../../assets/students/ba.png";
import commerceImg from "../../assets/students/bcom.png";
import scienceImg from "../../assets/students/bcs.png";

const Admission = () => {
  return (
    <div className="admission-page">

      {/* ================= HERO SECTION ================= */}
        <section
      className="admission-hero"
      style={{ backgroundImage: `url(${heroImage})` }}   // 👈 dynamic background
    >
      <div className="hero-overlay">
      
      </div>
    </section>

  {/* ================= COURSES SECTION ================= */}
<section className="courses-section">
  <h2 className="section-title">
    Sr College Admission Circular 2026 - 2027
  </h2>

  {/* ===== TOP IMAGES ===== */}
  <div className="course-images-row">
    <div className="course-image-box">
      <img src={artsImg} alt="Arts" />
      <h3>Arts</h3>
    </div>

    <div className="course-image-box">
      <img src={commerceImg} alt="Commerce" />
      <h3>Commerce</h3>
    </div>

    <div className="course-image-box">
      <img src={scienceImg} alt="Science" />
      <h3>Science</h3>
    </div>
  </div>

  {/* ===== COURSE DETAILS ===== */}
  <div className="course-details-wrapper">

    <div className="course-detail">
      <h3>🎓 Bachelor of Arts (BA)</h3>
      <p>Specialization in Economics & Political Science with career opportunities in Civil Services, Teaching & Research.</p>
    </div>

    <div className="course-detail">
      <h3>💼 Bachelor of Commerce (B.Com)</h3>
      <p>Focus on Banking, Costing & Marketing with professional growth in Finance, CA, MBA & Corporate Sector.</p>
    </div>

    <div className="course-detail">
      <h3>🔬 Bachelor of Science (B.Sc)</h3>
      <p>Advanced studies in Microbiology, Electronics & Chemistry with strong research & technical career scope.</p>
    </div>

  </div>
</section>


{/* ================= INFORMATION SECTION ================= */}
<section className="info-section p-rg-3">
  <div className="info-container">

    <h2>Admission Information</h2>

    <div className="info-grid">

      <div className="info-card">
        <h3>📘 Prospectus</h3>
        <p>
          College Admission Prospectus is available on our official website.
        </p>
        <a
          href="http://asianacademypune.ac.in"
          target="_blank"
          rel="noreferrer"
          className="info-btn "
        >
          Visit Website
        </a>
      </div>

      <div className="info-card">
        <h3>📝 Admission Process</h3>
        <ul>
          <li>Fill online admission form.</li>
          <li>Use ACTIVE mobile number & Gmail ID.</li>
          <li>Complete process is online.</li>
          <li>Support: asianacademypune@gmail.com</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>📂 Required Documents</h3>
        <ul>
          <li>Aadhar Card</li>
          <li>12th Marksheet</li>
          <li>Leaving Certificate</li>
          <li>Photo & Signature</li>
          <li>Caste & Income Certificate (if applicable)</li>
        </ul>
      </div>

    </div>

    <div className="info-note">
      ⚠ Admission will be provisional until verification of original documents.
    </div>

  </div>
</section>


    </div>
  );
};

export default Admission;
