import { client } from "../../../../lib/client";
import { getProduct } from "../../../../utils/data";

const page = async ({ params }: { params: { slug: string } }) => {
   const query = getProduct(params.slug);

   client.fetch(query).then((data) => {
      console.log(data);
   });

   return <div>TEST</div>;
};

export default page;
