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
  const [userLogged, setUserLogged] = useState(false)
  const [userName, setUserName] = useState({
    
  })

  const setLogin = (bool) => {
    setUserLogged(bool)
  }
  console.log(userLogged)
  console.log(userName)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {!userLogged && <Route path='/' element={<Dashboard />}/>} 
          {userLogged && <Route path='/' element={<Home  name={userName} />}/> } 
          <Route path='/signup' element={<Register login={setLogin}/>}/>
          <Route path='/login' element={<Login login={setLogin} user={setUserName}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
