import React, { CSSProperties, useMemo } from "react";
import CycleText from "../components/CycleText";
import ReactGA from "react-ga";
import { generatePageTitle } from "../shared/utils";

const Home: React.FC = () => {
  const pageTitle = useMemo(() => generatePageTitle("Web Developer"), []);
  document.title = pageTitle;

  ReactGA.pageview(window.location.pathname + window.location.search);

  const containerStyle: CSSProperties = { height: "100%" };
  const paragraphStyle: CSSProperties = { marginBottom: "-5px" };
  const headingStyle: CSSProperties = { display: "inline" };

  return (
    <div className="d-flex align-items-center" style={containerStyle}>
      <div className="d-flex justify-content-center w-100">
        <div className="col-11 col-md-10">
          <p style={paragraphStyle}>Hi, I'm</p>
          <h1 className="display-1" style={headingStyle}>
            Mike Olivotto
          </h1>{" "}
          <span className="h1">👋</span>
          <h2>
            <CycleText />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
