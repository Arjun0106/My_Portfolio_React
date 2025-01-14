import React from 'react';
import IMG1 from '../../assets/azure.png';
import IMG2 from '../../assets/isc2.png';
import IMG3 from '../../assets/isb.png';
import IMG4 from '../../assets/ibmsb.png'
import IMG5 from '../../assets/ecc.png';
import IMG6 from '../../assets/udemy.png';
import IMG7 from '../../assets/forage.png';
import FILE1 from '../../assets/Certifications - arjunsivas-6431 _ Microsoft Learn(1).pdf'
import FILE2 from '../../assets/Certifications - ArjunsivaS-6431 _ Microsoft Learn.pdf'
import FILE3 from '../../assets/CC_Course_Completion_Certificate-Arjunsiva_S.pdf'
import FILE4 from '../../assets/Full_Stack_Development_ISB-Arjunsiva_S.pdf'
import FILE5 from '../../assets/IBM_SkillsBuild_Artificial_Intelligence_Fundamentals_Certificate-Arjunsiva_S.pdf'
import FILE6 from '../../assets/ECC-CSCU-Certificate-Arjunsiva_S.pdf'
import FILE7 from '../../assets/DevOps Udemy Course-Arjunsiva_S.pdf'
import FILE8 from '../../assets/Flutter & Dart Udemy Course-Arjunsiva_S.pdf'
import FILE9 from '../../assets/SQL Fundamentals Udemy Course-Arjunsiva_S.pdf'
import FILE10 from '../../assets/Forage TATA CAJS-Arjunsiva_S.pdf'
import FILE11 from '../../assets/Forage Cognizant AMJS-Arjunsiva_S.pdf'
import FILE12 from '../../assets/Forage AWS SAJS-Arjunsiva_S.pdf'

import './certificates.css';

