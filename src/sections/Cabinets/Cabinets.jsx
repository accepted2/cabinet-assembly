import './Cabinets.scss'
import Grid from "@/components/Grid";
import ProductCard from "@/components/ProductCard";
import Section from "@/layouts/Section";

const Cabinets = (props) => {
  const {
    className,
  } = props


  const cabinetsItems = [
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen4.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen3.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen5.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen6.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen7.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen8.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen9.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },
    {
      title: 'Кухня1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },

  ]

  return (
    <Section
      className='cabinets'
      header
      title="Тумбы"
      titleId="Тумбы"
      TitleTag="h3"
      TitleTagStyle="h4"
      id="cabinets"
    >
      <Grid
        className="cabinets__grid"
        columns={4}

      >
        {cabinetsItems.map((item, index) => (
          <ProductCard
            {...item}
            key={index}

          />
        ))}

      </Grid>
    </Section>
  )
}

export default Cabinets