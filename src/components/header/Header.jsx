import React, { useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Typed from 'typed.js';

const Header = () => {
  useEffect(() => {
    // Initialize the Typed.js animation when the component is mounted
    const typed = new Typed('.typed-text', {
      strings: ["Aspiring Engineer.", "Developer.", "Programmer.", "Tech Aficionado."],
      typeSpeed: 100,
      loop: true,
    });

    // Clean up the Typed instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hi There👋</h4>
        <h1>I'm Arjunsiva S</h1>
        <h4 className="text-light">
          <span className="typed-text"></span> {/* Typed animation will display here */}
        </h4>
        <CTA />
        
        
      </div>
    </header>
  );
};

export default Header;
