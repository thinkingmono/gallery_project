import GymImage from '../assets/img/gym-images_4.jpg'
import PropTypes from 'prop-types'


const GymImageFour = ({ className }) => {
  return (
    <img src={GymImage} alt="Men Lifting Heavy Weight" className={className} />
  )
}

export default GymImageFour

GymImageFour.propTypes = {
  className: PropTypes.string
}