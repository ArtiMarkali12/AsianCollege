import React from "react";
import "./Bcom.css";
import heroImg from "../../assets/students/courses.png"// तुझी hero image path

function Bcom() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="bcom-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>B.Com</h1>
            <p>Banking, Costing & Marketing</p>
          </div>
        </div>
      </section>

      {/* ================= COURSE DETAILS ================= */}
      <section className="bcom-section">
        <div className="container">
          <h2>About the Course</h2>
          <p>
            Bachelor of Commerce (B.Com) is a three-year undergraduate degree
            program under NEP 2020 pattern. The course provides strong
            foundation in commerce, finance, accounting and business
            management with specialization in Banking, Costing and Marketing.
          </p>

          {/* Course Highlights */}
          <div className="info-grid">
            <div className="info-card">
              <h3>Duration</h3>
              <p>3 Years (6 Semesters)</p>
            </div>

            <div className="info-card">
              <h3>Eligibility</h3>
              <p>12th Pass (Commerce / Any Stream)</p>
            </div>

            <div className="info-card">
              <h3>Pattern</h3>
              <p>NEP 2020 | CBCS System</p>
            </div>
          </div>

          {/* Subjects Section */}
          <h2 className="mt">Core Subjects</h2>

          <div className="subjects">
            <div>
              <h4>📌 Banking</h4>
              <ul>
                <li>Principles of Banking</li>
                <li>Indian Banking System</li>
                <li>RBI & Monetary Policy</li>
                <li>Digital Banking</li>
                <li>Loan & Credit Management</li>
              </ul>
            </div>

            <div>
              <h4>📌 Costing</h4>
              <ul>
                <li>Cost Accounting</li>
                <li>Material & Labour Cost</li>
                <li>Budgeting</li>
                <li>Marginal Costing</li>
                <li>Financial Analysis</li>
              </ul>
            </div>

            <div>
              <h4>📌 Marketing</h4>
              <ul>
                <li>Marketing Management</li>
                <li>Consumer Behaviour</li>
                <li>Brand Management</li>
                <li>Digital Marketing</li>
                <li>Market Research</li>
              </ul>
            </div>
          </div>

          {/* Career Section */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">Banking Officer</div>
            <div className="career-card">Accountant</div>
            <div className="career-card">Financial Analyst</div>
            <div className="career-card">Marketing Executive</div>
            <div className="career-card">Business Consultant</div>
          </div>

          {/* Salary */}
          <h2 className="mt">Salary Scope</h2>
          <p>
            Average salary ranges between <strong>₹3 LPA – ₹8 LPA</strong>
            depending on skills and experience. Government banking jobs offer
            additional benefits and job security.
          </p>
        </div>
      </section>
    </>
  );
}

export default Bcom;
