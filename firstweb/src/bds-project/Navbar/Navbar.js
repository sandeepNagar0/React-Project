import { Link } from 'react-router-dom';
import './Navbar.css'

import { gsap } from 'gsap';
import { useEffect } from 'react';

function Navbar(){

  useEffect(() => {
  gsap.fromTo("navbar > ul > li.animate > a",{
    x:100,
    opacity:0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
  });
}, []);
    return(
        <nav className="navbar">
      <ul>
        <li className='animate'><Link to="/">Home</Link></li>
        <li className='animate'>
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
        <li className='animate'>
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
        <li className='animate'>
          <Link to="/">Guidelines</Link>
          <div className="drop">
            <ul>
              <li><Link to="/Admission">Admission Guideline</Link></li>
              <li><Link to="/Rules">School Rules</Link></li>
              <li><Link to="/Grading">Grading System</Link></li>
            </ul>
          </div>
        </li>
        <li className='animate'>
          <Link to="/">Ted<small>x</small></Link>
          <div className="drop">
            <ul>
              <li><Link to="/TEDx">Ted<small>x</small> bdsis youth 2026</Link></li>
            </ul>
          </div>
        </li>
        <li className='animate'><Link to="/News">News</Link></li>
        <li className='animate'><Link to="/Vacancy">Vacancy</Link></li>
        <li className='animate'><Link to="/">gallery</Link></li>
        <li className='animate'><Link to="/">contact us</Link></li>
      </ul>
    </nav>
    )
}

export default Navbar;