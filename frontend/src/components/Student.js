import React from "react";
import amazon from "../images/amazon-logo-vector 1.png";
import microsoft from "../images/1200px-Microsoft_logo_(2012) 1.png";
import hotstar from "../images/hotstar-dallas-yoga-fest-best-yoga-festival-dallas-fitness-7 1.png";
import ola from "../images/1280px-Ola_Cabs_logo 1.png";
import zyng from '../images/home-zynga-logo-1-1 1.png'

const Student = () => {
  return (
    <div className="wrapper">
    <div className='brand-section'>
    <h2>Our Students work at</h2>

    <div className='brand-container1'>
    <img className='amazon' src={amazon} />
    <img className='microsoft' src={microsoft} />
    <img className='hotstar' src={hotstar} />
    <img className='ola' src={ola} />
    <img className='zyng' src={zyng} />
     </div>

     <div className='brand-container2'>
     <img className='amazon1' src={amazon} />
     <img className='microsoft1' src={microsoft} />
     <img className='hotstar1' src={hotstar} />
     <img className='ola1' src={ola} />
     <img className='zyng1' src={zyng} />
     </div>

     <div className='brand-container3'>
     <img className='amazon2' src={amazon} />
     <img className='microsoft2' src={microsoft} />
     <img className='hotstar2' src={hotstar} />
     <img className='ola2' src={ola} />
     <img className='zyng2' src={zyng} />
     </div>

    </div>
    </div>
  );
};

export default Student;
