import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import Home from './Pages/Home/Home';
import Signup from './Components/Signup/Signup';
import Offers from './Pages/Offers/Offers';
import OfferPage from './Pages/OfferPage/OfferPage';
import About from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFoundPage/NotFound';

const MainPages = () => {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/JobFinder" component={Offers} />
        <Route exact path="/offer" component={OfferPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      
    </BrowserRouter>
  );

}

function App() {
  return (
    <div className="App">
      <MainPages />
    </div>
  );
}

export default App;
