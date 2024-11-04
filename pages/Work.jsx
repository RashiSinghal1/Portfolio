import React from 'react'
import Wrapper from "../assets/wrappers/work";
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <Wrapper>
      <div className="Work">
        <span className="span1">
          Work <span className="span2"> Experience</span>{" "}
        </span>
        <div className="Work-center">
          <div className="Work-detail">
            <span className="span4">TCS iON </span>
            <span className="span5">
            During my internship with TCS iON, I developed a tour guide portal for travelers, incorporating features such as user registration, login, and state selection. I integrated Google Maps API to enhance route-finding capabilities, providing users with a convenient and cost-effective tool for exploring destinations. This project allowed me to apply my skills in HTML, CSS, JavaScript, and JSP, delivering an efficient, user-centered solution.
            </span>
          </div>
          <div className="Work-intro">
            <div className="container">
              <img 
               ref={ref} 
               className={inView ? 'animate-in' : 'animate-out'}
               src="/TCS.png" alt="" />
            </div>
          </div>
        </div>
        <div className="Work-center">
          <div className="Work-detail">
            <span className="span4">Kyndryl</span>
            <span className="span5">
            At Kyndryl, I play a key role in managing and enhancing cloud infrastructure, focusing on Microsoft Azure. My responsibilities include administering Azure Virtual Desktop, where I deploy applications, configure services, and integrate data storage solutions that prioritize system security, scalability, and data management efficiency. This involves working closely with various Azure services to optimize performance and ensure a smooth user experience.
            </span>
          </div>
          <div className="Work-intro">
            <div className="container">
              <img
               ref={ref} 
               className={inView ? 'animate-in' : 'animate-out'}
                src="/kyn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Work