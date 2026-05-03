import './News.css'

function News(){
    return(
        <section className="news-section">
      <div className="container">
        <h1 className="news-heading">
          <span className="news-span">NEWS</span>& CIRCULARS
        </h1>

        <div className="news-flex">
          <div className="news-image">
            <img
              src="https://bdsinternationalschool.net/assets/galleryimgs/1776760721_8458_0.jpeg"
              alt=""
            />
          </div>

          <div className="news-image">
            <img
              src="https://bdsinternationalschool.net/assets/galleryimgs/1734499207.jpeg"
              alt=""
            />
          </div>

          <div className="news-image">
            <img
              src="https://bdsinternationalschool.net/assets/galleryimgs/1734499202.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    )
}

export default News;