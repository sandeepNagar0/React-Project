import "./Activity.css";

function Activity() {
  return (
    <section className="achivment">
      <div className="container">
        <div className="activity">
          <div className="act-text">
            <h1>Achievements & Activities</h1>
          </div>

          <div className="act-box">
            <div className="act-img">
              <img
                src="https://bdsinternationalschool.net/assets/gallery/1713263031.jpg"
                alt=""
              />
              <h3 className="img-text">
                Baisakhi and Ambedkar jyanti Celebration
              </h3>
            </div>

            <div className="act-img">
              <img
                src="https://bdsinternationalschool.net/assets/gallery/1706684409.jpg"
                alt=""
              />
              <h3 className="img-text">Republic Day Celebration @2026</h3>
            </div>

            <div className="act-img">
              <img
                src="https://bdsinternationalschool.net/assets/gallery/1706684092.jpg"
                alt=""
              />
              <h3 className="img-text pariksha">Pariksha pe Charcha</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activity;
