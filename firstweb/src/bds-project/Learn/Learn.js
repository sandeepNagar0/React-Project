import './Learn.css'
import { Link } from 'react-router-dom';


import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Learn() {

 useEffect(() => {
  gsap.fromTo("#icons .motion", {
    y:50,
    opacity:0
  },
  {
    y: 0,
    opacity: 1,
    duration: .7,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#icons",     // 👈 jab ye section aaye
      start: "top 80%",      // 👈 screen ke 80% pe start
      toggleActions: "play none none reset"
    }
  });
}, []);
  return (
    <section className="detail" id='icons'>
      <div className="container">
        <h1 className="heading motion">
          <span className="learn">Learn</span>APPROACH AND CURRICULUM
        </h1>

        <p className="p1-details motion">
          We, at BDS International School take pride in its excellent
          infrastructure, wide vision, student centered environment which has
          been suitably planned to accommodate 360 degree development of the
          students. The school provides full range of facilities for all the
          students to adjust them happily and make them feel distinguished and
          privileged.
        </p>

        <p className="p1-details motion">
          BDS International School is the product of a vision, a dream of
          Excellence
        </p>

        <div className="detail-items">
          <ul>
            <li className='motion'>
              <Link to="/Sports">Sports</Link>
            </li>
            <li className='motion'>
              <Link to="/KinderGarten">KinderGarten</Link>
            </li>
            <li className='motion'>
              <Link to="/SchoolLibrary">School Library</Link>
            </li>
            <li className='motion'>
              <Link to="/Transport">Transports</Link>
            </li>
            <li className='motion'>
              <Link to="/Club">Clubs</Link>
            </li>
          </ul>
        </div>

        <div className="classroom">
          <div className="teacher">
            <div className="img-circle">
              <img
                src="https://www.bdsinternationalschool.net/image/teacher.webp"
                alt=""
              />
            </div>
            <div className="teacher-img-text">
              <h1 className="counter">80</h1>
              <h3>Teacher's</h3>
            </div>
          </div>

          <div className="teacher">
            <div className="img-circle">
              <img src="https://www.bdsinternationalschool.net/image/student.webp" />
            </div>
            <div className="teacher-img-text">
              <h1 className="counter">1700</h1>
              <h3>students's</h3>
            </div>
          </div>

          <div className="teacher">
            <div className="img-circle">
              <img src="https://www.bdsinternationalschool.net/image/classroom.webp" />
            </div>
            <div className="teacher-img-text">
              <h1 className="counter">100</h1>
              <h3>classroom's</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
