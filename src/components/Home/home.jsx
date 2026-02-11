import { useEffect, useState } from "react";
import "./home.css";
import Footer from "../Footer/footer";


const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
];
// 

// 

const Home = () => {
  /* ===== SLIDER STATE ===== */
  const [current, setCurrent] = useState(0);

  /* ===== EVENTS STATE ===== */
  const [eventIndex, setEventIndex] = useState(0);

  /* ===== AUTO IMAGE SLIDER ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* ===== EVENT NAVIGATION ===== */
  const nextEvent = () => {
    setEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setEventIndex((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };
const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
];

/* ================= EVENTS DATA ================= */
const events = [
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    date: "19 Jan 2026",
    title: "Funding Opportunities In Health Sciences",
    desc: "asian college, Pimpri Pune."
  },
  {
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    date: "16 Jan 2026",
    title: "Prosthodontist Day Celebration",
    desc: "asian  College "
  },
  {
    img: "https://images.unsplash.com/photo-1515165562835-c4c7b8b3d9f6",
    date: "16 Jan 2026",
    title:
      "Little Luminescence – illuminating Pediatric Prosthodontics",
    desc: "asian College, Pimpri Pune"
  },
  {
    img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
    date: "12 Jan 2026",
    title: "National Youth Day Celebration",
    desc: "asian College, Pimpri Pune"
  }
];

// 

// 
  return (
    <>
      {/* 🔵 Announcement Bar */}
      <div className="announcement-bar">
        <marquee>
          A Brand New Hostel at Asian Residency
        </marquee>
      </div>

       {/* 🖼️ Image Slider */}
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="college"
            className={
              index === current ? "slide active" : "slide"
            }
          />
        ))}

        <div className="slider-text">
          <h2>Smart India Hackathon 2024</h2>
          <p>Proud Moment for Asian College</p>
        </div>
      </div>
  {/* 🔔 Notifications Section */}
      <section className="notification-wrapper">
        <h2 className="notification-title">Notifications</h2>

        <div className="notification-box">
          {/* Left Panel */}
          <div className="notification-left">
            <div className="notify active">
              Admissions 2026-27
            </div>
            <div className="notify">
              Ph.D Programme Entrance Test 2025-26
            </div>
            <div className="notify">
              17th Convocation Notification
            </div>
          </div>

          {/* Center Content */}
          <div className="notification-center">
            <h3>
              Applications are invited for All India Proctor Based online
              <br />
              Entrance Test - 2026
            </h3>

            <div className="tag-buttons">
              <button>Biotech</button>
              <button>GBSRC</button>
              <button>School of Design</button>
              <button>Allied Health Sciences</button>
              <button>Science and Technology</button>
            </div>
          </div>

          {/* Right Banner */}
          <div className="notification-right">
            <div className="admission-badge">2025-26</div>
            <h3>ADMISSIONS OPEN</h3>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="student"
            />
            <div className="enquiry-tab">Enquiry</div>
          </div>
        </div>
      </section>
      {/* ================= ABOUT US SECTION ================= */}
<section className="about-wrapper">
  <div className="about-left">
    <img
      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
      alt="College Building"
      className="about-building"
    />

    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      alt="Student"
      className="about-student"
    />

    {/* <div className="est-year">EST 2003</div> */}
  </div>

  <div className="about-right">
    <h2 className="about-title">About Us</h2>
    <div className="title-line"></div>

    <p className="about-text">
      In 2003,asian college , Pune, was established
      as a "Deemed-to-be-University" under Section 3 of the UGC Act 1956.
      Over the years, the Vidyapeeth has grown exponentially and many more
      constituent Institutions have come into existence under its umbrella.
    </p>

    <div className="ranking-section">
      <div className="rank-card">
        <span className="rank-number">4th</span>
        <p>Dental Category</p>
      </div>

      <div className="rank-card">
        <span className="rank-number">12th</span>
        <p>Medical Category</p>
      </div>

      <div className="rank-card">
        <span className="rank-number">41st</span>
        <p>University Category</p>
      </div>
    </div>
  </div>

  <div className="enquiry-vertical">Enquiry</div>
</section>
{/* ================= DPU EVENTS SECTION ================= */}
 {/* ================= INFO CARDS SECTION ================= */}
