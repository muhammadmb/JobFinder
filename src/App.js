import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavigationBar/>   
      </BrowserRouter>
    </div>
  );
}

export default App;
