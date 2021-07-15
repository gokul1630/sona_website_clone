import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import './App.css';
import FabButton from './components/Fab';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function ReactSwitches() {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className='switch-wrapper'
    >
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </AnimatedSwitch>
  );
}

function App(props) {
  return (
    <main>
      <HashRouter>
        <Navigation />
        <ReactSwitches />
        <FabButton />
      </HashRouter>
    </main>
  );
}

export default App;
