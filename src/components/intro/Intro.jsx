import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/Arjunsiva.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
        
        <p>
      I'm an ambitious and driven young man, eager to enhance my knowledge and adopt cutting-edge concepts. I have completed my Bachelor of Engineering degree in Computer Science Engineering (CSE) at Rajalakshmi Institute of Technology (2020 - 2024).<br /><br />
      I am always energetic and ambitious to learn new skills & technologies. These qualities help me to get updated and gain more knowledge in the technological field and with Software Engineering as a passion, I am dedicated to develop the skills and knowledge necessary to make a meaningful impact in IT.<br /><br />
      I have actively sought out opportunities to enhance my learning including Certifications, Software Projects and Publishing Research Papers. These experiences have equipped me with a solid Software Engineering foundation and cultivated my ability such as Adaptability, Critical Thinking and Problem-Solving.<br /><br />
    </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro