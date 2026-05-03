import './Mobile-Navbar.css'

function MobileNavbar(){
    return(
        <div className="mobile-navbar">
        <div className="close-icon"><i className="fa-regular fa-circle-xmark"></i></div>
        <div className="mobile-nav-image">
          <img src="https://bdsinternationalschool.net/image/logo.png" alt=""/>
        </div>
        <div className="ul-scroll">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">ABout Us</a></li>
          <li><a href="#">Infrastructure</a></li>
          <li><a href="#">Guideline</a></li>
          <li><a href="#">Tedx</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Vacancy</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">online Fee PAYMENT</a></li>
          <li><a href="#">MANDATORY DISCLOSURE</a></li>
          <li><a href="#">Board Class toppers</a></li>
          <li><a href="#">Fee STRUCTURE</a></li>
        </ul>
        </div>
        <div className="mobile-nav-icon">
          <div className="mobile-nav-icon-box"><i className="fa-brands fa-facebook"></i></div>
          <div className="mobile-nav-icon-box"><i className="fa-brands fa-instagram"></i></div>
          <div className="mobile-nav-icon-box"><i className="fa-brands fa-youtube"></i></div>
        </div>
      </div>
    )

}

export default MobileNavbar;