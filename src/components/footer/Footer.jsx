import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Arjunsiva S</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/arjunsiva-s-b71350163/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Arjun0106" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.hackerrank.com/profile/arjunsiva_s_" target="_blank" rel="noreferrer" ><FaHackerrank /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Arjunsiva S {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
