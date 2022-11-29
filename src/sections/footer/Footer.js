import React, { useState } from 'react';
import './footer.css';
const Footer = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const toggle = (a) => {
    if (a === 1) {
      setButton1(true);
      setTimeout(() => {
        setButton1(false);
      }, 5000);
    }
    if (a === 2) {
      setButton2(true);
      setTimeout(() => {
        setButton2(false);
      }, 5000);
    }
  };
  return (
    <div className="container9">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#78a1be"
          fill-opacity="1"
          d="M0,160L21.8,133.3C43.6,107,87,53,131,74.7C174.5,96,218,192,262,208C305.5,224,349,160,393,149.3C436.4,139,480,181,524,170.7C567.3,160,611,96,655,106.7C698.2,117,742,203,785,213.3C829.1,224,873,160,916,128C960,96,1004,96,1047,106.7C1090.9,117,1135,139,1178,128C1221.8,117,1265,75,1309,74.7C1352.7,75,1396,117,1418,138.7L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
      <div className="gridContainer">
        <div className="grid">
          <div className="logo"></div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            accusantium?
          </div>
        </div>
        <div className="grid">
          <div className="head">Email Newsletter</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <input type="text" placeholder="Enter Email..."></input>
          <div
            className={button1 ? 'buttonclick1' : 'button'}
            onClick={() => {
              toggle(1);
            }}
          >
            Subscribe
          </div>
        </div>
        <div className="grid">
          <div className="head">Site Links</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Contact</div>
          <div className="text">Write</div>
        </div>
        <div className="grid">
          <div className="head">Join Our University</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            error.
          </div>
          <div
            style={{ backgroundColor: 'rgb(56, 126, 153)' }}
            className={button2 ? 'buttonclick2' : 'button'}
            onClick={() => {
              toggle(2);
            }}
          >
            Join Now
          </div>
        </div>
      </div>
      <div className="footer">Copyright © 2022, All Rights Reserved</div>
    </div>
  );
};

export default Footer;
