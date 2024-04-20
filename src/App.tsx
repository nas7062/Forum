import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Join from './components/Join/Join';

function App() {
    
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/join' element={<Join/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
