import './Learn.css'
import { Link } from 'react-router-dom';


function Learn() {
  return (
    <section className="detail">
      <div className="container">
        <h1 class="heading">
          <span className="learn">Learn</span>APPROACH AND CURRICULUM
        </h1>

        <p className="p1-details">
          We, at BDS International School take pride in its excellent
          infrastructure, wide vision, student centered environment which has
          been suitably planned to accommodate 360 degree development of the
          students. The school provides full range of facilities for all the
          students to adjust them happily and make them feel distinguished and
          privileged.
        </p>

        <p className="p1-details">
          BDS International School is the product of a vision, a dream of
          Excellence
        </p>

        <div className="detail-items">
          <ul>
            <li>
              <Link to="/Sports">Sports</Link>
            </li>
            <li>
              <Link href="/KinderGarten">KinderGarten</Link>
            </li>
            <li>
              <Link to="/SchoolLibrary">School Library</Link>
            </li>
            <li>
              <Link to="/Transport">Transports</Link>
            </li>
            <li>
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
