import { fetchApi } from "./Api";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    fetchApi()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <input value={val} onChange={handleChange} />
      <button onSubmit={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
