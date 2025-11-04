import './WardrobeBanner.scss'
import Section from "@/layouts/Section";
import Slider from "@/components/Slider";
import BannerCard from "@/components/BannerCard";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const WardrobeBanner = (props) => {
  const {
    className,
  } = props

  const wardrobeBannerItems = [
    {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe1.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe2.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe3.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe4.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe5.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe6.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe7.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe8.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe9.jpg',
    }, {
      title: 'wardrobe1',
      imgSrc: './src/assets/images/wardrobes/wardrobe10.jpg',
    },
  ]

  const titleId = 'wardrobe-banner-title'

  const sliderNavigationId = 'wardrobe-banner-slider-navigation'

  const sliderParams = {

    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 40,
  
    effect: 'coverflow',

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  }

  return (
    <Section
      className='wardrobe-banner'
      titleId={titleId}

    >
      <h1 className="visually-hidden" id={titleId}>Wardrobes</h1>
      <Slider
        sliderParams={sliderParams}
        navigation={
          <SliderNavigation
            showNavigation={false}
          />
        }
      >
        {wardrobeBannerItems.map((item, index) => (
          <BannerCard
            className="wardrobe"
            {...item}
            key={index}
          />
        ))}
      </Slider>

    </Section>
  )
}

export default WardrobeBanner