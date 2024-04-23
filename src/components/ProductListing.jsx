import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect, useRef, useState } from "react";
import Button from "./button";

function ProductListing() {
  useGetProductList();
  const productList = useSelector((store) => store.products?.productList);
  
  const [error, seterror] = useState("Loading..");
  const [renderingData, setrenderingData] = useState(null);

  const inputName = useRef(null);

  const getSearch = () => {
    const productName = productList?.filter(
      (p) =>
        p.title.toLowerCase().includes(inputName.current.value.toLowerCase()) ||
        p.brand.toLowerCase().includes(inputName.current.value.toLowerCase()) ||
        p.category.toLowerCase().includes(inputName.current.value.toLowerCase())
    );
    setrenderingData(productName);
    console.log(inputName.current.value);
  
    seterror("No product available");
  };
// console.log(productList);
  useEffect(() => {
    setrenderingData(productList);
  }, [productList]);

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
      <div >
        {/* search bar */}
       <div className="flex gap-3 w-fit mx-auto  bg-black px-4 py-2 border-2 ">
          <input
            ref={inputName}
            className="w-96 border-2 text-black  px-4 py-2"
            type="text"
            placeholder="Enter the Product Name"
          />
          <button
            onClick={getSearch}
            className="px-4 py-2 bg-green-600 rounded-sm text-white hover:text-green-600 hover:bg-white 
           font-bold text-lg"
          >
            Search
          </button>
        </div>
        {/* <h1 className="text-xl font-bold pl-10 mt-10 border-b-2 border-t-2 border-slate-500">
            Products
          </h1> */}
        <div className=" flex   mt-16 mb-16 px-10">
      {/* filters */}
        <div className="border-r-4  min-w-[15rem]  border-black">
          <h1 className="font-bold text-xl">Filters</h1>
          <Button onClick={handleTopRate} title={'Top Rated | 4.5+'} />
          <Button onClick={handleDiscount} title={'Discount | 10% +'} />

        </div>
        <div>
        
      </div>
      <div>
         
          <div className="flex flex-wrap place-content-evenly gap-2   px-2 pt-5 ">
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
        
      </div>
    );
}

export default ProductListing;
