import "./Vacancy.css";
import { useState } from "react";

function Vacancy() {
  const [ phone, setphone] =useState('');

  const handlePhoneChange = (e) =>{
    let value =e.target.value;
    // Sirf Number
    value =value.replace(/[^0-9]/g, '');

    // Max Digit 10
    if(value.length <= 11){
        setphone(value);
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(phone.length !==11){
        alert("Enter valid 10 digit number");
        return
    }
    alert("Form submitted ✅")
    window.location.reload();
    
  }
  

  return (
    <div>
      <h1 className="vacancy-heading">
        <span>Vacancy</span>
      </h1>
      <div className="vacancy-icon">
        <div className="container">
          <h3>
            <i className="fa-solid fa-house"></i>
            Vacancy
          </h3>
        </div>
      </div>
      {/* Form start */}
      <div className="vacancy-form">
        <div className="container">
          <h1 className="form-heading">Join Our Team</h1>
          <p>
            Explore current openings and apply directly through the form below.
          </p>

          <div className="vacancy-flex">
            {/* Left Side Start */}
            <div className="left-side">
              <h3>Open Positions</h3>
              <div className="left-content">
                <div className="receptionist-flex">
                  <h4>Receptionist</h4>
                  <h6>Full Time</h6>
                </div>
                <p>
                  <b>Department:</b> Administration / Front Office
                </p>
                <p>
                  <b>Location:</b> Sector 8, Jagriti Vihar, Meerut
                </p>
                <p>
                  <b>Last Date:</b> 30 May 2026
                </p>
                <p>
                  BDS International School is looking for a responsible and
                  well-organized Receptionist to manage front desk operations
                  and ensure smooth communication across the school. The role
                  includes handling attendance through biometric systems and
                  registers, addressing queries of parents, students, and staff
                  in a polite manner, and maintaining a clean and professional
                  reception area
                </p>
                <p>
                  The candidate will coordinate school activities, assist in
                  organizing events, support the admission process, and ensure
                  timely communication of important updates. Responsibilities
                  also include maintaining staff attendance and leave records,
                  issuing gate passes with proper verification, updating records
                  using computer systems, and assisting senior authorities with
                  administrative tasks. The Receptionist will also coordinate
                  with security staff, supervise support staff, and ensure
                  proper documentation and filing of all school records.
                </p>

                <h5>Requirements</h5>

                <ul>
                  <li>Good communication and interpersonal skills</li>
                  <li>Basic knowledge of computers (MS Excel, Word)</li>
                  <li>Strong organizational and multitasking abilities</li>
                  <li>Polite, disciplined, and professional behavior</li>
                  <li>
                    Ability to handle parents, students, and staff efficiently
                  </li>
                  <li>
                    Capability to follow instructions from senior authorities
                  </li>
                </ul>
                <button className="applybtn">Apply for the role</button>
              </div>
            </div>
            {/* Left Side End */}

            {/* Right Side Start */}
            <div className="right-side">
              <h3>Apply</h3>
              <form onSubmit={handleSubmit}>
                <div className="right-side-form-box">
                  <label for="Position">Selected Position *</label>
                  <br />
                  <select>
                    <option>Select A Position</option>
                    <option>Receptionist</option>
                  </select>
                </div>

                <div className="right-side-form-box">
                  <label>Full Name *</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    autoFocus
                  ></input>
                </div>

                <div className="right-side-form-box">
                  <label>Email *</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  ></input>
                </div>

                <div className="right-side-form-box">
                  <label>Phone *</label>
                  <br />
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter Your Number"
                    required
                  ></input>
                </div>

                <div className="right-side-form-box">
                  <label>City *</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your City"
                    required
                  ></input>
                </div>

                <div className="right-side-form-box">
                  <label>Resume (pdf/doc/docx) *</label>
                  <input type="file"></input>
                </div>

                <div className="right-side-form-box">
                  <label>CoverLetter *</label> <br />
                  <textarea
                    placeholder="Type your message..."
                    rows="4"
                    cols="40"
                  ></textarea>
                </div>

                <button className="submitbtn">Submit Application</button>

              </form>
              {/* Form End */}
            </div>
            {/* Right Side End */}
          </div>
        </div>
      </div>
      {/* Vacancy End */}
    </div>
  );
}

export default Vacancy;
