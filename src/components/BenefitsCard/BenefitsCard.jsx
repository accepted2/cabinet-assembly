import './BenefitsCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const BenefitsCard = (props) => {
  const {
    className,
    imgSrc1,
    imgSrc2,
    title,
    href,
    isTitleHidden = false,
  } = props

  return (
    <div
      className={classNames(className, 'benefits-card')}
    >
      <div className='benefits-card__images'>
        <Image
          className='benefits-card__image'
          src={imgSrc1}

        />

        <Image
          className='benefits-card__image'
          src={imgSrc2}
         
        />
      </div>
    </div>
  )
}

export default BenefitsCard