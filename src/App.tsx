import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
