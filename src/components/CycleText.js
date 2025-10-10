import React, { useEffect, useState } from "react";

export default function CycleText() {
  const [descriptor, setDescriptor] = useState("Web developer");

  useEffect(() => {
    const interval = setInterval(() => {

      switch (descriptor) {
        case "Web developer":
          return setDescriptor("Music nerd");
        case "Music nerd":
            return setDescriptor("Technology geek");
        case "Technology geek":
            return setDescriptor("Web developer");
        default:
            return setDescriptor("Web developer");
        // code block
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [descriptor]);

  return <span style={{"backgroundColor": "lightblue", "paddingLeft": "5px", "paddingRight": "5px"}}>{descriptor}</span>;
}
