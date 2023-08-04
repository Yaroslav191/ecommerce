"use client";

import React from "react";
import { ProductPropts } from "../utils/types";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../lib/client";

const Product = ({
   product: { image, name, slug, price },
}: {
   product: ProductPropts;
}) => {
   return (
      <div>
         <Link href={`/product/${slug?.current}`}>
            <div className="product-card">
               {image && (
                  <Image
                     src={urlFor(image && image[0]).url() as any}
                     width={250}
                     height={250}
                     alt="product-image"
                     className="product-image"
                  />
               )}
               <p className="product-name">{name}</p>
               <p className="product-price">${price}</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;
