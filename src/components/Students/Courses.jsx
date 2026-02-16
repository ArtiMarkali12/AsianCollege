import React from "react";
import "./Courses.css";
import heroImg from "../../assets/students/courses.png";
import com from "../../assets/students/com.png";
import art from "../../assets/students/art.png";
import sci from "../../assets/students/sci.png"
import { Link } from "react-router-dom";
function Courses() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="courses-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>Courses</h1>
            <div className="breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>Student Corner</span>
              <span>›</span>
              <span className="active">Courses</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Courses</h2>
          <h3 className="degree-title">Bachelor</h3>

          <div className="courses-grid">
           

            {/* Card 1 */}
            <div className="course-card">
              <div className="course-img">
                <img src={com} alt="BCom" />
              </div>
              <div className="course-content">
                <h4>B.Com – Banking, Costing, Marketing</h4>
                <p>
                  Three years degree program under NEP 2020 with strong
                  foundation in commerce and finance.
                </p>
               <Link to="/students/courses/bcom">
                 <button>View Details</button>
             </Link>
              </div>
            </div>

 {/* Card 2 */}
            <div className="course-card">
              <div className="course-img">
                <img src={art} alt="BA" />
              </div>
              <div className="course-content">
                <h4>BA – Economics & Political Science</h4>
                <p>
                  Undergraduate program focusing on economics systems,
                  political theory and public administration.
                </p>
              <Link to="/students/courses/art">
                 <button>View Details</button>
             </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="course-card">
              <div className="course-img">
                <img src={sci} alt="BSc" />
              </div>
              <div className="course-content">
                <h4>B.Sc – Microbiology, Electronics, Chemistry</h4>
                <p>
                  Science based undergraduate program focusing on practical
                  and research-oriented subjects.
                </p>
                  <Link to="/students/courses/sci">
                 <button>View Details</button>
             </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
