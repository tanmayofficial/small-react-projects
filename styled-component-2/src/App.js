import img from "./assets/spinner.png";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App bg">
      <img src={img} className="App-logo" alt="logo-img" />
      <Home/>
      <Service />
      <img src={img} className="App-logo App-logo-reverse" alt="logo-img" />
      <About />
      <Contact />
      <img src={img} className="App-logo" alt="logo-img" />
      {/* <button className='button'>Click Me</button> */}
    </div>
  );
}

export default App;
