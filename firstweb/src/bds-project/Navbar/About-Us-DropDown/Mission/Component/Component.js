import "./Component.css";

function Component({ data }) {
  return (
    <div className="Component">
      <h1 className="Component-h1">
        <span>{data.title} </span>
      </h1>
      <div className="Component-icon">
        <div className="container">
          <h3>
            <i className="fa-solid fa-house"></i>
            {data.subtitle}
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="Component-content">
          <div className="left-side-Component">
            <p>
              <b>{data.btext}</b>
            </p>

            <p> {data.ptext}</p>

            <h3>
              <b>{data.headingh1}</b>
            </h3>

            <p>
              <b>{data.h1ptext1?.bold}</b>
              {data.h1ptext1?.normal}
              {data.ptext1}
            </p>

            <p>
              <b>{data.h1ptext2?.bold}</b>
              {data.h1ptext2?.normal}
              {data.ptext2}
            </p>

            <p>
              <b>{data.h1ptext3?.bold}</b>
              {data.h1ptext3?.normal}
              {data.ptext3}
            </p>

            <p>
              <b>{data.h1ptext4?.bold}</b>
              {data.h1ptext4?.normal}
              {data.ptext4}
            </p>

            <p>
              {data.h1ptext5}
              {data.ptext5}
            </p>
          </div>
          <div className="right-side-Component">
            <img src={data.img} />
          </div>
        </div>
        
        <div className="bottom-text">
          
        
          <h3>
            <b>{data.heading2}</b>
          </h3>
          <p>
            <b>{data.h2ptext1?.bold}</b>
            {data.h2ptext1?.normal}
            {data.ptext6}
          </p>
          <p>
            <b>{data.h2ptext2?.bold}</b>
            {data.h2ptext2?.normal}
            {data.ptext7}
          </p>
          <p>
            <b>{data.h2ptext3?.bold}</b>
            {data.h2ptext3?.normal}
            {data.ptext8}
          </p>
          <p>
            <b>{data.h2ptext4?.bold}</b>
            {data.h2ptext4?.normal}
            {data.ptext9}
          </p>
          <p>
            {data.h2ptext5?.normal}
            {data.ptext10}
          </p>
          <p>
            <b>{data.h2ptext6?.bold}</b>
            {data.h2ptext6?.normal}
            {data.ptext11}
          </p>
          <img src={data.Gradimg}/>
        </div>
        
        
      </div>
    </div>
  );
}

export default Component;
