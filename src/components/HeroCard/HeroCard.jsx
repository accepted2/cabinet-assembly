import './HeroCard.scss'
import {Image} from "minista";

const HeroCard = (props) => {
  const {
    title,
    image
  } = props

  return (
    <a
      className='hero-card' href="/"
    >
      <Image
        className="hero-card__image"
        src={image}

      />
    </a>
  )
}

export default HeroCard