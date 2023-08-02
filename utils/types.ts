
export interface bannerProps  {
    _type: string;
    discount: string;
    saleTime: string;
    _createdAt: string;
    desc: string;
    image: { _type: string, asset: [Object] }; 
    largeText1: string;
    midText: string,
    smallText: string;
    _updatedAt: string;
    buttonText: string;
    product: string;
    _rev: string;
    largeText2: string;
    _id: string;
}

export interface ProductPropts {
    _createdAt: string;
    name: string;
    _updatedAt: string;
    slug: { current: string; _type: string };
    image: [{ _type: string; _key: string; asset: [Object] }];
    price: number;
    _rev: string;
    _type: string;
    details: string;
    _id: string;
 }