import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/history' element={<History></History>}></Route>
              <Route path='*' element={<Home></Home>}></Route>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
