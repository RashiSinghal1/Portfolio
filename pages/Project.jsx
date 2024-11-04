import React from "react";
import Wrapper from "../assets/wrappers/Project";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Project = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <Wrapper>
      <div className="Project">
        <span className="span1">
          My <span className="span2">Project</span>{" "}
        </span>
        <div className="project-center">
          <div className="Project-intro">
            <div className="container">
              <img 
              ref={ref} 
              className={inView ? 'animate-in' : 'animate-out'} 
              src="/port.png" alt="" />
            </div>
          </div>
          <div className="Project-detail">
            <span className="span4">Portfolio </span>
            <span className="span5">
            This portfolio website serves as a showcase of my technical skills and professional accomplishments. Built using HTML, CSS, JavaScript, and React, it offers an immersive experience that highlights my command over front-end technologies. The platform is designed to be visually engaging and user-friendly, illustrating my expertise in creating polished, professional web applications.
            </span>
            <div className="button">
              <a href="https://github.com/RashiSinghal1/Portfolio">
                {" "}
                <button className="button-17">
                  {" "}
                  
                  <FaGithub className="white"/> Code
                </button>
              </a>
              {/* <a href=" ">
                <button className="button-17">
                  {" "}
                  <FaRegCirclePlay /> Demo{" "}
                </button>
              </a> */}
            </div>
          </div>
        </div>
        <div className="project-center">
          <div className="Project-intro">
            <div className="container">
              <img 
              ref={ref} 
              className={inView ? 'animate-in' : 'animate-out'} 
              src="/tour.png" alt="" />
            </div>
          </div>
          <div className="Project-detail">
            <span className="span4">Tour Guide Portal </span>
            <span className="span5">
            Developed a tour guide portal that enhances travel experiences for domestic tourists by offering features like user registration, secure login, and interactive state selection. The portal utilizes Google Maps API for precise route mapping, enabling users to explore destinations conveniently without the need for a human guide. Built with HTML, CSS, MySQL, and JavaScript, this project delivers a smooth and engaging experience, combining functionality with cost-effectiveness for users.
            </span>
            <div className="button">
              <a href="https://github.com/RashiSinghal1/Tour-Guide">
                {" "}
                <button className="button-17">
                  {" "}
                  <FaGithub className="white"/> Code
                </button>
              </a>
              {/* <a href="">
                <button className="button-17">
                  {" "}
                  <FaRegCirclePlay /> Demo{" "}
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
