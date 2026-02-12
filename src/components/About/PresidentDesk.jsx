import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./PresidentDesk.css";
import presidentImg from "../../assets/about/president.png";

const PresidentDesk = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="president-page">
      {/* Hero Section */}
      <div className="president-hero">
        <div className="hero-overlay">
          <h1>President Desk</h1>
          <p>
            <Link to="/">Home</Link> /{" "}
            <Link to="/about">About</Link> / President Desk
          </p>
        </div>
      </div>

      <div className="president-container">
        {/* Sidebar */}
        <div className="president-sidebar">
          <h3>About</h3>
          <ul>
            <li><Link to="/about">The College</Link></li>
            <li className="active"><Link to="#">President’s Desk</Link></li>
            <li><Link to="#">Vision</Link></li>
            <li><Link to="#">Mission</Link></li>
            <li><Link to="#">Our Staff</Link></li>
            <li><Link to="#">Achievements</Link></li>
          </ul>
        </div>

        {/* Content */}
        <div
          ref={addToRefs}
          data-id="main"
          className={`president-content ${
            visibleSections["main"] ? "show" : ""
          }`}
        >
          <h2>President Desk</h2>

          <div className="president-top-section">
            {/* Slide Left */}
           <div
  ref={addToRefs}
  data-id="image"
  className={`president-image slide-left ${
    visibleSections["image"] ? "show" : ""
  }`}
>
  <img
    src={presidentImg}
    alt="President"
  />
</div>

            {/* Slide Right */}
            <div
              ref={addToRefs}
              data-id="quote"
              className={`president-quote slide-right ${
                visibleSections["quote"] ? "show" : ""
              }`}
            >
              <p>
                “Education is the manifestation of the perfection already in man.”
              </p>
              <span>– Swami Vivekananda</span>
            </div>
          </div>

          {/* Zoom Animation */}
          <div
            ref={addToRefs}
            data-id="text"
            className={`president-text zoom-in ${
              visibleSections["text"] ? "show" : ""
            }`}
          >
            <h4>President's Message</h4>

            <p>
              Today, the world is moving towards globalization. Increased
              competition among businesses has raised minimum competency levels.
              Education is considered the foundation of an excellent career.
            </p>

            <p>
              Our institution provides a conducive learning environment for
              holistic development. We aim to nurture future leaders with
              integrity, knowledge, and excellence.
            </p>

            <p>
              We are committed to facilitating career development through
              quality teaching and practical exposure.
            </p>

            <strong>
              Dr. Anita Sapte <br />
              B.E (Electronics) <br />
              M.B.A (Marketing) <br />
              Ph.D
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDesk;
