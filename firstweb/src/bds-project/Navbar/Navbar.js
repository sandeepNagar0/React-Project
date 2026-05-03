import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/">About Us</Link>
          <div className="drop">
            <ul>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/OurBeginning">Our Beginning</Link></li>
              <li><Link to="/AnInsight">an insight</Link></li>
              <li><Link to="/Mission">Mission</Link></li>
              <li><Link to="/Objectives">objectives</Link></li>
              <li><Link to="/Vission">our vision</Link></li>
              <li><Link to="/ChairmanMessage">Chairman's Message</Link></li>
              <li><Link to="/DirectorSirMessage">Director Sir Message</Link></li>
              <li><Link to="/DirectorMamMessage">Director Mam Message</Link></li>
              <li><Link to="/PrincipalMessage">Principle Message</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">Infrastructure</Link>
          <div className="drop">
            <ul>
              <li><Link to="/Sports">Sports</Link></li>
              <li><Link to="/KinderGarten">KinderGarten</Link></li>
              <li><Link to="/SchoolLibrary">School Library</Link></li>
              <li><Link to="/Transport">Transports</Link></li>
              <li><Link to="/Club">Clubs</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">Guidelines</Link>
          <div className="drop">
            <ul>
              <li><Link to="/Admission">Admission Guideline</Link></li>
              <li><Link to="/Rules">School Rules</Link></li>
              <li><Link to="/Grading">Grading System</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">Ted<small>x</small></Link>
          <div className="drop">
            <ul>
              <li><Link to="/TEDx">Ted<small>x</small> bdsis youth 2026</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/">News</Link></li><li>
        <Link to="/">Vacany</Link></li>
        <li><Link to="/">gallery</Link></li>
        <li><Link to="/">contact us</Link></li>
      </ul>
    </nav>
    )
}

export default Navbar;