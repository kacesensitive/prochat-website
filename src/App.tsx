import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ minHeight: "100px" }}></div>
    </div>
  );
}

export default App;
