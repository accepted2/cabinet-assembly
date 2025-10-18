import './HallwaysBanner.scss'
import Section from "@/layouts/Section";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import BannerCard from "@/components/BannerCard";

const HallwaysBanner = (props) => {
  const {
    className,
  } = props

  const titleId = 'hallway-banner-title'

  const hallwayItems = [
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
    },]

  const sliderNavigationId = 'hallway-banner-slider-navigation'

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
      className='hallway-banner'
      titleId={titleId}
    >

      <h1 className="visually-hidden" id={titleId}>Hallways</h1>

      <Slider
        sliderParams={sliderParams}
        navigation={
          <SliderNavigation
            showNavigation={false}
          />
        }
      >

        {hallwayItems.map((item, index) => (
          <BannerCard
            className="hallway"
            {...item}
            key={index}

          />
        ))}

      </Slider>
    </Section>
  )
}

export default HallwaysBanner