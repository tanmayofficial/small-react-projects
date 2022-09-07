import Login from './component/Login';
import Signup from "./component/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
