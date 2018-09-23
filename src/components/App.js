import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import Navbar from './Navbar.js'

import About from './routes/About'
import Home from './routes/Home'
import Profile from './routes/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/about" exact component={About}/>
          </header>
        </div>
      </Router>
    )
  }
}

export default App
