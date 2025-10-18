import './Kitchens.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import ProductCard from "@/components/ProductCard";

const kitchens = (props) => {
  const {
    className,
  } = props

  const kitchensItems = [
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
      className='kitchens'
      header
      title="Кухни"
      titleId="Кухни"
      description="Кухни на любой вкус"
      TitleTag="h3"
      TitleTagStyle="h4"
      id="kitchens"
    >
      <Grid
        className="kitchens__grid"
        columns={4}

      >
        {kitchensItems.map((item, index) => (

          <ProductCard
            
            {...item}
            key={index}
          />
        ))}


      </Grid>

    </Section>
  )
}

export default kitchens