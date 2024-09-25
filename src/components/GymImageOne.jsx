import GymImage from '../assets/img/gym-images_1.jpg'
import PropTypes from 'prop-types'


const GymImageOne = ({ className }) => {
  return (
    <img src={GymImage} alt="Men Lifting Heavy Weight" className={className} />
  )
}

export default GymImageOne

GymImageOne.propTypes = {
  className: PropTypes.string
}