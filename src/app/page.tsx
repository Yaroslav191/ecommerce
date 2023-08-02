import { client } from "../../lib/client";
import { getProducts, getBaners } from "../../utils/data";
import { HeroBanner, Product } from "../../components";

const Home = async () => {
   const products = await client.fetch(getProducts);

   const banners = await client.fetch(getBaners);

   console.log(banners);

   return (
      <div>
         <HeroBanner heroBunner={banners.length && banners[0]} />

         <div className="products-heading">
            <h2>Best Seller Products</h2>
            <p>speaker There are many variations passages</p>
         </div>

         <div className="products-container">
            {products.map((item: any) => {
               return <Product product={item} />;
            })}
         </div>
      </div>
   );
};

export default Home;
