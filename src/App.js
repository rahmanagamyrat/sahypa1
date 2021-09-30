import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Gallery } from './components/pages/Gallery';
import { About } from './components/pages/About';
import { Home } from './components/pages/Home';
import { Menu } from './components/pages/Menu';
import { Salamm } from './components/pages/Salamm';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Salamm} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
