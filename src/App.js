import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavigationBar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
