import "./About.css";
function About() {
  return (
    <div>
        <h1 className="about-h1"><span> About Us</span></h1>
        <div className="about-icon">
            <h3><i class="fa-solid fa-house"></i>About Us</h3>
        </div>
        <div className="container">

      
      <div className="about-content">
        <div className="left-side-about">

           <p> We,at <b>BDS International School</b> take pride in its excellent infrastructure, broad vision, student centred environment which has been thoughtfully design to foster the holistic development of our students. The school provides full range of facilities for all the students to ensuring that every student feels valued and make them feel distinguished and privileged.</p>

            <p>BDS International School is the product of a vision, a dream of Excellence in affordable Education. We are providing a wide and varied arena for the staff and students to showcase their academic , co-curricular and extracurricular talent. </p> 
            
           <p>The four pillars of our school are; enthusiastic learners, responsible parents, good teaching faculty, and caring management</p>

            <p>Together, we create an ecosystem that nurtures creativity, fosters innovation, and instils a sense of responsibility in every child. Our commitment to excellence is reflected in our dynamic curriculum, which integrates modern pedagogy with traditional values. At BDS International School, we believe in empowering students with the skills and confidence to excel in all walks of life.
          </p>
          <p><b>At BDS International School, we don’t just prepare students for exams, we prepare them for life.</b></p>
        </div>
        <div className="right-side-about">
            <img src="https://bdsinternationalschool.net/images/aboutus1.jpg"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
