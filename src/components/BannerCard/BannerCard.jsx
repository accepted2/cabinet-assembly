import './BannerCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const BannerCard = (props) => {
  const {
    className,
    title,
    imgSrc,
  } = props

  return (
    <a
      className={classNames(className, `banner-card`)}
    >
      <h2 className='visually-hidden'>{title}</h2>
      <Image
        className={classNames(className, `banner-card__image`)}
        src={imgSrc}
      />
    </a>
  )
}

export default BannerCard