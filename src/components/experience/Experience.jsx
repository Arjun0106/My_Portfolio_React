import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { skillsData } from '../experience/SkillData'; // Import skillsData
import { skillsImage } from '../experience/SkillImage'; // Import skillsImage
import Marquee from 'react-fast-marquee'; // Import Marquee
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills 🎯</h2>
      <div className="container experience__container">
        {/* Static skill list section */}


        {/* Marquee section for skill scrolling */}
        <div className="experience__marquee">
          <Marquee
            gradient={false}
            speed={50} // Adjust speed for smoother scrolling
            pauseOnHover={true} // Pause animation on hover for better UX
            direction="left" // Change direction if needed
          >
            {skillsData.slice(0,16).map((skill, id) => (
              <div className="skill-marquee-item" key={id}>
                <img
                  className="skill-image"
                  src={skillsImage(skill)} // Dynamically fetch skill image
                  alt={skill}
                />
                <p>{skill.charAt(0).toUpperCase() + skill.slice(1)}</p>
              </div>
            ))}
          </Marquee>
        </div>

        <div></div>

        <div className="experience__content">
          {skillsData.slice(16,22).map((skill, id) => ( // Loop through all skills
            <article className="experience__details" key={id}>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>{skill.charAt(0).toUpperCase() + skill.slice(1)}</h4>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;