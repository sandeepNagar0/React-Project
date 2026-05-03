import './Header.css'
function Header(){
    return(
        <div>
            <header>
      <div className="container">
        <div className="header-content">

          {/* Left Side */}
          <div className="left">
            <ul>
              <li><a href="#">ONLINE FEE PAYMENT</a></li>
              <li><a href="#"> BOARD CLASS TOPPERS</a></li>
              <li><a href="#">FEE STRUCTURE</a></li>
            </ul>
          </div>

          
          {/* Right Side */}
          <div className="right">
            <ul className="icons">
              <li>
                <a href="https://www.facebook.com/bdsischool" title="facebook" target='_blank'>
                  <i className="fa-brands fa-facebook"></i>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/bdsischool" title="Instagram" target='_blank'>
                   <i className="fa-brands fa-square-instagram"></i>
                  </a>
              </li>
              <li>
                  <a href="https://www.youtube.com/channel/UCO7w5k7bqI1lwO6mwKkWTyQ" title="Youtube" target='_blank'>
                   <i className="fa-brands fa-youtube"></i>
                  </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/showcase/bds-international-schoolpage/" title="Linkedin" target='_blank'>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="enroll">
                <a href="#">ENROLL NOW</a>
              </li>
              <li>
                <a href="#">ERP LOGIN</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
        </div>

    )
}

export default Header;