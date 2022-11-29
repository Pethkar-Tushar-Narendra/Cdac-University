import React from 'react';
import './section7.css';
import { BsTrophyFill } from 'react-icons/bs';
import { ImLibrary } from 'react-icons/im';
import { IoIosPeople } from 'react-icons/io';
const Section7 = () => {
  return (
    <div className="container7">
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
          About <span className="highlighter">Us</span>
        </div>
        <p className="text">
          Preparing students to make meaningful contributions as engaged
          citizens and leaders in a complex world
        </p>
        <div className="icon">
          <BsTrophyFill className="animateicon" />
        </div>
      </div>
      <div className="trans">
        <div className="color">
          <div className="text">
            <p>Opened In</p>
            <p>1994</p>
          </div>
          <div className="text">
            <p>Students</p>
            <p>16,93700</p>
          </div>
          <div className="text">
            <p>Faculty</p>
            <p>2,288</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="row1">
            <ImLibrary className="icon" style={{ color: '#F94449' }} />
          </div>
          <div className="row2">Great Location</div>
          <div className="row3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            illo.
          </div>
        </div>
        <div className="card">
          <div className="row1">
            <BsTrophyFill className="icon" style={{ color: 'green' }} />
          </div>
          <div className="row2">Award Winning</div>
          <div className="row3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            illo.
          </div>
        </div>
        <div className="card">
          <div className="row1">
            <IoIosPeople className="icon" style={{ color: '#29ABE2' }} />
          </div>
          <div className="row2">Best Faculty</div>
          <div className="row3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            illo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
