import './Hero.scss'
import Section from "@/layouts/Section";
import Slider from "@/components/Slider";
import HeroCard from "@/components/HeroCard";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const Hero = (props) => {
  const {
    className,
  } = props

  const heroItems = [
    {
      title: 'kitchen3',
      image: './src/assets/images/hero_images/hero_kitchen3.jpg',
    },
    {
      title: 'kitchen1',
      image: './src/assets/images/hero_images/hero_kitchen.jpg',
    },
    {
      title: 'kitchen6',
      image: './src/assets/images/hero_images/hero_kitchen6.jpg',
    },
    {
      title: 'kitchen2',
      image: './src/assets/images/hero_images/hero_kitchen2.jpg',
    },
    {
      title: 'wardrobe1',
      image: './src/assets/images/hero_images/wardrobe1.jpg',
    },
    {
      title: 'wardrobe2',
      image: './src/assets/images/hero_images/wardrobe2.jpg',
    },
    {
      title: 'bathroom1',
      image: './src/assets/images/hero_images/bathroom1.jpg',
    },
    {
      title: 'wardrobe4',
      image: './src/assets/images/hero_images/wardrobe4.jpg',
    },
    {
      title: 'table3',
      image: './src/assets/images/hero_images/table3.jpg',
    },
    {
      title: 'table2',
      image: './src/assets/images/hero_images/table2.jpg',
    },
    {
      title: 'table1',
      image: './src/assets/images/hero_images/table1.jpg',
    },
    {
      title: 'wardrobe3',
      image: './src/assets/images/hero_images/wardrobe3.jpg',
    },
  ]

  const sliderNavigationId = 'hero-slider-navigation'

  return (
    <Section
      className='hero'
      title="New Arrivals"
      titleId="new-arrivals"

    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        navigation={(
          <SliderNavigation
            className='hero__slider-navigation'
            mode="round"
            id={sliderNavigationId}
          />
        )}
      >

        {heroItems.map((item, index) => (
          <HeroCard
            {...item}
            key={index}
          />
        ))}
      </Slider>

    </Section>

  )
}

export default Hero