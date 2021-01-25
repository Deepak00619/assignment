import React from "react";
import logos from "../images/logo.png";
import img2 from "../images/g10.png";
//import btnlets from "../images/btn-let.png";
import style from "styled-components";
import {Button} from 'react-bootstrap';

// const LogoD = style.div`
//   width: 15px;
//   height: 15px;
// `;

const Header = () => {
  return (
    <div className="wrapper">
      <nav className="desktop-nav">
          <img src={logos} alt="prog" />
        <ul className="menu-items">
          <li>
            <a href="/">Payment Plans</a>
          </li>
          <li>
            <a href="/">Curriculum</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
        </ul>
      </nav>

      <header className="hero-container">
        <div className="left">
          <h1>Hire From Us</h1>
          <h3>Make Your Own Success Story</h3>
          <p>
            Your one stop solution for acing your coding skills for Tech
            Interview Preparation.
          </p>
          <a href="/" className='button'>
          <Button variant="primary">Lets Hire</Button>
          </a>
        </div>

        <div className='right'>
        <img src={img2} alt='img2' />
        </div>
      </header>
    </div>
  );
};

export default Header;