const Certificates = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      img: IMG1,
      description:
        'I have successfully completed the "Microsoft Azure Fundamentals (AZ-900)" certification, demonstrating a solid understanding of core cloud concepts and services. This certification has equipped me with essential skills in cloud computing, enabling me to effectively contribute to cloud-based projects and enhance my technical expertise in the field.',
      technologies: 'Azure Platform | Azure Sandbox | Service & Deployment Models | Pricing | Networking',
      github: FILE1,
    },
    {
      id: 2,
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      img: IMG1,
      description:
        'I have successfully completed the "Microsoft Azure AI Fundamentals (AI-900)" certification, demonstrating a solid understanding of artificial intelligence concepts and services within the Azure platform. This certification has equipped me with essential skills in AI, enabling me to effectively contribute to AI-driven projects and enhance my technical expertise in the field.',
      technologies: 'Azure Platform | Azure Sandbox | Machine Learning | Computer Vision | NLP',
      github: FILE2,
    },
    {
      id: 3,
      title: 'ISC2 Certified : Certified in Cybersecurity (CC) Course',
      img: IMG2,
      description: 'I have successfully completed the "ISC2 Certified : Certified in Cybersecurity (CC) Course" certification, demonstrating a solid understanding of cloud security concepts and best practices. This certification has equipped me with essential skills in securing cloud environments, enabling me to effectively contribute to cloud security projects and enhance my technical expertise in the field.',
      technologies: 'Cybersecurity Concepts | Best Practices | Networking | Access Control | Authentication | Recovery',
      github: FILE3,
    },
    {
      id: 4,
      title: 'Full Stack Development',
      img: IMG3,
      description:
        'I have successfully completed the "Infosys Springboard : Full Stack Development" certification, demonstrating a solid understanding of front-end and back-end development concepts. This certification has equipped me with essential skills in building dynamic web applications, enabling me to effectively contribute to full-stack development projects and enhance my technical expertise in the field.',
      technologies: 'AngularJS | NodeJS | MongoDB',
      github: FILE4,
    },
    {
      id: 5,
      title: 'Artificial Intelligence Fundamentals',
      img: IMG4,
      description:
        'I have successfully completed the "Artificial Intelligence Fundamentals" course on IBM SkillsBuild, gaining a strong foundation in AI concepts and techniques. This course has equipped me with essential skills in machine learning, data analysis, and AI model development, enabling me to effectively contribute to AI projects and enhance my technical expertise in the field.',
      technologies: 'Machine Learning | Deep Learning | Neural Networks | Computer Vision | NLP',
      github: FILE5,
    },
    {
      id: 6,
      title: 'Certified Secure Computer User (CSCU)',
      img: IMG5,
      description:
        'I have successfully completed the "EC-Council : Certified Secure Computer User (CSCU)" certification, demonstrating a solid understanding of essential cybersecurity concepts and best practices. This certification has equipped me with the skills to protect personal and organizational data, enabling me to effectively contribute to cybersecurity initiatives and enhance my technical expertise in the field.',
      technologies: 'Data Security | System & Mobile Security | Backup Strategies | Safety Measures',
      github: FILE6,
    },
    {
      id: 7,
      title: 'DevOps Fundamentals',
      img: IMG6,
      description:
        'I have successfully completed the "DevOps Fundamentals" certification on Udemy, demonstrating a solid understanding of DevOps principles and practices. This certification has equipped me with essential skills in automation, continuous integration, and collaboration, enabling me to effectively contribute to DevOps initiatives and enhance my technical expertise in the field.',
      technologies: 'CICD | IaC | Automation | Continuous Deployment | Communication',
      github: FILE7,
    },
    {
      id: 8,
      title: 'Flutter & Dart Fundamentals',
      img: IMG6,
      description:
        'I have successfully completed the "Flutter and Dart Fundamentals" certification on Udemy, demonstrating a solid understanding of mobile app development using Flutter and Dart. This certification has equipped me with essential skills in building cross-platform applications, enabling me to effectively contribute to mobile development projects and enhance my technical expertise in the field.',
      technologies: 'OOPS | Asynchronous Programming | Automation | Widget-based UI Design',
      github: FILE8,
    },
    {
      id: 9,
      title: 'SQL Fundamentals',
      img: IMG6,
      description:
        'I have successfully completed the "SQL Fundamentals" certification on Udemy, demonstrating a solid understanding of database management and SQL queries. This certification has equipped me with essential skills in data manipulation and analysis, enabling me to effectively contribute to database-related projects and enhance my technical expertise in the field.',
      technologies: 'Commands | Aggregate Functions | Operations',
      github: FILE9,
    },
    {
      id: 10,
      title: "TATA Group's Cybersecurity Analyst Job Simulation",
      img: IMG7,
      description:
        'I have successfully completed the "Cybersecurity Analyst Job Simulation" by TATA Group on Forage, demonstrating a solid understanding of cybersecurity practices and threat analysis. This simulation has equipped me with essential skills in identifying and mitigating security risks, enabling me to effectively contribute to cybersecurity initiatives and enhance my technical expertise in the field.',
      technologies: 'Best Practices | Risk & Threat Analysis | Identity & Access Management',
      github: FILE10,
    },
    {
      id: 11,
      title: "Cognizant's Agile Methodology Job Simulation",
      img: IMG7,
      description:
        'I have successfully completed the "Agile Methodology Job Simulation" by Cognizant on Forage, demonstrating a solid understanding of Agile principles and practices. This simulation has equipped me with essential skills in project management, collaboration, and iterative development, enabling me to effectively contribute to Agile projects and enhance my technical expertise in the field.',
      technologies: 'Agile Principles | Scrum Framework | Collaboration',
      github: FILE11,
    },
    {
      id: 12,
      title: "AWS APAC's Solutions Architecture Job Simulation",
      img: IMG7,
      description:
        'I have successfully completed the "Solutions Architecture Job Simulation" by AWS APAC on Forage, demonstrating a solid understanding of cloud architecture and solution design principles. This simulation has equipped me with essential skills in building scalable and efficient cloud solutions, enabling me to effectively contribute to architecture projects and enhance my technical expertise in the field.',
      technologies: 'AWS Hosting Architecture | Architecture Diagrams | Pricing',
      github: FILE12,
    },
  ];

  return (
    <section id="certificates">
      <h5>My Professional Qualifications</h5>
      <h2>Certifications & Credentials 📜</h2>

      <div className="container certificates__container">
        {soloProjects.map((pro) => (
          <article className="certificates__item" key={pro.id}>
            <div className="certificates__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="certificates__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="certificates__item-cta">
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

export default Certificates;
