import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect, useState } from "react";
import Button from "./button";
import { addProductRender } from "../utils/store/productSlice";
import { useGetProductCategory } from "../hooks/useGetProductCategory";

function ProductListing() {
  // console.log('hi');
  useGetProductList();
  useGetProductCategory();
  const productList = useSelector((store) => store.products?.productList);
  const renderingData = useSelector((store) => store.products?.productRender);
  const searchResult = useSelector((store) => store.products?.searchResult);
  const productCategory = useSelector(
    (store) => store.products?.productCategory
  );
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  // const [productBrand, setProductBrand] = useState(null);
  const [min, setMin] = useState(""); // ?set as string until pricing validation
  const [max, setMax] = useState("");
  // const [priceError, setPriceError] = useState();
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
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate4 = () => {
    const topRatedProduct = productList.filter((p) => p.rating >= 4);
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate3_5 = () => {
    const topRatedProduct = productList.filter((p) => p.rating >= 3.5);
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate3 = () => {
    const topRatedProduct = productList.filter((p) => p.rating >= 3);
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
    const disProduct = renderingData.filter((p) => p.discountPercentage >= 10);
    dispatch(addProductRender(disProduct));
  };
  const handleDiscount5 = () => {
    const disProduct = productList.filter((p) => p.discountPercentage >= 5);
    dispatch(addProductRender(disProduct));
  };

  // const data = [{ price: 100 }, { price: 200 }, { price: 300 }];
  const handlePriceSearch = (min, max) => {
    // console.log(min);
    // console.log(max);
    // if (min > max) return setPriceError("min should be greater than");
    // if (min > max) {
    //   setPriceError(null);
    // }

    // console.log("fine");
    const priceFilteredData = renderingData.filter(
      (d) => d.price * 133 <= max && d.price * 133 >= min
    );
    dispatch(addProductRender(priceFilteredData));
    console.log(priceFilteredData);
  };
  const getCategory = (p) => {
    const fileteredData = productList.filter((pL) => pL.category === p);
    // console.log(fileteredData);
    dispatch(addProductRender(fileteredData));
  };

  if (!renderingData) {
    return (
      <>
        <p className="font-bold text-xl text-center text-black" >Loading..</p>
      </>
    );
  } else
    return (
      <div className="relative">
        {/* filter-mobile */}

        <div className={ + toggle?"w-full h-full fixed bg-white opacity-90  z-30 top-0 ":'hidden'}>
          <p className=" font-extrabold m-10  text-2xl w-fit cursor-pointer" onClick={() => setToggle(false)}>
            close
          </p>
        </div>

        <div className=" hidden md:flex gap-1 flex-wrap px-2 justify-center my-5">
          {productCategory &&
            productCategory.map((p, i) => (
              <p
                onClick={() => getCategory(p)}
                key={i}
                className="rounded-md bg-black text-white font-semibold px-2 py-1 cursor-pointer "
              >
                {p}
              </p>
            ))}
        </div>
        {/* <div>Sort by</div> */}
        {searchResult && (
          <div className="px-4 py-2 font-bold">
            Search Results for '{searchResult}'{" "}
          </div>
        )}
        <div className="sort_filter flex font-bold md:hidden">
          <div className="sort w-1/2 text-center border-r-2 py-1.5 my-2 cursor-pointer border-black" onClick={()=> setToggle(true)}>
            Sort
          </div>
          <div className="filter w-1/2 text-center py-1.5 my-2 cursor-pointer" onClick={()=> setToggle(true)}>
            Filter
          </div>
        </div>
        {renderingData.length === 0 ? (
          <p className="font-bold text-xl text-center text-black ">
            No Products Available
          </p>
        ) : (
          <div className=" flex gap-2  mb-16 px-4">
            {/* filters */}
            <div className="hidden md:inline-block  rounded-lg bg-slate-200 h-fit   border border-black px-2  py-3 ">
              <h1 className="font-bold text-xl">
                Filters | Items ({renderingData.length})
              </h1>
              <div className="rating">
                <h1 className="font-bold my-2">Customer rating</h1>
                <Button onClick={handleTopRate4_5} title={"4.5 & Up"} />
                <Button onClick={handleTopRate4} title={"4 & Up"} />
                <Button onClick={handleTopRate3_5} title={"3.5 & Up"} />
                <Button onClick={handleTopRate3} title={"3 & Up"} />
              </div>
              <div className="price my-2"></div>
              <h1 className="font-bold">Price</h1>
              <div className=" flex gap-2">
                <input
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  type="number"
                  placeholder="min"
                  className="w-24 border border-black   rounded-sm px-2 "
                />
                -
                <input
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  type="number"
                  placeholder="max"
                  className="w-24 border border-black   rounded-sm px-2 "
                />
              </div>
              {/* {priceError && <p>{priceError}</p>} */}

              <button
                onClick={() => handlePriceSearch(min, max)}
                className="border px-2 text-sm bg-gray-100 border-black rounded-sm hover:text-gray-200 hover:bg-black font-semibold"
              >
                search
              </button>
              <div className="discount my-2">
                <h1 className="my-2 font-bold">Discount</h1>
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
              <div className="flex  w-full flex-wrap place-content-evenly gap-2   ">
                {renderingData?.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default ProductListing;
