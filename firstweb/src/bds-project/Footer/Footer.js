import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-flex-box footer-box1">
            <h2 className="footer-box1-heading">Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Sports">Infrastructure</Link>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">MANDATORY DISCLOSURE</a>
              </li>
            </ul>
          </div>

          <div className="footer-flex-box footer-box2">
            <h2 className="footer-detail-heading">Contact Details</h2>

            <div className="footer-detail-box">
              <i className="fa-solid fa-location-dot"></i>

              <div className="footer-detail-text">
                <h3>address</h3>
                <p>Sector 8, Jagriti Vihar, Meerut, Uttar Pradesh 250004</p>
              </div>
            </div>

            <div className="footer-detail-box">
              <i className="fa-solid fa-square-phone"></i>

              <div className="footer-detail-text">
                <h3>contact us</h3>
                <p>0121-2602913, 8171605615, 8171605888</p>
              </div>
            </div>

            <div className="footer-detail-box">
              <i className="fa-regular fa-envelope"></i>

              <div className="footer-detail-text">
                <h3>Mail Id</h3>
                <p>bdsischool@gmail.com</p>
              </div>
            </div>

            <div className="footer-detail-box">
              <i className="fa-regular fa-envelope"></i>

              <div className="footer-detail-text">
                <h3>Mail Id</h3>
                <p>communications@bdsis.edu.in</p>
              </div>
            </div>
          </div>

          <div className="footer-flex-box footer-box3-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.307251551948!2d77.74602387458575!3d28.948609969658786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7caa81aa7e09%3A0xc793e525de52740f!2sBDS%20School%20Rd%2C%20Somdutt%20Vihar%2C%20Meerut%2C%20Uttar%20Pradesh%20250004!5e0!3m2!1sen!2sin!4v1776856627512!5m2!1sen!2sin"></iframe>
          </div>
        </div>

        <div className="footer-icons">
          <a href="https://www.facebook.com/bdsischool" title="Facebook" target="_blank">
          <div className="footer-icon-box">
            <i className="fa-brands fa-facebook"></i>
          </div>
          </a>
          <a href="https://www.instagram.com/bdsischool" title="Instagram" target="_blank">
          <div className="footer-icon-box">
            <i className="fa-brands fa-instagram"></i>
          </div>
          </a>

          <a href="https://www.youtube.com/channel/UCO7w5k7bqI1lwO6mwKkWTyQ" title="Youtube" target="_blank">
          <div className="footer-icon-box">
            <i className="fa-brands fa-youtube"></i>
          </div>
          </a>

          <a href="https://www.linkedin.com/showcase/bds-international-schoolpage/" title="Linkedin" target="_blank">
          <div className="footer-icon-box">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          </a>
        </div>

        <div className="copyright">
          <p>Designed & Developed by Sandeep Nagar ( React Project )</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
