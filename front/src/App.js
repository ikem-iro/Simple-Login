import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  const [userLogged, setUserLogged] = useState(true)

  const setLogin = (bool) => {
    setUserLogged(bool)
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}/>  
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<Register login={setLogin}/>}/>
          <Route path='/login' element={<Login login={setLogin}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
