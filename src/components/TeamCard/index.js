// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {cardDetails} = props
  const {name, teamImageUrl, id} = cardDetails
  return (
    <Link to={`/ipl/${id}`}>
      <div className="lol">
        <img src={teamImageUrl} />
        <p>{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
