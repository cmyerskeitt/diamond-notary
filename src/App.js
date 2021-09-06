import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Reviews from './Pages/Reviews'

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
          <Route exact path='/reviews' >
            <Reviews />
          </Route>
        </Switch>

      </Router>
     
    </>
  );
}

export default App;
