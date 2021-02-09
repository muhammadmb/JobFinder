import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import Home from './Pages/Home/Home';
import Signup from './Components/Signup/Signup';
import Offers from './Pages/Offers/Offers';
import OfferPage from './Pages/OfferPage/OfferPage';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavigationBar/>

        <Route exact path = "/home" component = {Home}/>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/login" component = {LoginForm}/>
        <Route exact path = "/signup" component = {Signup}/>
        <Route exact path = "/offers" component = {Offers}/>
        <Route exact path = "/offer" component = {OfferPage}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
