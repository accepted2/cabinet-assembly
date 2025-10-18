import './Benefits.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import BenefitsCard from "@/components/BenefitsCard";

const Benefits = (props) => {
  const {
    className,
  } = props

  const benefitsItems = [
    {
      title: 'kitchen1',
      imgSrc1: './src/assets/images/benefits/kitchen1.jpg',
      imgSrc2: './src/assets/images/benefits/kitchen1_3d.jpg',
    },
    {
      title: 'kitchen2',
      imgSrc1: './src/assets/images/benefits/kitchen1.jpg',
      imgSrc2: './src/assets/images/benefits/kitchen1_3d.jpg',
    },
    {
      title: 'kitchen1',
      imgSrc1: './src/assets/images/benefits/kitchen1.jpg',
      imgSrc2: './src/assets/images/benefits/kitchen1_3d.jpg',
    },
    {
      title: 'kitchen2',
      imgSrc1: './src/assets/images/benefits/kitchen2.jpg',
      imgSrc2: './src/assets/images/benefits/kitchen2_3d.jpg',
    },

  ]

  return (
    <Section
      header
      className='benefits'
      title="20 лет опыта и доверия"
      titleId="benefits"
      description="Мы создаём кухни, которые служат десятилетиями: от точных замеров и 3D-проекта до профессиональной сборки.
      Свобода дизайна,3D-проект, честные цены и заботу на каждом этапе."
      TitleTag='h3'
      TitleTagStyle='h4'
      id='benefits'
    >
      <Grid
        className='benefits__grid'
        columns={1}
      >
        {benefitsItems.map((item, index) => (
          <BenefitsCard
            key={index}
            title={item.title}
            imgSrc1={item.imgSrc1}
            imgSrc2={item.imgSrc2}
            isTitleHidden
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Benefits