import React from "react";
import img01 from "../../assets/img/images/about.jpeg";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";
import ParticlesBg from 'particles-bg'
const WhoWeAre = (props) => {
  const openWhatsapp=() => {
    const msg = 'I want an ID'
    const url = `https://wa.link/lotusoffice?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank')
  } 
  return (
    
    <section id="about" className="about-area  pb-130">
<ParticlesBg type="lines" bg={true} />
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight text-center" data-wow-delay=".2s">
              <div className="section-title mb-30 text-center">
                <span className="sub-title text-center">Join Us Now</span>
                <h2 className="title text-center mb-5">
                INDIA'S   <span>MOST</span> TRUSTED PLATFORM!!!
                </h2>
                
                
              </div>
              <ul>
                <li className=" text-center " style={{color:"white"}}> ~ 5 CR+ USERS</li>
                <li className=" text-center mb-10" style={{color:"white"}}>~ SAFE & SECURE</li>
                </ul>
              <a className="btn text-center" onClick={openWhatsapp}>
               <i className="fab fa-whatsapp"></i> Whatsapp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
