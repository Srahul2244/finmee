import React from "react";
import Navbar from "./components/Navbar";

function App() {
  const handleClick = () => {
    console.log("show modal here");
  };
  return (
    <div>
      <Navbar handleClick={handleClick} />
    </div>
  );
}

export default App;
