import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((Response) => {
        setJokes(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>

    <center>
    <h1 className="khan">Full Stack Project</h1>
      <p>JOKES :{jokes.length} </p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.name}</h2>
          <h3>{joke.age}</h3>
          <h4>{joke.grade}</h4>
        </div>
      ))}
    </center>
    </>
  );
}

export default App;
