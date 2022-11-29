import React from 'react';
import './secṯion8.css';
import { FaPenNib } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import img1 from '../../images/prof/profile5.jpg';
import img2 from '../../images/prof/profile6.jpg';
import img3 from '../../images/prof/profile3.jpg';
const Section8 = () => {
  return (
    <div className="container8">
      <div className="title">
        <div className="name">
          Fac<span className="highlighter">ulty</span>
        </div>
        <p className="text">CDAC Has the best Faculty in the World</p>
        <div className="icon">
          <FaPenNib className="animateicon" />
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card1">
            <img src={img1}></img>
          </div>
          <div className="card2">
            <p className="name">Shanmuganathan</p>
            <p className="post">CDAC Director</p>It was a great experience
            studying at CDAC University, a memory to cherish for lifetime. My
            experience at CDAC was full of learning and grooming.
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
            <p className="name">Dr.Balaji</p>
            <p className="post">CDAC Director</p>It was a great experience
            studying at CDAC University, a memory to cherish for lifetime. My
            experience at CDAC was full of learning and grooming.
            <div className="icons">
              <BsTwitter className="icon" />
              <BsInstagram className="icon" />
              <FaFacebookF className="icon" />
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="card1">
            <img src={img3}></img>
          </div>
          <div className="card2">
            <p className="name">Messi</p>
            <p className="post">CDAC Director</p>It was a great experience
            studying at CDAC University, a memory to cherish for lifetime. My
            experience at CDAC was full of learning and grooming.
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

export default Section8;
