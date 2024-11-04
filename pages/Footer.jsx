import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        {/* <img src="wave.png" alt="" /> */}
        <div className="f-content">
          {/* <span>rashisingha143@gmail.com</span> */}
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
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer