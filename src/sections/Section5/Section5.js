import React from 'react';
import './section5.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';
const Section5 = () => {
  return (
    <div className="container3">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#78a1be"
          fill-opacity="1"
          d="M0,192L30,186.7C60,181,120,171,180,176C240,181,300,203,360,186.7C420,171,480,117,540,128C600,139,660,213,720,218.7C780,224,840,160,900,144C960,128,1020,160,1080,181.3C1140,203,1200,213,1260,197.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <div className="title">
        <div className="name">
          Campus <span className="highlighter">Life</span>
        </div>
        <p className="text">
          Building a vibrant community of creative and accomplished people from
          around the world
        </p>
        <div className="icon">
          <BsFillSuitHeartFill className="animateicon" />
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card1" id="fourteen"></div>
          <div className="card2">
            <div className="text1">Student Life</div>
            <div className="text2">
              A residential campus with diverse housing, exceptional dining,
              health care and over 600 student organizations
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1" id="fifteen"></div>
          <div className="card2">
            <div className="text1">Arts & Culture</div>
            <div className="text2">
              A rich tradition of fostering creativity and a vibrant arts
              district on campus
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1" id="thirteen"></div>
          <div className="card2">
            <div className="text1">Recreation & Wellness</div>
            <div className="text2">
              State-of-the-art facilities and fitness programs to encourage
              movement and play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
