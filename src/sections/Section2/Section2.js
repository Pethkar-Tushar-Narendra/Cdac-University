import React from 'react';
import './section2.css';
import { BsNewspaper } from 'react-icons/bs';
const Section2 = () => {
  return (
    <div className="container2">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,122.7C1120,128,1280,224,1360,272L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="title">
        <div className="name">
          University<span className="highlighter"> News</span>
        </div>
        <p className="text">
          Stories about people, research and innovation across the Farm
        </p>
        <div className="icon">
          <BsNewspaper className="animateicon" />
        </div>
      </div>
      <div className="news">
        <div className="row">
          <div id="first" className="col1">
            <div className="text">
              <div className="line1">IN SPOTLIGHT</div>
              <div className="line2">
                CDAC SCHOLAR FINDS WAY TO TREAT CANCER
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="card">
              <div className="card1" id="third"></div>
              <div className="card2">
                <p className="text1">Science & Technology</p>
                <p>OceanOne connects human's sight and touch to the deep sea</p>
              </div>
            </div>
            <div className="card">
              <div className="card1" id="fourth"></div>
              <div className="card2">
                <p className="text1">Science & Technology</p>
                <p>OceanOne connects human's sight and touch to the deep sea</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col2">
            <div className="card">
              <div className="card1" id="fifth"></div>
              <div className="card2">
                <p className="text1">Science & Technology</p>
                <p>OceanOne connects human's sight and touch to the deep sea</p>
              </div>
            </div>
            <div className="card">
              <div className="card1" id="sixth"></div>
              <div className="card2">
                <p className="text1">Science & Technology</p>
                <p>OceanOne connects human's sight and touch to the deep sea</p>
              </div>
            </div>
          </div>
          <div className="col1" id="second">
            <div className="text">
              <div className="line1">IN SPOTLIGHT</div>
              <div className="line2">
                CDAC SCHOLAR FINDS WAY TO TREAT CANCER
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
