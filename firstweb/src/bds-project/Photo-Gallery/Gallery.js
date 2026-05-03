import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-btn">
          <button className="btn">Photo Gallery</button>
          <button className="btn">Video Gallery</button>
        </div>
        <div className="gallery-items">
          <div className="gallery-box">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon1.png"
                alt=""
              />
            </figure>
            <h3>Library</h3>
            <p>
              Pages whispering tales, a sanctuary of knowledge in the heart of
              learning.
            </p>
          </div>

          <div className="gallery-box box-color">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon2.png"
                alt=""
              />
            </figure>
            <h3>Laboratories</h3>
            <p>
              Where curiosity meets experimentation, our school laboratories
              ignite the spark of discovery.
            </p>
          </div>

          <div className="gallery-box">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon3.png"
                alt=""
              />
            </figure>
            <h3>Auditorium</h3>
            <p>
              Where dreams echo and applause becomes the soundtrack of
              aspirations - our school auditorium, a stage for the
              extraordinary.
            </p>
          </div>

          <div className="gallery-box box-color">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon4.png"
                alt=""
              />
            </figure>
            <h3>Dance Room</h3>
            <p>
              Echoes of rhythm and laughter, where students find their groove -
              the school dance room, a space where steps tell stories.
            </p>
          </div>

          <div className="gallery-box box-color">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon5.png"
                alt=""
              />
            </figure>
            <h3>Music Room</h3>
            <p>
              Harmony in every note, creativity in every chord - our school
              music room, where melodies paint a symphony of inspiration.
            </p>
          </div>

          <div className="gallery-box">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon6.png"
                alt=""
              />
            </figure>
            <h3>Computer Lab</h3>
            <p>
              Pixels and possibilities merge in our school's computer lab, where
              minds code the future with every keystroke.
            </p>
          </div>

          <div className="gallery-box box-color">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon7.png"
                alt=""
              />
            </figure>
            <h3>Fine Art Room</h3>
            <p>
              Brushstrokes of imagination color the canvas of creativity in our
              school's fine art room, where every stroke tells a unique story.
            </p>
          </div>

          <div className="gallery-box">
            <figure>
              <img
                src="https://www.bdsinternationalschool.net/image/gallery/icon8.png"
                alt=""
              />
            </figure>
            <h3>Medical Room</h3>
            <p>
              Care meets comfort in our school's medical room, where a healing
              touch and a soothing space ensure the well-being of every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
