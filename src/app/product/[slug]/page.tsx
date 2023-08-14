'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client, urlFor } from '../../../../lib/client';
import { getProduct, getProducts } from '../../../../utils/data';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ProductPropts } from '../../../../utils/types';
import { Product } from '../../../../components';

const page = ({ params }: { params: { slug: string } }) => {
  const [selectedImg, setSelectedImg] = useState(false);
  const [data, setData] = useState<any>(null);
  // const [selectedImg, setSelectedImg] = useState(false);

  const query = getProduct(params.slug);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setData(data);
    });

    const products = client.fetch(getProducts, {
      cache: 'no-store',
    });
  }, []);

  const showImage = () => {
    setSelectedImg(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <Image
            src={data?.image[0] && (urlFor(data?.image[0]).url() as any)}
            width={250}
            height={250}
            alt="product-image"
            className="product-image"
          />
          <div className="small-images-container">
            {data &&
              data.image.map((item: any) => {
                return (
                  <Image
                    src={urlFor(item).url() as any}
                    width={250}
                    height={250}
                    alt="product-image"
                    className={`small-image ${selectedImg ? 'selected-image' : ''}`}
                    onMouseEnter={showImage}
                    onMouseLeave={() => {
                      setSelectedImg(false);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{data.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{data.details}</p>
          <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <h3>Qunantity:</h3>
            <p className="price">${data.price}</p>
          </div>

          <div className="quantity-desc">
            <div className="minus" onClick="">
              <AiOutlineMinus />
            </div>
            <div className="num" onClick="">
              0
            </div>
            <div className="plus" onClick="">
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick="">
            Add to Card
          </button>
          <button type="button" className="buy-now" onClick="">
            Buy Now
          </button>
        </div>
      </div>
      <div className="maylike-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item: ProductPropts) => {
              return <Product product={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
