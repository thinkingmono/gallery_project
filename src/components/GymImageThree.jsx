import GymImage from '../assets/img/gym-images_3.jpg'
import PropTypes from 'prop-types'


const GymImageThree = ({ className }) => {
  return (
    <img src={GymImage} alt="Men Lifting Heavy Weight" className={className} />
  )
}

export default GymImageThree

GymImageThree.propTypes = {
  className: PropTypes.string
}