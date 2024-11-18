import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-slate-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>

        } />
      </Routes>
    </div>
  );
}

export default App;
