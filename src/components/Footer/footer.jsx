// import React from "react";
// import "./Footer.css";

// import image from "../../assets/Footer/image.png"

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer">
//         {/* Address */}
//         <div className="footer-col">
//           <h3>Address</h3>
//           <p>
//           asian college, Pune <br />
//             (Deemed to be University) <br />
//             Sant Tukaram Nagar <br />
//             Pimpri, Pune 411018
//           </p>

//           <p><strong>Contact:</strong> +91 20 2780 5000 / 5001</p>
//           <p><strong>Email:</strong> info@dpu.edu.in</p>
//           <p><strong>Fax:</strong> +91 20 27420010</p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-col">
//           <h3>Quick Links</h3>
//           <ul>
//             <li>UCPE and FD</li>
//             <li>Incubation Centre (DPU FIIE)</li>
//             <li>R and D Cell</li>
//             <li>Admissions</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
            
//           </ul>
//         </div>

//         {/* Infrastructure */}
//         <div className="footer-col">
//           <h3>Infrastructure</h3>
//           <div className="infra-grid">
//             <img src={image} alt="" />
//           </div>
//         </div>

//         {/* Social Media */}
//         <div className="footer-col">
//           <h3>Social Media</h3>
//           <div className="social-icons">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-x-twitter"></i>
//             <i className="fab fa-youtube"></i>
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-linkedin-in"></i>
//             <i className="fab fa-whatsapp"></i>
//           </div>

//           <button className="access-btn">Screen Reader Access</button>
//           <button className="translate-btn">🌐 Translate</button>
//         </div>
//       </footer>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>
//           Copyright ©2026 All Rights Reserved |
//           By Software Development Cell, Dr. D. Y. Patil Vidyapeeth, Pune
//         </p>
//         <span>Site Updated On : 07/08/2025</span>
//       </div>
//     </>
//   );
// };

// export default Footer;














import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import image from "../../assets/Footer/image.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">

        {/* Address */}
        <div className="footer-col">
          <h3>Address</h3>
          <p>
            Asian College, Pune <br />
            Sant Tukaram Nagar <br />
            Pimpri, Pune 411018
          </p>

          <p>
            <strong>Contact:</strong>{" "}
            <a href="tel:+912027805000">+91 20 2780 5000</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@dpu.edu.in">info@dpu.edu.in</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/examination">Examination</NavLink></li>
            <li><NavLink to="/iqac">Placement</NavLink></li>
            <li><NavLink to="/admissions">Gallery</NavLink></li>
            <li><NavLink to="/privacy-policy">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>
          </ul>
        </div>

        {/* Infrastructure */}
        <div className="footer-col">
          <h3>Infrastructure</h3>
          <div className="infra-grid">
            <NavLink to="/infrastructure">
              <img src={image} alt="Infrastructure" />
            </NavLink>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <NavLink to="/screen-reader" className="access-btn">
            Screen Reader Access
          </NavLink>

          <NavLink to="/translate" className="translate-btn">
            🌐 Translate
          </NavLink>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All Rights Reserved |
          By Software Development Cell
        </p>
        <span>Site Updated On : 07/08/2025</span>
      </div>
    </>
  );
};

export default Footer;
