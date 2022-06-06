import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Art from './pages/art';
import About from './pages/about';
import HallOffFame from './pages/hall-of-fame';
import Exclusive from './pages/exclusive';
import Mint from './pages/mint';
import RoadMapPage from './pages/roadmap-page';

function App() {
  return (
<>
    
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/roadmap-page' element={<RoadMapPage />}/>
      <Route path='/art' element={<Art />}/>
      <Route path='/hall-of-fame' element={<HallOffFame />}/>
      <Route path='/exclusive' element={<Exclusive />}/>
      <Route path='/mint' element={<Mint />}/>
      </Routes>
    
    
    </>
  
  );
}

export default App;
