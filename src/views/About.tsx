import React, { CSSProperties, useMemo } from "react";
import Header from "../components/Header";
import ReactGA from "react-ga";
import { generatePageTitle } from "../shared/utils";

const About: React.FC = () => {
  const pageTitle = useMemo(() => generatePageTitle("About me"), []);
  document.title = pageTitle;

  ReactGA.pageview(window.location.pathname + window.location.search);

  const introParagraphStyle: CSSProperties = {
    textAlign: "center",
    paddingBottom: "20px",
  };

  const highlightBoxStyle: CSSProperties = {
    backgroundColor: "#ededed",
    borderRadius: "5px",
    padding: "10px",
  };

  const linkStyle: CSSProperties = {
    fontSize: "0.85rem",
  };

  return (
    <div>
      <Header name="About" />
      <div className="d-flex justify-content-center">
        <div className="align-items-center col-12 col-md-10 col-lg-8">
          <p style={introParagraphStyle}>
            Web Developer 👨🏻‍💻 | ex-Digital Marketer 📈 | Music Nerd 🎸 | Tech
            geek 💻
          </p>
          <p>
            Experienced in web app development, website management and digital
            marketing, I use technology to solve problems and build useful (and
            sometimes just meme-worthy) tools.
          </p>
          <p>
            I'm also music-obsessed, love to cook, and have a weird interest in
            unconventional travel destinations.
          </p>
          <p style={highlightBoxStyle}>
            Core tech capabilities include:
            <br />
            <strong>
              React, Node.js, Typescript / JavaScript, GraphQL (Apollo),
              Ruby/Rails, PostgreSQL, HTML5, CSS3, Python
            </strong>
            .
          </p>
          <h2>Experience</h2>
          <p>Some of the roles I have held...</p>
          <ul>
            <li>Front End Engineer/Developer</li>
            <li>Website administrator</li>
            <li>SEO Consultant</li>
            <li>Digital Marketing Manager</li>
            <li>Lead Channel Manager (AVOD)</li>
            <li>Account Manager</li>
          </ul>

          <p>
            ...having worked with and for the likes of Ansarada, Sony Pictures
            Entertainment, Universal Music Australia, Nine
            Entertainment Co, Drova, Hopsters Co-operative Brewery and
            many more.
          </p>

          <h2>Education</h2>
          <ul>
            <li>Diploma of IT (Web Development) </li>
            <li>Bachelor of Business (Marketing)</li>
          </ul>

          <p style={highlightBoxStyle}>
            Certifications:
            <br />
            <ul>
              <li>
                <strong>JavaScript Algorithms & Data Structures </strong>{" "}
                (FreeCodeCamp.org)
              </li>
              <li>
                <strong>Responsive Web Design</strong> (FreeCodeCamp.org)
              </li>
              <li>
                <strong>Google Analytics IQ</strong> (Google)
              </li>
            </ul>
          </p>
          <p style={linkStyle}>
            <a
              href="https://www.linkedin.com/in/mikeolivotto/"
              target="_blank"
              rel="noreferrer noopener"
            >
              View my LinkedIn for a full history
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
