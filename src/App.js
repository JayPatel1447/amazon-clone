import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login';

function App() {
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
