import { Link } from "react-router-dom"
import GymImageOne from "./GymImageOne"
import GymImageTwo from "./GymImageTwo"
import GymImageThree from "./GymImageThree"
import GymImageFour from "./GymImageFour"

const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to='/gym-img-1' className="links">
        <figure className="thumbnail-image-size">
          <GymImageOne />
          <figcaption>Men Lifthing Heavy</figcaption>
        </figure>
      </Link>
      <Link to='/gym-img-2' className="links">
        <figure className="thumbnail-image-size">
          <GymImageTwo />
          <figcaption>Women Streching</figcaption>
        </figure>
      </Link>
      <Link to='/gym-img-3' className="links">
        <figure className="thumbnail-image-size">
          <GymImageThree />
          <figcaption>Men With Ropes</figcaption>
        </figure>
      </Link>
      <Link to='/gym-img-4' className="links">
        <figure className="thumbnail-image-size">
          <GymImageFour />
          <figcaption>Women Lifthing Dumbell</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation