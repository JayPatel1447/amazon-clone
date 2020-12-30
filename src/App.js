import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
          {/* Checkout Page */}
          <Route path="/checkout"> 
          <Checkout />
        </Route>

        {/* Home Page and Home page "/" must be wrriten at last otherwise it will catch word after / as a deafult one. So will render this lines*/}
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
    </div>
    </Router>
  );
}

export default App;
