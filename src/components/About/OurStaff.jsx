import React from "react";
import "./OurStaff.css";

const staff = [
  {
    name: "Dr. Amit Saple",
    role: "Principal",
    img: "https://via.placeholder.com/120",
  },
  {
    name: "Mr. Anand Saple",
    role: "Vice Principal",
    img: "https://via.placeholder.com/120",
  },
  {
    name: "Mr. Anil Saple",
    role: "HOD - Management",
    img: "https://via.placeholder.com/120",
  },
  {
    name: "Shruti Bage",
    role: "HOD - Engineering",
    img: "https://via.placeholder.com/120",
  },
  {
    name: "Dr. Swati Singh",
    role: "HOD - Science",
    img: "https://via.placeholder.com/120",
  },
];

export default function OurStaff() {
  return (
    <div className="page">

      {/* Top Navbar */}
     

      {/* Banner */}
      <div className="banner">
        <div className="overlay">
          <h1>Our Staff</h1>
          <p>Meet Our Experienced Faculty Members</p>
        </div>
      </div>

      <div className="main">

        {/* Sidebar */}
        <div className="sidebar">
          <h3>About</h3>
          <ul>
            <li>The College</li>
            <li>President's Desk</li>
            <li>Vision</li>
            <li>Mission</li>
            <li className="active">Our Staff</li>
            <li>Achievements</li>
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          <div className="tabs">
            <button className="active-tab">Management</button>
            <button>Arts</button>
            <button>Commerce</button>
            <button>Science</button>
          </div>

          <div className="staff-grid">
            {staff.map((item, index) => (
              <div
                className="staff-card"
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="img-box">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                  <button>View Profile</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
