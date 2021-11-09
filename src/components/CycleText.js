import React, { useEffect, useState } from "react";

export default function CycleText() {
  const [descriptor, setDescriptor] = useState("Full stack web developer");

  useEffect(() => {
    const interval = setInterval(() => {

      switch (descriptor) {
        case "Full stack web developer":
          return setDescriptor("Digital marketer");
        case "Digital marketer":
            return setDescriptor("Music nerd");
        case "Music nerd":
            return setDescriptor("Technology geek");
        case "Technology geek":
            return setDescriptor("Full stack web developer");
        default:
            return setDescriptor("Full stack web developer");
        // code block
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [descriptor]);

  return <span style={{"backgroundColor": "lightblue", "paddingLeft": "5px", "paddingRight": "5px"}}>{descriptor}</span>;
}
