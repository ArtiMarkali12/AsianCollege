import React from "react";
import "./sci.css";
import heroImg from "../../assets/students/courses.png"; // तुझी hero image path

function Bsc() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="bsc-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>B.Sc</h1>
            <p>Microbiology, Electronics & Chemistry</p>
          </div>
        </div>
      </section>

      {/* ================= COURSE DETAILS ================= */}
      <section className="bsc-section">
        <div className="container">

          <h2>About the Course</h2>
          <p>
            Bachelor of Science (B.Sc) is a three-year undergraduate program
            designed to provide strong scientific foundation and practical
            knowledge in Microbiology, Electronics and Chemistry. The course
            focuses on laboratory work, research skills and real-world
            applications in science and technology sectors.
          </p>

          {/* Course Info */}
          <div className="info-grid">
            <div className="info-card">
              <h3>Duration</h3>
              <p>3 Years (6 Semesters)</p>
            </div>

            <div className="info-card">
              <h3>Eligibility</h3>
              <p>12th Pass (Science Stream)</p>
            </div>

            <div className="info-card">
              <h3>Pattern</h3>
              <p>NEP 2020 | CBCS System</p>
            </div>
          </div>

          {/* Microbiology */}
          <h2 className="mt">Microbiology</h2>
          <ul className="subject-list">
            <li>General Microbiology</li>
            <li>Medical Microbiology</li>
            <li>Industrial Microbiology</li>
            <li>Immunology</li>
            <li>Biotechnology Basics</li>
            <li>Laboratory Techniques</li>
          </ul>

          {/* Electronics */}
          <h2 className="mt">Electronics</h2>
          <ul className="subject-list">
            <li>Basic Electronics</li>
            <li>Digital Electronics</li>
            <li>Microprocessors</li>
            <li>Circuit Theory</li>
            <li>Embedded Systems</li>
            <li>Communication Systems</li>
          </ul>

          {/* Chemistry */}
          <h2 className="mt">Chemistry</h2>
          <ul className="subject-list">
            <li>Organic Chemistry</li>
            <li>Inorganic Chemistry</li>
            <li>Physical Chemistry</li>
            <li>Analytical Chemistry</li>
            <li>Environmental Chemistry</li>
            <li>Industrial Chemistry</li>
          </ul>

          {/* Skills */}
          <h2 className="mt">Skills Developed</h2>
          <div className="skills-grid">
            <div>Laboratory Skills</div>
            <div>Scientific Research</div>
            <div>Problem Solving</div>
            <div>Technical Knowledge</div>
            <div>Data Analysis</div>
            <div>Innovation Thinking</div>
          </div>

          {/* Career */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">Research Scientist</div>
            <div className="career-card">Lab Technician</div>
            <div className="career-card">Quality Control Officer</div>
            <div className="career-card">Electronics Engineer</div>
            <div className="career-card">Chemical Analyst</div>
            <div className="career-card">Pharmaceutical Industry</div>
          </div>

          <h2 className="mt">Salary Scope</h2>
          <p>
            Average starting salary ranges between <strong>₹3 LPA – ₹10 LPA</strong>
            depending on specialization and experience. Research and technical
            fields offer strong growth opportunities in India and abroad.
          </p>

        </div>
      </section>
    </>
  );
}

export default Bsc;
