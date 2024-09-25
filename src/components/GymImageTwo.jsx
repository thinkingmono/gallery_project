import GymImage from '../assets/img/gym-images_2.jpg'
import PropTypes from 'prop-types'


const GymImageTwo = ({ className }) => {
  return (
    <img src={GymImage} alt="Men Lifting Heavy Weight" className={className} />
  )
}

export default GymImageTwo

GymImageTwo.propTypes = {
  className: PropTypes.string
}