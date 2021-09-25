import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import CurrencyConverter from './components/CurrencyConverter'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={CurrencyConverter} />
    <Route component={NotFound} />
  </Switch>
)

export default App
