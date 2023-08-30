'use client';
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { client, urlFor } from '../../../../lib/client';
import { getProduct, getProducts } from '../../../../utils/data';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ProductPropts } from '../../../../utils/types';
import { Product } from '../../../../components';
import { useStateContext } from '../../../../components/context/StateContext';

type selectedImgType = {
  _key: any;
  _type: String;
  asset: Object;
};

const page = ({ params }: { params: { slug: string } }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [data, setData] = useState({} as ProductPropts);
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(null as Number | null);

  const { decQty, incQty, qty, onAdd } = useStateContext();

  const query = getProduct(params.slug);

  useEffect(() => {
    client.fetch(query).then((fetchedData) => {
      setData(fetchedData);
      console.log(fetchedData);
    });

    client.fetch(getProducts).then((fetchedData) => {
      setProducts(fetchedData);
      console.log(products);
    });
  }, []);

  const showImage = (i: any) => {
    setIndex(i);
    setSelectedImg(i);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          {data && data.image ? ( // Check if data and data.image are available before rendering
            <Image
              src={urlFor(data.image[selectedImg]).url() as any}
              width={250}
              height={250}
              alt="product-image"
              className="product-detail-image"
            />
          ) : (
            <p>Loading...</p>
          )}
          <div className="small-images-container">
            {data && data.image ? (
              data.image.map((item: selectedImgType, i) => {
                return (
                  <Image
                    src={urlFor(item).url()}
                    width={250}
                    height={250}
                    key={item._key}
                    alt="product-image"
                    className={`small-image ${index === i ? 'selected-image' : ''}`}
                    onMouseEnter={() => showImage(i)}
                    onMouseLeave={() => {
                      setIndex(null);
                    }}
                  />
                );
              })
            ) : (
              <p>Loading...</p>
            )}
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
            <div
              className="minus"
              onClick={() => {
                decQty();
              }}>
              <AiOutlineMinus />
            </div>
            <div className="num">{qty}</div>
            <div
              className="plus"
              onClick={() => {
                incQty();
              }}>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(data, qty)}>
            Add to Card
          </button>
          <button type="button" className="buy-now" onClick={() => {}}>
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
