import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <label>Username</label>
      <input type="text" value={name} onChange={handleName} />
    </>
  );
}

export default App;
