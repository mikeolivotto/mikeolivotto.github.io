import React, { CSSProperties, useMemo } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import { generatePageTitle } from "../shared/utils";

const NotFound: React.FC = () => {
  const pageTitle = useMemo(() => generatePageTitle("404"), []);
  document.title = pageTitle;

  ReactGA.pageview(window.location.pathname + window.location.search);

  const containerStyle: CSSProperties = {
    height: "100%",
    textAlign: "center"
  };

  const emojiStyle: CSSProperties = {
    fontSize: "5rem",
    marginBottom: "1rem"
  };

  const headingStyle: CSSProperties = {
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: "1rem"
  };

  const messageStyle: CSSProperties = {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "#6c757d"
  };

  const linkStyle: CSSProperties = {
    fontSize: "1.2rem",
    textDecoration: "none"
  };

  const messages = [
    "Oops! This page took a wrong turn at Albuquerque.",
    "Well, this is awkward... The page went on vacation.",
    "Looks like this page is playing hide and seek... and winning."
  ];

  const randomMessage = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    []
  );

  return (
    <div className="d-flex align-items-center" style={containerStyle}>
      <div className="d-flex justify-content-center w-100">
        <div className="col-11 col-md-8">
          <div style={emojiStyle}>🤷‍♂️</div>
          <h1 style={headingStyle}>404</h1>
          <p style={messageStyle}>{randomMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
