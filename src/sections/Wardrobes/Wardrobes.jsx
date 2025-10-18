import './Wardrobes.scss'
import Section from "@/layouts/Section";
import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";

const Wardrobes = (props) => {
  const {
    className,
  } = props

  const wardrobesItems = [
    {
      title: 'Шкаф1',
      description: '  Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe1.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe2.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe3.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe4.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe5.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe6.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe7.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe8.jpg',
    },
    {
      title: 'Шкаф1',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/wardrobes/wardrobe9.jpg',
    },

  ]

  return (
    <Section
      className="wardrobes"
      header
      title="Шкафы"
      titleId="Шкафы"
      description="Шкафы на любой вкус"
      TitleTag="h3"
      TitleTagStyle="h4"
      id="wardrobes"
    >
      <Grid
        className="wardrobes__grid"
        columns={4}

      >
        {wardrobesItems.map((item, index) => (

          <ProductCard
            {...item}
            key={index}

          />
        ))}


      </Grid>
    </Section>
  )
}

export default Wardrobes