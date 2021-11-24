import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import spinner from './assets/Spinner.svg'
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const FabButton = React.lazy(() => import('./components/Fab'))
const Home = React.lazy(() => import('./components/Home'))
const Navigation = React.lazy(() => import('./components/Navigation'))
function App(props) {
  return (
    <HashRouter>
      <Suspense fallback={<img src={spinner} alt="spinner" />}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <FabButton />
      </Suspense>
    </HashRouter>
  )
}

export default App
