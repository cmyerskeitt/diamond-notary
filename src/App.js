import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Pricing from './Pages/Pricing'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/about' >
            <About/>
          </Route>
          <Route exact path='/contact' >
            <Contact />
          </Route>
          <Route exact path='/pricing' >
            <Pricing />
          </Route>
        </Switch>

      </Router>
     
    </>
  );
}

export default App;
