import React from 'react';
import './App.css';
import { BrowserRouter as  Router, Switch , Route } from 'react-router-dom';



import Header from './Header'
import Login from '../src/screens/Login'
import PK from '../src/screens/PrivateKey'
import Mne from '../src/screens/Mnemonic'
import Event from '../src/screens/Event'
import TicketList from './screens/TicketList';
import CreateToken from './screens/CreateToken';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
        <Route path="/create">
        <Header />
          <CreateToken />
        </Route>
        <Route path="/market">
            <Header />
            <Event />
            
          </Route>
          
          <Route path="/ticket">
          <Header />
          <TicketList />
            
          </Route>
          <Route path="/login">
          <Login />
            
          </Route>
          <Route path="/privatekey">
            <PK />
          </Route>
          <Route path="/Mnemonic">
            <Mne />
          </Route>
          <Route path="/">
            <Header />
            <h1>home page</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>hhhhhhhhhhhhhhh</h1>
          </Route>
          
          <Route path="/sell"></Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
