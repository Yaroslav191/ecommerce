import React from "react";
import { bannerProps } from "../utils/types";

import { urlFor } from "../lib/client";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = ({ footerBanner }: { footerBanner: bannerProps }) => {
   return (
      <div className="footer-banner-container">
         <div className="banner-desc">
            <div className="left">
               <p>{footerBanner.discount}</p>
               <h3>{footerBanner.largeText1}</h3>
               <h3>{footerBanner.largeText2}</h3>
               <p>{footerBanner.saleTime}</p>
            </div>
            <div className="right">
               <p>{footerBanner.smallText}</p>
               <h3>{footerBanner.midText}</h3>
               <p>{footerBanner.desc}</p>
               <Link href={`/product/${footerBanner.product}`}>
                  <button type="button">{footerBanner.buttonText}</button>
               </Link>
            </div>
            <Image
               src={urlFor(footerBanner.image).url()}
               width={500}
               height={500}
               alt="headphone"
               className="footer-banner-image"
            />
         </div>
      </div>
   );
};

export default FooterBanner;
