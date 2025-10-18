import Swiper from "swiper";
import getParams from "@/utils/getParams";
import {Autoplay, EffectCoverflow, EffectFlip, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const rootSelector = '[data-js-slider]'

class Slider {

  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation]',
    previousButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]'
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.previousButtonElement = this.navigationElement.querySelector(this.selectors.previousButton)
    this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton)
    this.paginationElement = this.navigationElement.querySelector(this.selectors.pagination)

    console.log('Slider init');
    this.init()
  }

  init() {
    new Swiper(this.swiperElement, {
      ...this.params.sliderParams,
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow,
        EffectFlip],
      navigation: {
        prevEl: this.previousButtonElement,
        nextEl: this.nextButtonElement,
      },
      pagination: {
        el: this.paginationElement,
        bulletClass: 'slider-navigation__pagination-bullet',
        bulletActiveClass: 'is-active'
      },
      autoplay: {
        delay: 30000000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
    })

  }

}

class SliderCollection {

  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection