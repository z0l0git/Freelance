import React, { useState, useEffect } from "react";

export const App = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{showButton && <button>Click me!</button>}</div>;
};
