import logo from './logo.svg';
import About from './Components/About/index'
import Home from './Components/Home/index'
import './App.css';
import Navbar from './Components/Navbar'
import Login from './Components/Login';
// import Home from './Components/Home'
// import About from './Components/About/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/login' Component={Login}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
