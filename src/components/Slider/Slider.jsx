import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Slider.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const defaultSidesParams = {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 5,
  loop: true,
  slideShadows: true,
  breakpoints: {
    992: { // от 992px и выше
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    650: { // от 768px до 991px
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    0: { // от 768px до 991px
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
}
const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSidesParams,
    navigation,
    showNavigation = true
  } = props

  return (
    <div
      className="slider" data-js-slider={JSON.stringify({
      sliderParams,
      navigationTargetElementId,

    })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider-list swiper-wrapper">
          {children.map((child, index) => (
            <li className="slider-item swiper-slide" key={index}>

              {child}
            </li>
          ))}

        </ul>
        {navigation
          ? navigation
          : !navigationTargetElementId && (
          <SliderNavigation
            className="slider__navigation"

          />
        )}
      </div>

    </div>
  )
}

export default Slider