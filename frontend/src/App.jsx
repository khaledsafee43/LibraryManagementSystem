import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import NavBar from './components/common/Navbar';
import Home from './pages/interface/Home';
import BrowseBooks from './pages/interface/BrowseBook';

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/browseBooks' element={<BrowseBooks/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
