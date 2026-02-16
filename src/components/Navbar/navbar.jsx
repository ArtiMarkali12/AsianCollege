import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/image.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCloseMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setStudentOpen(false);
    setActivityOpen(false);
    scrollToTop();
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="top-header">
        <div className="header-container">
          <div className="left-section">
            <img src={image} alt="Logo" className="logo" />
          </div>

          <div
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className={`menu-bar ${mobileOpen ? "active" : ""}`}>
        <NavLink to="/" className="menu-btn" onClick={handleCloseMenu}>
          Home
        </NavLink>

        {/* ABOUT */}
        <div className="dropdown">
          <div
            className="menu-btn"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About ▾
          </div>

          <div className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
            <NavLink to="/about/college" onClick={handleCloseMenu}>
              The College
            </NavLink>
            <NavLink to="/about/presidentDesk" onClick={handleCloseMenu}>
              President Desk
            </NavLink>
            <NavLink to="/about/vision" onClick={handleCloseMenu}>
              Vision
            </NavLink>
            <NavLink to="/about/mission" onClick={handleCloseMenu}>
              Mission
            </NavLink>
            <NavLink to="/about/ourStaff" onClick={handleCloseMenu}>
              Our Staff
            </NavLink>
            <NavLink to="/about/achievements" onClick={handleCloseMenu}>
              Achievements
            </NavLink>
          </div>
        </div>

        {/* STUDENTS */}
        <div className="dropdown">
          <div
            className="menu-btn"
            onClick={() => setStudentOpen(!studentOpen)}
          >
            Students ▾
          </div>

          <div className={`dropdown-menu ${studentOpen ? "show" : ""}`}>
            <NavLink to="/students/ug" onClick={handleCloseMenu}>
              UG
            </NavLink>
            <NavLink to="/students/pg" onClick={handleCloseMenu}>
              PG
            </NavLink>
            <NavLink to="/students/phd" onClick={handleCloseMenu}>
              PhD
            </NavLink>
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className="dropdown">
          <div
            className="menu-btn"
            onClick={() => setActivityOpen(!activityOpen)}
          >
            Activities ▾
          </div>

          <div className={`dropdown-menu ${activityOpen ? "show" : ""}`}>
            <NavLink to="/academics/gallery" onClick={handleCloseMenu}>
              Gallery
            </NavLink>
            <NavLink to="/academics/blog" onClick={handleCloseMenu}>
              Post / Blog
            </NavLink>
            <NavLink to="/academics/nss" onClick={handleCloseMenu}>
              NSS
            </NavLink>
            <NavLink to="/academics/newspeper" onClick={handleCloseMenu}>
              Newspaper Publication
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/examination"
          className="menu-btn"
          onClick={handleCloseMenu}
        >
          Examination
        </NavLink>

        <NavLink
          to="/iqac"
          className="menu-btn"
          onClick={handleCloseMenu}
        >
          Placement
        </NavLink>

        <NavLink
          to="/careers"
          className="menu-btn"
          onClick={handleCloseMenu}
        >
          Careers
        </NavLink>

        <NavLink
          to="/life"
          className="menu-btn"
          onClick={handleCloseMenu}
        >
          Life on Campus
        </NavLink>

        <NavLink
          to="/contact"
          className="menu-btn"
          onClick={handleCloseMenu}
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
