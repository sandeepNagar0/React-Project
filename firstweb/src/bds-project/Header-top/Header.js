import "./Header.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

function Header() {


  useEffect(() => {
    gsap.fromTo('#animate', {
      y: -100,
      opacity:0,
    },{
        y: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.2
    });
  }, []);
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-content">
            {/* Left Side */}
            <div className="left" >
              <ul>
                <li id="animate">
                  <Link to="/">ONLINE FEE PAYMENT</Link>
                </li>
                <li id="animate">
                  <Link to="/"> BOARD CLASS TOPPERS</Link>
                </li>
                <li id="animate">
                  <Link to="/">FEE STRUCTURE</Link>
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="right" >
              <ul className="icons">
                <li id="animate">
                  <Link
                    to="https://www.facebook.com/bdsischool"
                    title="facebook"
                    target="_blank" rel="noopener noreferrer">

                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li id="animate">
                  <Link
                    to="https://www.instagram.com/bdsischool"
                    title="Instagram"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-instagram"></i>
                  </Link>
                </li>
                <li id="animate">
                  <Link
                    to="https://www.youtube.com/channel/UCO7w5k7bqI1lwO6mwKkWTyQ"
                    title="Youtube"
                    target="_blank"rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li id="animate">
                  <Link
                    to="https://www.linkedin.com/showcase/bds-international-schoolpage/"
                    title="Linkedin"
                    target="_blank"rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
                <li className="enroll" id="animate">
                  <Link to="/">ENROLL NOW</Link>
                </li>
                <li id="animate">
                  <Link to="/">ERP LOGIN</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
