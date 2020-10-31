import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [Boxes, setBoxes] = useState([{ bg: "#3A8DF3" }]);

  useEffect(() => {
    const interval = setInterval(() => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setBoxes([...Boxes, { bg: "#" + randomColor }]);
    }, 1000);
    return () => clearInterval(interval);
  }, [Boxes]);

  return (
    <div className="App">
      {Boxes.map((box, index) => (
        <div key={index} className="box" style={{ background: box.bg }}>
          <p>{box.bg.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
}
