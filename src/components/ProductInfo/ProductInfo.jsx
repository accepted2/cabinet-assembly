import './ProductInfo.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import {Image} from "minista";

const ProductInfo = (props) => {
  const {
    className,
    product,
  } = props

  const sliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 5,

  }


  const titleId = 'product-info-title'
  const sliderNavigationId = 'product-info-slider-navigation'

  return (
    <article
      className={classNames(className, 'product-info')}
      aria-labelledby={titleId}
    >

      <div className="product-info__body">

        <div className="product-info__slider">

          <Slider
            navigation={
              <SliderNavigation
                className="product-info__slider-navigation"
                id={sliderNavigationId}
                mode="round"
              />
            }
            sliderParams={sliderParams}
          >
            {product.images.map((image, index) => (
              <Image
                src={image}
                key={index}
                className="product-info__image"

              />
            ))}

          </Slider>
        </div>
        <div className="product-info__information">
          <h2 className='product-info__title h3'>
            {product.title}
          </h2>
          <div className="product-info__description">
            <p> {product.description}</p>
          </div>

        </div>

      </div>
    </article>
  )
}

export default ProductInfo