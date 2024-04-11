import {Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/ipl/:id" component={TeamMatches} />
  </div>
)

export default App
