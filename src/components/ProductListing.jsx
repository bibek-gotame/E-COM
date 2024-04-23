import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect, useState } from "react";
import Button from "./button";

function ProductListing() {
  useGetProductList();
  const productList = useSelector((store) => store.products?.productList);
  
  const [error, seterror] = useState("Loading..");
  const [renderingData, setrenderingData] = useState(productList);

  
// console.log(productList);
  // useEffect(() => {
  //   setrenderingData(productList);
  // }, [productList]);

  const handleTopRate = ()=>{
    const topRatedProduct = productList.filter(p=> p.rating >= 4.5)
    setrenderingData(topRatedProduct)
  }

  const handleDiscount = ()=>{
    const disProduct = productList.filter(p=> p.discountPercentage >= 10 )
    setrenderingData(disProduct)
    console.log(disProduct);

  }
  if (!renderingData) {
    return (
      <>
        <p className="font-bold text-xl text-center text-black">{error}</p>
      </>
    );
  } else
    return (
      <div>
        <div className="flex justify-between items-center mt-16 mb-16 px-10">

        <div className="flex gap-2 items-center  h-fit">
          <h1 className="font-bold text-xl">Filters</h1>
          <Button onClick={handleTopRate} title={'Top Rated | 4.5+'} />
          <Button onClick={handleDiscount} title={'Discount | 10% +'} />

        </div>
        </div> 
        <div>
          <h1 className="text-xl font-bold pl-10  border-b-2 border-t-2 border-slate-500">
            Products
          </h1>
          <div className="flex flex-wrap place-content-evenly gap-4   px-2 pt-5 ">
            {renderingData && renderingData.length === 0 && (
              <p className="font-bold text-xl text-center text-black">
                {error}
              </p>
            )}

            {renderingData?.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default ProductListing;
