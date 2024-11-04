import React from 'react';
import Wrapper from '../assets/wrappers/About';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0 }); // Trigger when 10% of the component is in view

  return (
    <Wrapper>
      <div className="About-center">
        <div className="About-intro">
          <span className="span1">
            About <span className="span2">Me </span>
          </span>
          <span className="span3">
          I am a skilled web developer with a strong foundation in Microsoft Azure, JavaScript, 
          and web technologies. Currently working as an Associate Technical Engineer at Kyndryl, 
          I manage Azure Virtual Desktop deployments, and optimize data management solutions. 
          My projects, such as a dynamic portfolio site and a tourist guide platform, demonstrate 
          my proficiency in React, HTML, CSS, and MySQL, alongside my ability to create immersive, 
          interactive applications. Certified in Azure Fundamentals (AZ-900) and Azure Data 
          Fundamentals (DP-900), I bring both technical skills and a commitment to high-quality 
          solutions. With a Master’s in Computer Applications, I’m dedicated to delivering 
          impactful, scalable solutions that drive value and efficiency.
          </span>
        </div>
        <div className="About-froend">
          <img 
            ref={ref} 
            className={inView ? 'animate-in' : 'animate-out'} 
            src="/about.png" 
            alt="MERN Stack" 
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
