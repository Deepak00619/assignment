import React from "react";
import { Row, Col } from "react-bootstrap";
import google from "../images/google.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import fb from "../images/fb.png";

const Footer = () => {
  return (
    <>
      <div className="ft">
        <Row class="row tab">
          <Col md={2}>
            <h2 className="help">
              Need Help with <br />
              anything?
            </h2>
            <h5 class="Special">
              Lets hear all about it.<u>Contact us</u>
            </h5>
          </Col>
          <div className="icons">
            <Col md={2} className="c1">
              <h5>Home</h5>
              <h5>What</h5>
              <h5>Why</h5>
              <h5>How</h5>
              <h5>Where</h5>
            </Col>
            <Col md={2} className="c2">
              <h5>About</h5>
              <h5>Program</h5>
              <h5>Genesis</h5>
              <h5>Development</h5>
              <h5>Design</h5>
            </Col>
            <Col md={2} className="c3">
              <h5>News</h5>
              <h5>Advertising</h5>
              <h5>Public</h5>
              <h5>General</h5>
            </Col>
            <Col md={2} className="c4">
              <h5>Help</h5>
              <h5>Contact</h5>
              <h5>Team</h5>
              <h5>Location</h5>
              <h5>FAQ</h5>
            </Col>
          </div>
        </Row>
        <Row class="foot tab">


          <Col md={4}>
            
          </Col>


          <Col md={4}></Col>
          <Col md={4} className='icn'>
            <img className='google' src={google} />
            <img className='youtube' src={youtube} />
            <img className='twitter' src={twitter} />
            <img className='fb' src={fb} />
          </Col>
        </Row>
        <Row class="row tab bor"></Row>
        <Row>
          <Col md={12}>
            <p class="Align">All rights recieved @Programming Pathshala </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
