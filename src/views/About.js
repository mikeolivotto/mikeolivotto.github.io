import React from "react";
import Header from "../components/Header";

const Experience = () => {
  document.title = `About me | Mike Olivotto`;
  return (
    <div>
      <Header name="About" />
      <div className="d-flex justify-content-center">
        <div className="align-items-center col-12 col-md-10 col-lg-8">
          <p style={{ textAlign: "center" }}>
            Web Developer 👨🏻‍💻 | Digital Marketer 📈 | Music Nerd 🎸 | Tech geek
            💻
          </p>
          <p>
            Experienced in web app development, website management and digital
            marketing, I like to use technology to solve problems and build
            useful (and sometimes just meme-worthy) tools.
          </p>
          <p>
            I'm also obsessed with music, love to cook, and have a weird interest in
            unconventional travel destinations.
          </p>
          <p style={{"backgroundColor": "#ededed", "borderRadius": "5px", "padding": "10px"}}>
            Core tech capabilities include:<br />
            <strong>
              React, Node.js, Ruby/Rails, PostgreSQL, JavaScript, HTML5, CSS3,
              Python
            </strong>
            .
          </p>
          <h2>Experience</h2>
          <p>Some of the roles I have held...</p>
          <ul>
            <li>Website administrator</li>
            <li>SEO Consultant</li>
            <li>Digital Marketing Manager</li>
            <li>Lead Channel Manager (AVOD)</li>
            <li>Account Manager</li>
          </ul>

        <p>...having worked with and for the likes of Sony Pictures Entertainment, Viacom, NBA, Universal Music Australia, Nine Entertainment Co, Hopsters Co-operative Brewery and many more.</p>

        
        <h2>Education</h2>
          <ul>
            <li>Diploma of IT (Web Development)</li>
            <li>Cert IV Web Development</li>
            <li>Bachelor of Business (Marketing)</li>
          </ul>

          <p style={{"backgroundColor": "#ededed", "borderRadius": "5px", "padding": "10px"}}>
            Certifications:<br />
            <strong>
            JavaScript Algorithms & Data Structures </strong>(FreeCodeCamp.org)<strong>, Responsive Web Design </strong>(FreeCodeCamp.org), <strong>Google Analytics IQ </strong>(Google).
          </p>
          <p style={{"fontSize": "0.85rem"}}><a href="https://www.linkedin.com/in/mikeolivotto/" target="_blank" rel="noreferrer noopener">View my LinkedIn for a full history</a></p>
          </div>
      </div>
    </div>
  );
};

export default Experience;
