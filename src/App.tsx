import React from 'react';
import './App.css';
import Search from './components/Search';
import UserCard from './components/UserCard';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <h1>Github Directory</h1>
      <Search/>
      <UserCard/>
      </div>
    </div>
  );
}

export default App;
