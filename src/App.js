import React from 'react';
import Home from './Components/Home/Home'
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Topbar from './Components/Topbar/Topbar';
import Write from './Components/Write/Write';
import Settings from './Components/Settings/Settings';
import Single from './Components/Single/Single'
import Posts from './Components/Posts/Posts'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';


function App() {
  const user = false;
  return (
    <Router>
     <Topbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        
        <Route path='/signup' element={user ? <Home/> : <Signup/>} />
        <Route path='/login' element={user ? <Home/> : <Login/>} />
        <Route path='/write' element={user ? <Write/>: <Signup/>} />
        <Route path='/settings' element={user? <Settings/>: <Signup/>} />
        <Route path='/post/:postId' element={<Single/>} />
        <Route path='/stories' element={<Posts/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        
        
          </Routes>
    </Router>
  )
}

export default App