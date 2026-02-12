import React from "react";
import "./Achievements.css";

const achievementsData = [
  {
    id: 1,
    title: "Best Education of the Year Award 2023",
    subtitle: "National Achievers Recognition Forum",
    desc: "In Recognition of Sterling Merit Excellence Performance and Outstanding contribution for the Progress of the nation and Worldwide",
    img: "/images/award1.jpg",
  },
  {
    id: 2,
    title: "Best Private College of the Year",
    subtitle: "Asian Education Leadership",
    desc: "Asian Education Leadership",
    img: "/images/award2.jpg",
  },
  {
    id: 3,
    title: "Indian Glory Award",
    subtitle: "IGA Conference",
    desc: "Most Emerging Higher Education Institute of the Year",
    img: "/images/award3.jpg",
  },
  {
    id: 4,
    title: "Bharat Vibhushan Award",
    subtitle: "National Book of Record",
    desc: "For their Passionate Commitment Towards Our Society in the Field of Education.",
    img: "/images/award4.jpg",
  },
  {
    id: 5,
    title: "Outstanding College Providing Effective Online Classes During Covid-19 Era",
    subtitle: "World Education Leaders",
    desc: "Honours for Exemplary Leadership in Education",
    img: "/images/award5.jpg",
  },
];

function Achievements() {
  return (
    <div className="achievements-page">
      
      {/* Banner */}
      <div className="achievements-banner">
        <div className="overlay">
          <h1>Achievements</h1>
          <p>Home &gt; About &gt; Achievements</p>
        </div>
      </div>

      <div className="container">
        <div className="achievements-wrapper">
          
          {/* Left Sidebar */}
          <div className="sidebar">
            <h3>Achievements</h3>
            <ul>
              <li>The College</li>
              <li>President’s Desk</li>
              <li>Vision</li>
              <li>Mission</li>
              <li>Our Staff</li>
              <li className="active">Achievements</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="content">
            <h3>Achievements</h3>

            {achievementsData.map((item) => (
              <div className="achievement-card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="achievement-text">
                  <h4>{item.title}</h4>
                  <h5>{item.subtitle}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
