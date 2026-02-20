import React, { useState } from "react";
import "./NoticeBoard.css";

import noticeImg1 from "../../assets/students/notise.png";
import noticeImg2 from "../../assets/students/notise2.png";
import noticeImg3 from "../../assets/students/notise3.png";

const notices = [
  {
    id: 1,
    date: "12 Feb 2026",
    title: "Admission Open 2026-27",
    description: "Online admission process has started for all streams.",
    file: "#",
    image: noticeImg1,
    isNew: true,
  },
  {
    id: 2,
    date: "10 Feb 2026",
    title: "Exam Schedule Released",
    description: "Final semester exam timetable is now available.",
    file: "#",
    image: noticeImg2,
    isNew: false,
  },
  {
    id: 3,
    date: "05 Feb 2026",
    title: "Scholarship Notice",
    description: "Students can apply for government scholarship scheme.",
    file: "#",
    image: noticeImg3,
    isNew: true,
  },
];

const NoticeBoard = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="notice-page">

      {/* ================= TICKER ================= */}
      <div className="notice-ticker">
        <div className="ticker-track">
          📢 Admission Open 2026-27 | 📝 Exam Form Last Date 25 Feb | 🎓 Scholarship Notice Available
        </div>
      </div>

      <h2 className="main-title">College Notice Board</h2>

      {/* ================= CLASSIC + SCROLLABLE ================= */}
      <div className="classic-section">
        <div className="classic-left">
          <h3>Latest Notices</h3>
        </div>

        <div className="classic-right">
          {notices.map((notice) => (
            <div key={notice.id} className="notice-row">
              <span className="date">{notice.date}</span>
              <span className="title">
                {notice.title}
                {notice.isNew && <span className="new-badge">NEW</span>}
              </span>
              <a href={notice.file} className="download-btn">PDF</a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODERN IMAGE CARDS ================= */}
      <div className="card-section">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-card">
            <img src={notice.image} alt={notice.title} />
            <div className="card-content">
              <h4>{notice.title}</h4>
              <p className="card-date">{notice.date}</p>
              <p>{notice.description}</p>
             
            </div>
          </div>
        ))}
      </div>

      {/* ================= ACCORDION ================= */}
      <div className="accordion-section">
        <h3>Detailed Notices</h3>
        {notices.map((notice) => (
          <div key={notice.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() =>
                setActiveId(activeId === notice.id ? null : notice.id)
              }
            >
              ▶ {notice.title}
            </div>
            {activeId === notice.id && (
              <div className="accordion-body">
                <p>{notice.description}</p>
                <a href={notice.file} className="download-btn">Download PDF</a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="timeline-section">
        <h3>Notice Timeline</h3>
        {notices.map((notice) => (
          <div key={notice.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div>
              <h4>{notice.title}</h4>
              <span>{notice.date}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NoticeBoard;