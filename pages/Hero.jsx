import React from "react";
import Wrapper from "../assets/wrappers/Hero";
// import Image from "next/image";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Hero = () => {
  const imageStyle = {
    width: "50",
    border: "1px solid #fff",
  };



  
  return (
    <Wrapper>
      <div className="Hero-center">
        <div className="Hero-intro">
          {/* <span className="span1">Hi I Am </span>{" "} */}
          <span className="span1">Rashi Singhal</span>
          <span className="span3">
          Experienced web developer skilled in crafting user-friendly websites, optimizing performance, and building efficient, responsive web solutions.
            {/* Let me take a moment to
            introduce myself and share my educational journey.I completed my UG
            degree in BCA at R.K.S College of Arts and Science. I pursued PG
            degree in MCA at Amity University. During my time, I discovered my
            fascination for creating intuitive and visually appealing user
            experiences. Throughout my MCA journey, I had the opportunity to
            delve deeper into the MERN stack, which sparked my interest even
            more in full-stack development. */}
          </span>
          <div className="f-icons">
            <a className='trans' href="https://github.com/RashiSinghal1">
              {" "}
              <FaGithub className="img" />
            </a>
            <a className='trans' href="https://www.linkedin.com/in/rashi-singhal-a99779247/">
              <FaLinkedin className="img" />
            </a>
            <a className='trans' href="mailto:rashisingha143@gmail.com">
              {" "}
              <IoIosMail className="img"  />
            </a>
          </div>
          <div className="Tec-class">
            {/* <div className="image-font">
              <span className="span6"> Tec Stack | </span> 
              <span className="images">
                <img src="/html.png" alt="" />
                <img src="/css.png" alt="" />
                <img src="/js.png" alt="" />
                <img src="/java.png" alt="" />
                <img src="/ex.png" alt="" />
                <img src="/mongo.png" alt="" />
              </span>
            </div> */}
          </div>
          <div className="button-cv ">
            <a href="/S.K.Sugan.pdf" download>
              <button className="button-17" type="button">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="Hero-boy">
          <img id="boy" src="/boy2.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
