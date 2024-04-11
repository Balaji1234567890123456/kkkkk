// Write your code here
import './index.css'
const MatchCard = props => {
  const {how} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = how
  return (
    <div className="pop">
      <img src={competingTeamLogo} />
      <h1>{competingTeam}</h1>
      <h1>{result}</h1>
      <p>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
