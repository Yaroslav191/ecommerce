import Link from "next/link";
import { bannerProps } from "../utils/types";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBunner }: { heroBunner: bannerProps }) => {
   return (
      <div className="hero-banner-container">
         <div>
            <p className="beats-solo">{heroBunner.smallText}</p>
            <h3>{heroBunner.midText}</h3>
            <h1>{heroBunner.largeText1}</h1>
            <img
               src={urlFor(heroBunner.image).url()}
               alt="headphones"
               className="hero-banner-image"
            />
            <div>
               <Link href={`/product/${heroBunner.product}`}>
                  <button type="button">{heroBunner.buttonText}</button>
               </Link>
               <div className="desc">
                  <h5>Description</h5>
                  <p>{heroBunner.desc}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroBanner;
