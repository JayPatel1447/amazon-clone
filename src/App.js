import React, {useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import {useStateValue} from "../src/Components/StateProvider/StateProvider"
import {auth} from "./firebase"

function App() {


  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("The User is >> " , authUser)

        if(authUser) {
          //User just logged in or User was logged in
          //Even if you refresh it will log you back in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        }

        else{
          //The user is logged out
          
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <Router>
    <div className="app">
     
      <Switch>
          {/* Login Page */}
          <Route path="/login"> 
          <Login />
        </Route>
          {/* Checkout Page */}
          <Route path="/checkout"> 
          <Header />
          <Checkout />
        </Route>

        {/* Home Page and Home page "/" must be wrriten at last otherwise it will catch word after / as a deafult one. So will render this lines*/}
        <Route path="/">
        <Header />
          <Home />
        </Route>
       
      </Switch>
    </div>
    </Router>
  );
}

export default App;
