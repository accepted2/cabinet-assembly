import './KitchensBanner.scss'
import BannerCard from "@/components/BannerCard";
import Section from "@/layouts/Section";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const kitchensBanner = (props) => {
  const {
    className,
  } = props

  const titleId = 'kitchens-banner-title'
  const sliderNavigationId = 'kitchens-banner-slider-navigation'


  const kitchenBannerItems = [
    {
      title: 'kitchen1',
      imgSrc: './src/assets/images/Kitchens/kitchen1.jpg',
    },
    {
      title: 'kitchen2',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },
    {
      title: 'kitchen3',
      imgSrc: './src/assets/images/Kitchens/kitchen3.jpg',
    },
    {
      title: 'kitchen4',
      imgSrc: './src/assets/images/Kitchens/kitchen4.jpg',
    },
    {
      title: 'kitchen5',
      imgSrc: './src/assets/images/Kitchens/kitchen5.jpg',
    },
    {
      title: 'kitchen6',
      imgSrc: './src/assets/images/Kitchens/kitchen6.jpg',
    },
    {
      title: 'kitchen7',
      imgSrc: './src/assets/images/Kitchens/kitchen7.jpg',
    },
    {
      title: 'kitchen8',
      imgSrc: './src/assets/images/Kitchens/kitchen8.jpg',
    },
    {
      title: 'kitchen9',
      imgSrc: './src/assets/images/Kitchens/kitchen9.jpg',
    },
    {
      title: 'kitchen7',
      imgSrc: './src/assets/images/Kitchens/kitchen7.jpg',
    },
    {
      title: 'kitchen7',
      imgSrc: './src/assets/images/Kitchens/kitchen7.jpg',
    },
    {
      title: 'kitchen7',
      imgSrc: './src/assets/images/Kitchens/kitchen7.jpg',
    },


  ]

  const sliderParams = {

    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 40,
    effect: 'coverflow',

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },

    breakpoints: {

      600: {
        slidesPerView: 2,
        centeredSlides: true,
      }
    }
  }

  return (
    <Section
      className="kitchens-banner"
      titleId={titleId}
    >

      <h1 className="visually-hidden" id={titleId}>Kitchens</h1>

      <Slider
        navigation={
          <SliderNavigation
            className="kitchens-banner__slider-navigation"
            id={sliderNavigationId}
            mode="round"

          />
        }
        sliderParams={sliderParams}
      >
        {kitchenBannerItems.map((item, index) => (
          <BannerCard
            className="kitchens-banner"
            {...item}
            key={index}

          />
        ))}
      </Slider>
    </Section>
  )
}

export default kitchensBanner