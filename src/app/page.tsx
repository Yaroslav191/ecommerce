import { client, urlFor } from "../../lib/client";
import { getProducts, getBaners } from "../../utils/data";
import { FooterBanner, HeroBanner, Product } from "../../components";
import { ProductPropts } from "../../utils/types";

const Home = async () => {
   const products = await client.fetch(getProducts, {
      cache: "no-store",
   });

   console.log(products);

   const banners = await client.fetch(getBaners);

   return (
      <div>
         <HeroBanner heroBunner={banners.length && banners[0]} />

         <div className="products-heading">
            <h2>Best Seller Products</h2>
            <p>speaker There are many variations passages</p>
         </div>

         <div className="products-container">
            {products.map((item: ProductPropts) => {
               return <Product product={item} />;
            })}
         </div>

         <FooterBanner footerBanner={banners && banners[0]} />
      </div>
   );
};

export default Home;
