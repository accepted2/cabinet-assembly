import './FavoriteProducts.scss'
import Section from "@/layouts/Section";

import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";

const FavoriteProducts = (props) => {
  const {
    className,
  } = props

  const favoriteProductItems = [
    {
      title: 'Сохраненный',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    }, {
      title: 'Сохраненный',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    }, {
      title: 'Сохраненный',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    }, {
      title: 'Сохраненный',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },
    {
      title: 'Сохраненный',
      description: ' Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Commodi corporis culpa',
      imgSrc: './src/assets/images/Kitchens/kitchen2.jpg',
    },

  ]

  return (

    <Section
      className='favorite-products'
      header
      title="Избраннные"
      titleId="Избраннные"
      TitleTag="h3"
      TitleTagStyle="h4"
      id="favorite-products"
    >

      <Grid
        className="favorite-products__grid"
        columns={4}

      >
        {favoriteProductItems.map((product, index) => (
          <ProductCard
            isLiked
            {...product}
            key={product.title}

          />
        ))}

      </Grid>
    </Section>

  )
}

export default FavoriteProducts