<section className="info-section">
  <div className="info-card">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      alt="President"
    />
    <div className="info-content">
      <h3>President's Message</h3>
      <p>
        Today, the world is moving towards globalization. Increased
        competition among businesses has raised minimum competency levels
        of manpower. It has become almost important to generate quality
        and competent knowledge managers.
      </p>
      <button className="info-btn">Read More</button>
    </div>
  </div>

  <div className="info-card">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      alt="Media"
    />
    <div className="info-content">
      <h3>Media Coverage</h3>
      <p>
        As a premier higher education institution, Asian College regularly
        features in the news. From various events organised to feats
        accomplished by students, Asian College is a common sight in
        newspapers.
      </p>
      <button className="info-btn">View Coverages</button>
    </div>
  </div>

  <div className="info-card">
    <img
      src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe"
      alt="Achievements"
    />
    <div className="info-content">
      <h3>Achievements</h3>
      <p>
        Asian College is one of the top colleges in India. This is a direct
        result of the hard work and dedication of students and faculty.
        From awards to competitions, Asian has excelled in all fields.
      </p>
      <button className="info-btn">View Achievements</button>
    </div>
  </div>
</section>


{/* ================= QUICK LINKS SECTION ================= */}
<section className="quicklinks-section">
  <div className="quicklinks-overlay"></div>

  <div className="quicklinks-container">

    <div className="quick-card">
      <div className="icon-circle">📅</div>
      <h3>Examination Timetable</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📄</div>
      <h3>Examination Notification</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📘</div>
      <h3>Information Brochure</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📈</div>
      <h3>Extra-mural Funding<br />Opportunities</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📑</div>
      <h3>UGC Public<br />Self-Disclosure</h3>
    </div>

  </div>

  {/* Enquiry Button */}
  <div className="quick-enquiry">Enquiry</div>
</section>


{/* ================= NEWS / ANNOUNCEMENTS / UPDATES ================= */}
<section className="triple-section">

  {/* NEWS */}
  <div className="info-box">
    <div className="info-header">NEWS</div>

    <div className="info-body">
      <div className="info-item">
        <img src="https://via.placeholder.com/80x80" alt="" />
        <div>
          <h4>Sanvidhan Jagar abhiyan felicitation of teachers</h4>
          <p>
            On account of Mahatma Jyotiba Phule and Dr. Babasaheb Ambedkar Jayanti
            under Sanvidhan Jagar Abhiyan...
          </p>
        </div>
      </div>

      <div className="info-item">
        <img src="https://via.placeholder.com/80x80" alt="" />
        <div>
          <h4>Rajmata Jijau and Swami Vivekanand Jayanti</h4>
          <p>
            College has celebrated with students view, Elocution competition
            and Role play activity
          </p>
        </div>
      </div>

      <div className="info-item">
        <img src="https://via.placeholder.com/80x80" alt="" />
        <div>
          <h4>Netaji Subhash Chandra Bose Jayanti</h4>
          <p>Celebration of Netaji Subhash Chandra Bose Jayanti</p>
        </div>
      </div>
    </div>

    <button className="info-footer-btn">Read More</button>
  </div>

  {/* ANNOUNCEMENTS */}
  <div className="info-box">
    <div className="info-header">ANNOUNCEMENTS</div>

    <div className="info-body">
      <div className="info-item">
        <img src="https://via.placeholder.com/80x100" alt="" />
        <div>
          <h4>Certificate Course of React</h4>
          <p>Start Date: 05/01/2026</p>
        </div>
      </div>

      <div className="info-item">
        <img src="https://via.placeholder.com/80x100" alt="" />
        <div>
          <h4>Certificate Course of Agentic AI</h4>
          <p>Start Date: 15/12/2025</p>
        </div>
      </div>

      <div className="info-item">
        <img src="https://via.placeholder.com/80x100" alt="" />
        <div>
          <h4>VACANT SEATS</h4>
          <p>VACANT SEATS</p>
        </div>
      </div>

      <div className="info-item">
        <img src="https://via.placeholder.com/80x100" alt="" />
        <div>
          <h4>MERIT LIST OF BBA/BCA</h4>
          <p>INSTITUTE LEVEL</p>
        </div>
      </div>
    </div>

    <button className="info-footer-btn">Read More</button>
  </div>

  {/* PU UPDATES */}
  <div className="info-box">
    <div className="info-header">PU UPDATES</div>

    <div className="info-body">
      <div className="date-item">
        <div className="date-box">
          <span>APR</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>SPPU Exam Dates for March/April 2025</h4>
          <p>Exam Dates are available here</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>NOV</span>
          <strong>21</strong>
        </div>
        <div>
          <h4>Exam Dates for Various Courses Oct/Nov 2024</h4>
          <p>Dates for Oct/Nov 2024 are displayed on SPPU Website.</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>SEP</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>Exam Form Oct/Nov 2024</h4>
          <p>Exam Form to All Courses is open online</p>
        </div>
      </div>
    </div>

    <button className="info-footer-btn">Read More</button>
  </div>

</section>
    </>
    
  );
};

export default Home;
