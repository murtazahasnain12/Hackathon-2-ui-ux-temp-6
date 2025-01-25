import { getProductById } from "@/app/Data/Productdata";

import Description from "@/app/Singleproduct/Description";
import Mainproduct from "@/app/Singleproduct/Mainproduct";




interface PageParams {
  params: Promise<{
    id: string;
    
  }>;
}

const ProductDetailsPage = async ({ params }: PageParams) => {
  // Directly destructure params without using await
  const { id } = await params;

  // Fetch product data by id (await the async function)
  const product = await getProductById(id);

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;}
  
    return (
      <div>
        <Mainproduct
         title={product.title}
         imageSrc={product.imageSrc}
         price={product.price}
         description={product.description}
         
         
        />
        <div>
            <Description/>
          
        </div>
      </div>
    );
  }

  export default ProductDetailsPage;
  