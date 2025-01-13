import React from 'react';
import IMG1 from '../../assets/fes.png';
import IMG2 from '../../assets/ccda.png';
import IMG3 from '../../assets/gig.png';
import IMG4 from '../../assets/mdm.png';
import IMG5 from '../../assets/ams.png';
import IMG6 from '../../assets/qc.png';

import FILE1 from '../../assets/Food ERP and Traction using Data Regression v2-Arjunsiva_S.pdf'
import FILE2 from '../../assets/Enhancing Technological Learning with Content Curation and Data Analysis-Arjunsiva_S.pdf'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Food ERP System',
      img: IMG1,
      description:
        "An mobile application specifically designed for college canteens. The main objective of the project is to simplify the food ordering process and accurately predict the sales for the day. By utilizing data analytics and predictive modeling this system has achieved accuracy in forecasting sales leading to improved food preparation and shorter queues.",
      technologies: 'Java | Tableau | Figma | Android Studio',
      github: FILE1,
    },
    {
      id: 2,
      title: 'Enhancing Internet Learning by using Content Curation and Data Analysis',
      img: IMG2,
      description:
        "Content Curation with Web Scraping and Data Analytics introduces a novel methodology, designed to streamline and enhance the learning experience of internet users seeking technology-related courses, studies, lectures, and resources.",
      technologies: 'Python | Machine Learning | React | Figma',
      github: FILE2,
    },
    {
      id: 3,
      title: 'Grok-It with Gemini',
      img: IMG3,
      description: "I've developed a mobile application capable of recognizing physical or real-world objects through the mobile camera or images stored in the mobile's storage to provide comprehensive information about the objects present in it.",
      technologies: 'Java | Kotlin | Gemini 1.5 Flash API | Android Studio',
      github: 'https://github.com/Arjun0106/Grok-It',
    },
    {
      id: 4,
      title: 'Movement Detection Module',
      img: IMG4,
      description:
        "I developed a python system module that can detect and track motion in real-time through the webcam. The collected data is then analyzed for providing insights into the patterns of detected movement.",
      technologies: 'Python | OpenCV | Pandas',
      github: 'https://github.com/Arjun0106/Movement_Detection_Module',
    },
    {
      id: 5,
      title: 'Attendance Management System',
      img: IMG5,
      description:
        "This innovative tool aims to simplify attendance management for college staff by leveraging technologies. Through the app we are able to calculate metrics such, as Sick Leave (SL) Casual Leave (CL) and Loss of Pay (LoP). This app improves efficiency while ensuring accurate and dependable leave calculations.",
      technologies: 'Java | Google Apps Script | Figma | Android Studio',
      github: 'https://github.com/DHINAKARAN-DGS/Pinnacle_RIT_pub',
    },
    {
      id: 6,
      title: 'Quantum Cryptography',
      img: IMG6,
      description:
        'This research paper is officially reviewed and published by Springer Publications. I have authored this paper in which I explore the world of Quantum Key Distribution (QKD) protocols and their groundbreaking potential in guaranteeing the level of security for communication.',
      technologies: 'Cryptography | Quantum Computing Protocols | IBM Quantum Platform',
      github: 'https://link.springer.com/chapter/10.1007/978-3-031-68908-6_7',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Endeavors</h5>
      <h2>Projects & Research 🗂️</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                🔗 Click Here to view this in Detail
              </a>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
