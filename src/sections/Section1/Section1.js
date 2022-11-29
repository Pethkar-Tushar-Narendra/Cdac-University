import React from 'react';
import './section1.css';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
const Section1 = () => {
  return (
    <div className="container1">
      <div className="header">
        <div className="row1">
          <div className="title">
            <div className="icon"></div>
            {'  '}
            Cdac University
          </div>
          <div className="socials">
            <div className="icon">
              <BsTwitter />
            </div>
            <div className="icon">
              <BsInstagram />
            </div>
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <AiFillYoutube />
            </div>
          </div>
        </div>
        <div className="row2">
          <span className="textAnimation"></span>
          <span className="text">Admissions Open</span>
          <span className="iconAnimation">
            <FaGraduationCap />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
