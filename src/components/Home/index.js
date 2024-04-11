// Write your code here

import './index.css'
import TeamCard from '../TeamCard'
import {Component} from 'react'
class Home extends Component {
  state = {matchCards: []}
  componentDidMount() {
    this.getCards()
  }
  getCards = async () => {
    const y = await fetch('https://apis.ccbp.in/ipl')
    const u = await y.json()
    const k = u.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({matchCards: k})
  }
  render() {
    const {matchCards} = this.state
    return (
      <div className="balu">
        <div className="lol">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="pool"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul>
          {matchCards.map(eachItem => (
            <TeamCard cardDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
