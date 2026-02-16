import React from "react";
import "./art.css";
import heroImg from "../../assets/students/courses.png"; // तुझी hero image path

function Art() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="ba-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>BA</h1>
            <p>Economics & Political Science</p>
          </div>
        </div>
      </section>

      {/* ================= COURSE DETAILS ================= */}
      <section className="ba-section">
        <div className="container">

          <h2>About the Course</h2>
          <p>
            Bachelor of Arts (BA) in Economics and Political Science is a
            three-year undergraduate program designed to provide deep
            understanding of economic systems, public policies, governance,
            political theory and international relations. The course builds
            analytical, research and critical thinking skills essential for
            competitive exams and public administration careers.
          </p>

          {/* Course Info Cards */}
          <div className="info-grid">
            <div className="info-card">
              <h3>Duration</h3>
              <p>3 Years (6 Semesters)</p>
            </div>

            <div className="info-card">
              <h3>Eligibility</h3>
              <p>12th Pass (Any Stream)</p>
            </div>

            <div className="info-card">
              <h3>Pattern</h3>
              <p>NEP 2020 | CBCS System</p>
            </div>
          </div>

          {/* Economics Section */}
          <h2 className="mt">Economics Subjects</h2>
          <div className="subjects">
            <ul>
              <li>Micro Economics</li>
              <li>Macro Economics</li>
              <li>Indian Economy</li>
              <li>Public Finance</li>
              <li>International Trade</li>
              <li>Banking & Monetary Policy</li>
            </ul>
          </div>

          {/* Political Science Section */}
          <h2 className="mt">Political Science Subjects</h2>
          <div className="subjects">
            <ul>
              <li>Political Theory</li>
              <li>Indian Constitution</li>
              <li>Public Administration</li>
              <li>International Relations</li>
              <li>Human Rights</li>
              <li>Democracy & Governance</li>
            </ul>
          </div>

          {/* Skills */}
          <h2 className="mt">Skills Developed</h2>
          <div className="skills-grid">
            <div>Analytical Thinking</div>
            <div>Policy Analysis</div>
            <div>Research Skills</div>
            <div>Data Interpretation</div>
            <div>Political Awareness</div>
            <div>Decision Making</div>
          </div>

          {/* Career */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">UPSC / MPSC</div>
            <div className="career-card">Banking Officer</div>
            <div className="career-card">Policy Analyst</div>
            <div className="career-card">Political Analyst</div>
            <div className="career-card">NGO & Development Sector</div>
            <div className="career-card">Civil Services</div>
          </div>

          <h2 className="mt">Salary Scope</h2>
          <p>
            Average salary ranges between <strong>₹3 LPA – ₹9 LPA</strong>
            depending on career path and experience. Government sector jobs
            offer additional allowances and long-term job security.
          </p>

        </div>
      </section>
    </>
  );
}

export default Art;
