import React from 'react';
import 'milligram';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import CardsList from './pages/CardsList';
import CardsDetails from './pages/CardsDetails';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Magic The Gathering</h1>
          <Navbar/>
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cards' exact component={CardsList} />  
          <Route path='/cards/:id' exact component={CardsDetails} />  
          <Route component={NotFound} />  
        </Switch>
           
      </div>
    </Router>
    
  );
}

export default App;
