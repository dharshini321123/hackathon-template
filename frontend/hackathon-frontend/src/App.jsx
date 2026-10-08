import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const testBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/test");

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Backend connection failed ❌");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hackathon Full Stack App</h1>

      <button onClick={testBackend}>
        Test Backend
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;