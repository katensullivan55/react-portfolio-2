import React from 'react';
import ContactIcons from '../ContactIcons';
import aboutImg from '/Users/katherinesullivan/Desktop/react-portfolio/src/assets/images/cover.jpg';



function About({setCurrentLink}) {
  return (
    <section id="about" className="about-section">
    <img src={aboutImg} alt="" />
    <h2 className="title-2">About Me.</h2>
    <p className="description">
    <span>New Full-Stack Developer who is learning coding and has a passion about building intuitive UI and user experience. <br/></span>
    <span>Certificate holder of Full-Stack Web Development Program (Trilogy Coding Bootcamp) at The Ohio State University, Skills in HTML, CSS, JavaScript, responsive web design, front-end and back-end technologies. <br/></span> 
    <span>Additional experience and skills in Git, and implememting computer software systems. Strengths in fast learning, creativity, flexibility, and teamwork.<br/></span>
    <span className="cust-links" onClick={() => setCurrentLink('Contact')}><strong>Want to know more? <span className="sp-connect">Let's connect!</span></strong></span>
    </p>
    <ContactIcons />
    </section>
  )
}

export default About;