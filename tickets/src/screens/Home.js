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
              src="https://www.usa.philips.com/c-dam/b2bhc/master/education-resources/copd-insider/common/rocket-animated.gif"
            ></img>
          </div>
        </div>
      </section>
      <section id="sec">
        <div id="dout">
          <div id="d1">
            <img
              id="pich"
              src="http://www.cirrus-connect.com/wp-content/uploads/2017/05/secure.gif"
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
        <section id="sec">
        <div id="dout">
         <div id="d1">
            <h1>Dynamically changing QR Code</h1>
          </div>
          <div id="d2">
            <img
              id="pich"
              src="https://i.redd.it/y3bpgdy80fry.gif"
            ></img>
          </div>
        </div>
        </section>
        <section id="sec">
        <div id="dout">
          <div id="d2">
            <img
              id="pich"
              src="https://gifimage.net/wp-content/uploads/2018/06/ticket-gif-5.gif"
            ></img>
          </div>
          <div id="d1">
            <h1>Smart Tickets not being Smart Enough?</h1>
          </div>

        </div>
        </section>
        <section id="sec">
        <div id="dout">
        <div id="d1">
            <h1>Help others in need by donation or rasing Fund</h1>
          </div>
          <div id="d2">
            <img
              id="pich"
              src="https://media.giphy.com/media/l0CLV6Yk17s2ZIqsw/giphy.gif"
            ></img>
          </div>

        </div>
        </section>
       
        <section id="sec">
        <div id="dout">
          <div id="d2">
            <img
              id="pich"
              src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1311,w_1362,x_0,y_0/c_limit,f_auto,fl_lossy,q_80,w_640/Real_Estate_caw7me.gif"
            ></img>
          </div>
          <div id="d1">
            <h1>Sell and Buy Property</h1>
          </div>

        </div>
        </section>
        <section id="sec">
        <div id="dout">
        <div id="d1">
            <h1>Save TIME & MONEY</h1>
          </div>
          <div id="d2">
            <img
              id="pich"
              src="https://bestanimations.com/Money/time-is-money-animated-gif.gif"
            ></img>
          </div>

        </div>
        </section>
        
        
        <section id="sec">
        <div id="dout">
          <div id="d2">
            <img
              id="pich"
              src="https://media1.tenor.com/images/08545121f55f3e90d8155b879e97d84d/tenor.gif?itemid=5145613"
            ></img>
          </div>
          <div id="d1">
            <h1>Get Real value for Your Talent</h1>
          </div>

        </div>
        </section>

        <section id="sec">
        <div id="dout">
          <div id="d1">
            <h1>DO More...</h1>
          </div>
          <div id="d2">
            <img
              id="pich"
              src="https://cdn.dribbble.com/users/744367/screenshots/2684910/eddykoek_36days_num6_01.gif"
            ></img>
          </div>


        </div>
        </section>
        
      
    </>
  );
}

export default Home
