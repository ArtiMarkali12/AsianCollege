import React, { useEffect } from "react";
import "./Placement.css";

const students = [
  {
    name: "Rahul Patil",
    company: "TCS",
    img: "https://via.placeholder.com/400x400",
  },
  {
    name: "Sneha Kulkarni",
    company: "Infosys",
    img: "https://via.placeholder.com/400x400",
  },
  {
    name: "Amit Sharma",
    company: "Wipro",
    img: "https://via.placeholder.com/400x400",
  },
  {
    name: "Priya Desai",
    company: "Capgemini",
    img: "https://via.placeholder.com/400x400",
  },
];

export default function Placement() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="placement-page">

      {/* Banner */}
      <div className="placement-banner">
        <div className="banner-content">
          <h1>Placement & Career Services</h1>
          <p>Gateway to Your Dream Career</p>
        </div>
      </div>

      <div className="container">

        {/* Students Section */}
        <section className="students-section reveal">
          <h2>Our Placed Students</h2>

          <div className="student-grid">
            {students.map((student, index) => (
              <div className="student-card" key={index}>
                <img src={student.img} alt={student.name} />
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <p>Placed at {student.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Content */}
        <section className="placement-content reveal">
          <h2>Placement Service provided to the Students</h2>

          <p>
            Asian College of Science and Commerce extends career guidance and
            campus placement which is a gateway to an aspired career and helps
            students to become competent in the world of cut-throat competition.
          </p>

          <p>
            Career services, soft skills development programs, professional
            training and aptitude sessions enhance student potential and create
            maximum opportunities for placement in the job market.
          </p>

          <p>
            On-campus recruitment provides a convenient way for corporates to
            interview students for permanent employment.
          </p>
        </section>

        {/* Alumni Section */}
        <section className="alumni-section reveal">
          <h2>Activities & Support from Alumni</h2>

          <ul>
            <li>Support in placement & training programs</li>
            <li>Project guidance & counseling sessions</li>
            <li>Group discussion & seminar sessions</li>
            <li>Mock interviews for final year students</li>
            <li>Pre-Placement Talks & Success Stories</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
