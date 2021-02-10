import React,{useState,useContext} from 'react';
import './App.css';
import { BrowserRouter as  Router, Switch , Route } from 'react-router-dom';



import Header from './Header'
import Login from '../src/screens/Login'
import PK from '../src/screens/PrivateKey'
import Mne from '../src/screens/Mnemonic'
import Event from '../src/screens/Event'
import TicketList from './screens/TicketList';
import CreateToken from './screens/CreateToken';
import Profile from './screens/Profile';
import {LoginContext} from "./screens/LoginContext";
import NFT from './screens/NFT';

function App() {
  const [showProfile , setshowProfile ] = useState(false);
  const [prKey , setPrKey ] = useState('');
  return (
    <Router>
      <div className="App">
        <LoginContext.Provider value={{ prKey, setPrKey, setshowProfile }}>
          <Switch>
            <Route path="/create">
              <Header />
              <CreateToken />
            </Route>
            <Route path="/market">
              <Header />
              <Event />
            </Route>

            <Route path="/nft">
              <Header />
              <NFT />
            </Route>

            <Route path="/ticket">
              <Header />
              
            </Route>

            <Route path="/Mnemonic">
              <Mne />
            </Route>

            <Route path="/checkout">
              <Header />
              <h1>hhhhhhhhhhhhhhh</h1>
            </Route>
            <Route path="/profile">
              <Header />
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/privateKey">
              <Header />

              {showProfile ? <Profile /> : <PK />}
            </Route>

            <Route path="/sell"></Route>

            <Route path="/">
              <Header />
              <h1>home page</h1>
            </Route>
          </Switch>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
