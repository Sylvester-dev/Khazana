import React from 'react'
import './Home.css';
import hed from '../images/hedera.png';
function Home() {
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: 'url('+hed+')',
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
            <h1>FAST</h1>
          </div>
          <div id="d2">
            <img
              id="pich"
              src="https://s3.us-east-1.amazonaws.com/hedera-com/homepage-value-prop-1.png"
            ></img>
          </div>
        </div>
      </section>
      <section id="sec">
        <div id="dout">
          <div id="d1">
            <img
              id="pich"
              src="https://s3.us-east-1.amazonaws.com/hedera-com/homepage-value-prop-3.png"
            ></img>
          </div>
          <div id="d2">
            <h1>SECURE</h1>
          </div>
        </div>
      </section>
      <section id="sec">
        <div id="dout">
          <div id="d2">
            <h1>FAIR</h1>
          </div>
          <div id="d1">
            <img
              id="pich"
              src="https://s3.us-east-1.amazonaws.com/hedera-com/homepage-value-prop-2.png"
            ></img>
          </div>
        </div>
      </section>
      <section id="sec">
        <div id="dout">
          <div id="d2">
            <img
              id="pich"
              src="https://s3.us-east-1.amazonaws.com/hedera-com/homepage-value-prop-4.png"
            ></img>
          </div>
          <div id="d1">
            <h1>STABLE</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
