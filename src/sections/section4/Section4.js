import React from 'react';
import { BiTestTube } from 'react-icons/bi';
import './section4.css';

const Section4 = () => {
  return (
    <div className="container4">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fill-opacity="1"
          d="M0,192L30,186.7C60,181,120,171,180,176C240,181,300,203,360,186.7C420,171,480,117,540,128C600,139,660,213,720,218.7C780,224,840,160,900,144C960,128,1020,160,1080,181.3C1140,203,1200,213,1260,197.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <div className="title">
        <div className="name">
          Re<span className="highlighter">search</span>
        </div>
        <p className="text">
          Driving discoveries vital to our world, our health, and our
          intellectual lifeDriving discoveries vital to our world, our health,
          and our intellectual life
        </p>
        <div className="icon">
          <BiTestTube className="animateicon" />
        </div>
      </div>
      <div className="trans">
        <div className="color">
          <div className="text">
            <p>19 Institutes</p>
            <p>cross disciplinary boundaries</p>
          </div>
          <div className="text">
            <p>20 Libraries</p>
            <p>hold over 9.5 million volumes</p>
          </div>
          <div className="text">
            <p>$1.69 Billion</p>
            <p>sponsored research budget</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card1" id="ten"></div>
          <div className="card2">
            <div className="text1">Science & Technology</div>
            <div className="text2">
              First detection of light from behind a black hole
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1" id="eleven"></div>
          <div className="card2">
            <div className="text1">Science & Technology</div>
            <div className="text2">
              CDAC researchers build $400 self-navigating smart cane
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1" id="twelve"></div>
          <div className="card2">
            <div className="text1">Science & Technology</div>
            <div className="text2">Building a heart, one layer at a time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
