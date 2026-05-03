import './Contect.css'
function Contect(){
    return(
        <section className="contect-section">
      <div className="container">
        <div className="contect">
          <div className="logo">
            <img
              src="https://bdsinternationalschool.net/image/logo.png"
              alt="Logo"
            />
          </div>

          <div className="humberger-icon"><i className="fa-solid fa-bars"></i></div>

          <div className="info-container">
            <div class="info">
              <p>School Code : 60633</p>
              <p>Affiliation No. : 2131417</p>
            </div>
          </div>

          <div className="info-container">
            <div className="info-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="info">
              <p>CONTACT US</p>
              <p>8171605615, 8171605888</p>
            </div>
          </div>

          <div className="info-container">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="info">
              <p>Mail ID</p>
              <p>bdsischool@gmail.com</p>
            </div>
          </div>

          <div className="info-container">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="info">
              <p>Mail ID</p>
              <p>communications@bdsis.edu.in</p>
            </div>
          </div>
        </div>
        <h3>Admissions Open 2026-2027. Enroll Now</h3>
      </div>
    </section>
    )
}

export default Contect;