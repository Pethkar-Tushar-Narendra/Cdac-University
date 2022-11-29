import React from 'react';
import './section6.css';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import img1 from '../../images/prof/profile2.jpg';
import img2 from '../../images/prof/profile1.png';
import img3 from '../../images/prof/profile3.jpeg';
const Section6 = () => {
  return (
    <div className="container6">
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
          Test<span className="highlighter">imonial</span>
        </div>
        <p className="text">What Our Students Say</p>
        <div className="icon">
          <ImQuotesLeft className="animateicon" />
          <ImQuotesRight className="animateicon" />
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card1">
            <img src={img1}></img>
          </div>
          <div className="card2">
            <h2>Daenerys</h2>It was a great experience studying at CDAC
            University, a memory to cherish for lifetime. My experience at CDAC
            was full of learning and grooming.
            <div className="icons">
              <BsTwitter className="icon" />
              <BsInstagram className="icon" />
              <FaFacebookF className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <img src={img2}></img>
          </div>
          <div className="card2">
            <h2>Tony</h2>It was a great experience studying at CDAC University,
            a memory to cherish for lifetime. My experience at CDAC was full of
            learning and grooming.
            <div className="icons">
              <BsTwitter className="icon" />
              <BsInstagram className="icon" />
              <FaFacebookF className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <img src={img3}></img>
          </div>
          <div className="card2">
            <h2>Daenerys</h2>It was a great experience studying at CDAC
            University, a memory to cherish for lifetime. My experience at CDAC
            was full of learning and grooming.
            <div className="icons">
              <BsTwitter className="icon" />
              <BsInstagram className="icon" />
              <FaFacebookF className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
