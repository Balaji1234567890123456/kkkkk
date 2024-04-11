// Write your code here
import './index.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import {Component} from 'react'
class TeamMatches extends Component {
  state = {blogs: []}
  componentDidMount() {
    this.getMatchDetails()
  }
  getBalu = data => ({
    umpires: data.umpire,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTime: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })
  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const o = await fetch(`https://apis.ccbp.in/ipl/:${id}`)
    const v = await o.json()
    console.log(v)
    const i = {
      teamBannerUrl: v.team_banner_url,
      latestMatchDetails: this.getBalu(v.latest_match_details),
      matchCard: v.recent_matches.map(eachItem => this.getBalu(eachItem)),
    }
    this.setState({blogs: i})
  }
  render() {
    const {blogs} = this.state
    const {teamBannerUrl, latestMatchDetails, matchCard} = blogs
    return (
      <div className="polio">
        <div>
          <img src={teamBannerUrl} className="img" />
        </div>
        <div>
          <h1>Latest Matches</h1>
          <div>
            <LatestMatch kol={latestMatchDetails} />
          </div>
          <ul>
            {matchCard.map(eachItem => (
              <MatchCard how={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TeamMatches
