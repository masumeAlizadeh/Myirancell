import './App.css';
import react from'react'
import Mainpage from './components/Mainpage';
import Menu from './components/Menu';
import Profile from './components/Profile';
import React from 'react';
function App() {
  return (
   
      <React.Fragment>
         <div className="App">
          <Profile/>
     <Mainpage/>
     <Menu/>
     </div>
      </React.Fragment>
    
   
  );
}

export default App;
