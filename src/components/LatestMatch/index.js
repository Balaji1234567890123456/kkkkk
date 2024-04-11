// Write your code here
import './index.css'
const LatestMatch = props => {
  const {kol} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = kol
  return (
    <div className="piccha">
      <div className="lolly">
        <h1>{competingTeam}</h1>
        <h1>{date}</h1>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} className="ji" />
      </div>
      <div className="lolly">
        <h1>First Innings</h1>
        <h1>{firstInnings}</h1>
        <h1>Second Innings</h1>
        <h1>{secondInnings}</h1>
        <h1>Man Of The Match</h1>
        <h1>{manOfTheMatch}</h1>
        <h1>Umpires</h1>
        <h1>{umpires}</h1>
      </div>
    </div>
  )
}
export default LatestMatch
