import ProductInfo from "@/components/ProductInfo";

export const metadata = {
  title: 'product-info'
}


const product =
  {
    title: 'Товар',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis cumque delectus deleniti dolores\n' +
      '      doloribus eos facere, fuga fugiat harum id nisi nobis nostrum officiis porro praesentium, quasi quia quos\n' +
      '      reiciendis sed tempore totam ut veniam veritatis vero voluptate voluptates voluptatum! Animi doloribus eos fugiat\n' +
      '      laudantium obcaecati provident quibusdam repellendus sit! Ad cumque fugiat ipsum magnam mollitia nobis non odit\n' +
      '      qui quidem vitae. Culpa deserunt laborum magnam necessitatibus nisi non obcaecati quidem rem, sequi totam.\n' +
      '      Accusamus cumque dolore, eveniet fugiat fugit harum hic impedit itaque iusto nam numquam obcaecati officiis\n' +
      '      perferendis, placeat quidem repellat repellendus sapiente suscipit tenetur totam ullam vel veritatis voluptatem.\n' +
      '      Excepturi, obcaecati, optio? Alias, aspernatur dicta distinctio eum in laboriosam magni molestias mollitia neque\n' +
      '      nulla officia provident totam voluptatem! Ad aspernatur commodi distinctio dolor dolore exercitationem fugiat in',
    images: [
      './src/assets/images/Kitchens/kitchen1.jpg',
      './src/assets/images/Kitchens/kitchen2.jpg',
      './src/assets/images/Kitchens/kitchen3.jpg',
      './src/assets/images/Kitchens/kitchen3.jpg',
      './src/assets/images/Kitchens/kitchen3.jpg',
      './src/assets/images/Kitchens/kitchen3.jpg',
    ]
  }


const titleId = 'product-info-title'

export default function () {
  return (
    <section
      className="product-info"
      aria-labelledby={titleId}

    >
      <h1 className="visually-hidden" id={titleId}>Product Info</h1>
      <ProductInfo
        product={product}
      />


    </section>
  )
}

