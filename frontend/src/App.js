// # Purpose: React App with Button Fetch

import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = () => {
    fetch("http://localhost:5000/test")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>MERN Stack Demo</h1>
        <p>Click button to fetch backend message:</p>

        <button className="btn" onClick={getMessage}>
          Get Message
        </button>

        {message && <h3 className="message">{message}</h3>}
      </div>
    </div>
  );
}

export default App;
