import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LandingPage from './LandingPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={LandingPage} />
      </Router>
    )
  }
}

export default App
