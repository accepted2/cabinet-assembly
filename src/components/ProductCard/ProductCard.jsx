import './ProductCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Button from "@/components/Button";

const ProductCard = (props) => {
  const {
    className,
    description,
    title,
    imgSrc,
    href,
    isLiked,
  } = props


  return (

    <article className={classNames(className, 'product-card')}>
      <a
        className="product-card__link"
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
      <Button
        className={classNames("product-card__like-button", isLiked && "is-liked")}
        iconName="heart1"
        label={isLiked ? "Dislike" : "Like"}
        hasFillIcon
        isLabelHidden
      />


    </article>
  )
}

export default ProductCard