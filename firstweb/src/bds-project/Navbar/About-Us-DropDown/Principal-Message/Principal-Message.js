import './Principal-Message.css'

function PrincipalMessage(){
    return(
        <div>
        <h1 className="PrincipalMessage-h1"><span>Principal's Message</span></h1>
        <div className="PrincipalMessage-icon">
            <h3><i className="fa-solid fa-house"></i>Principal's Message</h3>
        </div>
        <div className="container">

      
      <div className="PrincipalMessage-content">

        <div className="Left-side-PrincipalMessage-Message">
            <img src="https://bdsinternationalschool.net/image/Principle%20Mam.jpeg"/>
        </div>

        <div className="Right-side-PrincipalMessage-Message">

            <div className='PrincipalMessage-hadding'>
            <h1>MS. BINDU SHARMA</h1>
            <h5>PRINCIPAL</h5>
            </div>

            <p><b>"My mission is to be a catalyst in the lives of individuals who dream big and strive to achieve with clarity and purpose."</b></p>

           <p> At BDS International School, we believe that every child is unique and full of potential. Our aim is to provide an environment that nurtures curiosity, builds confidence, and inspires a love for lifelong learning. Education, to us, is not limited to academics but extends to values, character, and overall personality development.</p>

           <p>In today's rapidly evolving world, it is essential to equip students with critical thinking, creativity, and strong moral values. Guided by the vision of NEP-2020, we are committed to holistic development, ensuring that our students grow into responsible, compassionate, and capable individuals.</p>

           <p>We value the strong partnership between school and parents, as together we can create a supportive and enriching learning journey for our children. I look forward to working collaboratively with our dedicated educators and parent community to help every learner achieve excellence.</p>

        </div>
        
      </div>
      </div>
    </div>
    )

}

export default PrincipalMessage;