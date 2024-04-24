import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect } from "react";
import Button from "./button";
import { addProductRender } from "../utils/store/productSlice";

function ProductListing() {
  useGetProductList();
  const productList = useSelector((store) => store.products?.productList);
  const renderingData = useSelector((store) => store.products?.productRender);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductRender(productList));
  }, [productList]);

  const rd = () => {
    const brand = renderingData?.map((p) => p.brand);
    // console.log(brand);
    const newBrand = new Set(brand)
    // console.log(newBrand);
  };

  useEffect(() => {
    // renderingData?.map((p) => console.log(p.brand));
    rd()
  }, [renderingData]);
  const handleTopRate = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 4.5);
    // setrenderingData(topRatedProduct);
    dispatch(addProductRender(topRatedProduct));
  };
  // renderingData?.map(p =>console.log(p.brand))

  const handleDiscount = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 10);
    // setrenderingData(disProduct);
  };
  if (!renderingData) {
    return (
      <>
        <p className="font-bold text-xl text-center text-black">Loading</p>
      </>
    );
  } else
    return (
      <div>
        <div className=" flex   mt-16 mb-16 px-10">
          {/* filters */}
          <div className="rounded-lg bg-slate-200 h-fit min-w-[15rem]  ">
            <h1 className="font-bold text-xl">Filters</h1>
            <Button onClick={handleTopRate} title={"Top Rated | 4.5+"} />
            <Button onClick={handleDiscount} title={"Discount | 10% +"} />
          </div>
          {/* Product Rendering */}
          <div>
            <div className="flex flex-wrap place-content-evenly gap-2   px-2 ">
              {renderingData.length === 0 && (
                <p className="font-bold text-xl text-center text-black">
                  No Products Available
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
