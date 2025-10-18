import './ProductCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const ProductCard = (props) => {
  const {
    className,
    description,
    title,
    imgSrc,
    href,
  } = props


  return (
    <a
      className={classNames(className, 'product-card')}
      href='/product-info'
    >
      <div className="product-card__image-wrapper">
        <Image
          className="product-card__image"
          src={imgSrc}
        />
      </div>

      <div className={classNames(className, 'product-card__body')}>

        <h3 className="product-card__title h4">{title}</h3>
        <div className={classNames(className, 'product-card__description')}>
          <p>
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}

export default ProductCard