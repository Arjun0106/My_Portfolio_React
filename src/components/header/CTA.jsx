import React from 'react';
import CV from '../../assets/Arjunsiva S - Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
