import React, { CSSProperties, useEffect, useState } from "react";

const Descriptors = ["Web developer", "Music nerd", "Technology geek"] as const;

const CycleText: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Descriptors.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const style: CSSProperties = {
    backgroundColor: "lightblue",
    paddingLeft: "5px",
    paddingRight: "5px",
  };

  return <span style={style}>{Descriptors[index]}</span>;
};

export default CycleText;
