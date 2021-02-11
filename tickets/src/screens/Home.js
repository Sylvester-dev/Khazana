import React from 'react'
import './Home.css'
function Home() {
  return (
     <>
     <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.bitpinas.com/wp-content/uploads/2019/09/08095211/hedera-3-800x445.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title,buttons,description */}
        {/* <h1 className="banner__title">
          Its our project
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div> */}
        {/* <h1 className="banner__description">
          Make it better
        </h1> */}
      </div>
      <div className="banner--fadeBottom" />
    </header>
    <section id="sec">
     <div id="dout">
         <div id="d1">
           <h1>We make all this possibleeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
          </div>
          <div id="d2">
             <img id="pich" src="https://s3.amazonaws.com/hedera-com/_w1000/hh-cryptocurrency-meta-image.jpg"></img>
          </div>
     </div>
    </section>
    <section id="sec">
     <div id="dout">
          <div id="d1">
             <img id="pich" src="https://s3.amazonaws.com/hedera-com/_w1000/hh-cryptocurrency-meta-image.jpg"></img>
          </div>
         <div id="d2">
           <h1>We make all this possibleeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
         </div>
     </div>
    </section>
    <section id="sec">
     <div id="dout">
         <div id="d2">
           <h1>We make all this possibleeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
          </div>
          <div id="d1">
             <img id="pich" src="https://s3.amazonaws.com/hedera-com/_w1000/hh-cryptocurrency-meta-image.jpg"></img>
          </div>
     </div>
    </section>
    <section id="sec">
     <div id="dout">
          <div id="d2">
             <img id="pich" src="https://s3.amazonaws.com/hedera-com/_w1000/hh-cryptocurrency-meta-image.jpg"></img>
          </div>
         <div id="d1">
           <h1>We make all this possibleeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
          </div>
     </div>
    </section>
 
     </>
  )
}

export default Home
