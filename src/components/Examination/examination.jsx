import React, { useEffect } from "react";
import "./Examination.css";

const examinations = [
  { title: "Manual of Examinations" },
  { title: "Examination Schedule" },
  { title: "Examination Time Table" },
  { title: "Examination Notification" },
  {
    title: "Certificate Services",
    note: "Available for Arts & Commerce students of large colleges only",
  },
];
const timeTable = [
  {
    exam: "Mathematics - Class 10",
    date: "10 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
  },
  {
    exam: "Science - Class 10",
    date: "12 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
  },
  {
    exam: "English - Class 10",
    date: "15 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
  },
  {
    exam: "Social Science - Class 10",
    date: "18 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
  },
  {
    exam: "Mathematics - Class 12",
    date: "20 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:30 PM",
  },
  {
    exam: "Physics - Class 12",
    date: "22 Feb 2026",
    startTime: "10:00 AM",
    endTime: "1:30 PM",
  },
];
const services = [
  {
    title: "Board Exam Certificates",
    description:
      "Get your official board exam certificates verified and issued quickly.",
    color: "#FF6B6B",
  },
  {
    title: "Degree Certificates",
    description:
      "Apply for your college or university degree certificates easily.",
    color: "#4ECDC4",
  },
  {
    title: "Skill Certification",
    description:
      "Professional and skill-based certifications issued on demand.",
    color: "#FFD93D",
  },
  {
    title: "Duplicate Certificates",
    description: "Request duplicate copies of lost or damaged certificates.",
    color: "#1A535C",
  },
];

const schedule = [
  {
    exam: "Board Exams - Class 10",
    date: "15 March 2026",
    time: "10:00 AM - 1:00 PM",
  },
  {
    exam: "Board Exams - Class 12",
    date: "18 March 2026",
    time: "10:00 AM - 1:30 PM",
  },
  {
    exam: "Competitive Exam - SSC",
    date: "25 March 2026",
    time: "9:00 AM - 12:00 PM",
  },
  {
    exam: "Certification Exam - Java",
    date: "30 March 2026",
    time: "2:00 PM - 5:00 PM",
  },
];
const manuals = [
  {
    title: "Board Exams",
    description: "Detailed guide for all state and central board examinations.",
  },
  {
    title: "Competitive Exams",
    description:
      "Preparation manual for competitive exams like UPSC, SSC, Banking, etc.",
  },
  {
    title: "Certification Exams",
    description:
      "Step-by-step manual for professional and skill-based certifications.",
  },
];

function Examination() {
  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="examination-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Manual of Examinations</h2>
          <div className="manuals-grid">
            {manuals.map((manual, index) => (
              <div key={index} className="manual-card animate-on-scroll">
                <h3>{manual.title}</h3>
                <p>{manual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exam-schedule-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Examination Schedule</h2>
          <div className="table-responsive">
            <table className="exam-table animate-on-scroll">
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index}>
                    <td>{item.exam}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="exam-timetable-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Examination Time Table</h2>
          <div className="table-responsive">
            <table className="timetable-table animate-on-scroll">
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {timeTable.map((item, index) => (
                  <tr key={index}>
                    <td>{item.exam}</td>
                    <td>{item.date}</td>
                    <td>{item.startTime}</td>
                    <td>{item.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="certificate-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Certificate Services</h2>
          <div className="cards-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card animate-on-scroll"
                style={{ borderTop: `5px solid ${service.color}` }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Examination;
