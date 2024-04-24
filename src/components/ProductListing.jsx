import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect, useState } from "react";
import Button from "./button";
import { addProductRender } from "../utils/store/productSlice";

function ProductListing() {
  useGetProductList();
  const productList = useSelector((store) => store.products?.productList);
  const renderingData = useSelector((store) => store.products?.productRender);
  const dispatch = useDispatch();
  // const [productBrand, setProductBrand] = useState(null);
  useEffect(() => {
    dispatch(addProductRender(productList));
    // console.log(productList);
  }, [productList]);
  // useEffect(() => {
  //   rd();
  // }, [renderingData]);
  // useEffect(() => {
  //   console.log(productBrand);
  //   productBrand &&
  //     Object.entries(productBrand).map((p) => {
  //       console.log("hi");
  //     });
  // }, [productBrand]);
  // const rd = () => {
  //   const brand = renderingData?.map((p) => p.brand);
  //   const newBrand = new Set(brand);
  //   setProductBrand(newBrand);
  // };
//! All are runnnig in rendering but should change dynamicaly
  const handleTopRate4_5 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 4.5);
    console.log('1');
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate4 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 4);
    console.log('2');
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate3_5 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 3.5);
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate3 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 3);
    dispatch(addProductRender(topRatedProduct));
  };
  const handleDiscount20 = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 20);
    dispatch(addProductRender(disProduct));
  };
  const handleDiscount15 = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 15);
    dispatch(addProductRender(disProduct));
  };
  const handleDiscount10 = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 10);
    dispatch(addProductRender(disProduct));
  };
  const handleDiscount5 = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 5);
    dispatch(addProductRender(disProduct));
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
        {/* <p>{}</p> */}
        <div>Category</div>
        <div>Sort by</div>
        <div className=" flex gap-2  mb-16 px-4">
          {/* filters */}
          <div className="rounded-lg bg-slate-200 h-fit min-w-[15rem]  ">
            <h1 className="font-bold text-xl">Filters</h1>
            <div className="rating">
              <h1 className="font-bold">Customer rating</h1>
              <Button onClick={handleTopRate4_5} title={"4.5 & Up"} />
              <Button onClick={handleTopRate4} title={"4 & Up"} />
              <Button onClick={handleTopRate3_5} title={"3.5 & Up"} />
              <Button onClick={handleTopRate3} title={"3 & Up"} />
            </div>
            {/* <div className="price"></div> */}
            <div className="discount">
              <h1>Discount</h1>
              <Button onClick={handleDiscount20} title={"20% & more"} />
              <Button onClick={handleDiscount15} title={"15% & more"} />
              <Button onClick={handleDiscount10} title={"10% & more"} />
              <Button onClick={handleDiscount5} title={"5% & more"} />
            </div>
            <div className="brand">
              {/* {productBrand && Object.entries(productBrand)?.map((p,i) => <div key={i}>hi</div>)} */}
            </div>
          </div>
          {/* Product Rendering */}
          <div>
            <div className="flex flex-wrap place-content-evenly gap-2   ">
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
