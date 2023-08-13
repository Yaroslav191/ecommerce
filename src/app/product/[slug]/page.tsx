import Image from 'next/image';
import { client, urlFor } from '../../../../lib/client';
import { getProduct } from '../../../../utils/data';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const page = async ({ params }: { params: { slug: string } }) => {
  const query = getProduct(params.slug);

  const data = await client.fetch(query).then((data) => {
    return data;
  });

  console.log(data);

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <Image
            src={urlFor(data.image[0]).url() as any}
            width={250}
            height={250}
            alt="product-image"
            className="product-image"
          />
        </div>
        <div className="product-details-desc">
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
        </div>
      </div>
    </div>
  );
};

export default page;
