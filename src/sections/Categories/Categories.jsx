import './Categories.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import CategoryCard from "@/components/CategoryCard";

const Categories = (props) => {
  const {
    className,
  } = props

  const categoriesItems = [
    {
      title: 'Шкафы',
      href: '/wardrobes',
      imgSrc: './src/assets/images/categories/categories_wardrobes.jpg',
    },
    {
      title: 'Прихожки',
      href: '/hallway',
      imgSrc: './src/assets/images/categories/categories_hallway.jpg',
    },
    {
      title: 'Столы',
      href: '/tables',
      imgSrc: './src/assets/images/categories/categories_table.jpg',
    },
    {
      title: 'Кухни',
      href: '/kitchens',
      imgSrc: './src/assets/images/categories/categories_kitchen.jpg',
    },
    {
      title: 'Тумбы',
      href: '/cabinets',
      imgSrc: './src/assets/images/categories/categories_cabinet.jpg',
    },
  ]


  return (
    <Section
      className='categories'
      header
      title="Виды мебели"
      titleId="kinds-of-cabinets"
      description="Мебель, которая подстраивается под ваш стиль"
      TitleTag='h3'
      TitleTagStyle='h4'
      id='categories'
    >
      <Grid
        className='categories__grid'
        columns={3}
      >
        {categoriesItems.map((item, index) => (
          <CategoryCard

            key={index}
            title={item.title}
            href={item.href}
            imgSrc={item.imgSrc}
            iconName='arrow-right'
          />
        ))}
      </Grid>

    </Section>
  )
}

export default Categories