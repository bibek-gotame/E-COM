import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useGetProductList } from "../hooks/useGetProductList";
import { useEffect, useState } from "react";
import { addProductRender } from "../utils/store/productSlice";
import { useGetProductCategory } from "../hooks/useGetProductCategory";
import ProductCategory from "./ProductCategory";
import Filter from "./Filter";
import Sort from "./Sort";

function ProductListing() {
  useGetProductList();
  useGetProductCategory();
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.products?.productList);
  const renderingData = useSelector((store) => store.products?.productRender);
  const searchResult = useSelector((store) => store.products?.searchResult);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(addProductRender(productList));
  }, [productList]);

  if (!renderingData) {
    return (
      <>
        <p className="font-bold text-xl text-center text-black">Loading..</p>
      </>
    );
  } else
    return (
      <div className="relative">
        {/* filter-sort-mobile */}
        <div
          className={
            +toggle
              ? "w-full h-full absolute  md:hidden bg-white opacity-[0.99]  z-30 top-[-7.35rem]  "
              : "hidden"
          }
        >
          <p
            className=" font-extrabold  bg-black text-white text-2xl px-2  cursor-pointer"
            onClick={() => setToggle(false)}
          >
            close
          </p>
          <Filter containerClassName={"bg-white"} />
          <Sort containerClassName={"my-2 mx-2"} />
        </div>
        <ProductCategory />

        <Sort containerClassName={"hidden md:flex my-2 mx-4"} />
        {searchResult && (
          <div className="px-4 py-2 font-bold">
            Search Results for '{searchResult}'{" "}
          </div>
        )}
        <div className="sort_filter   flex font-bold md:hidden">
          <div
            className="sort w-1/2 text-center border-r-2 py-1.5 my-2 cursor-pointer border-black"
            onClick={() => setToggle(true)}
          >
            Sort
          </div>
          <div
            className="filter w-1/2 text-center py-1.5 my-2 cursor-pointer"
            onClick={() => setToggle(true)}
          >
            Filter
          </div>
        </div>
        <div className="flex mx-2">
          <Filter containerClassName={"hidden md:inline-block  "} />

          {renderingData.length === 0 ? (
            <p className="font-bold text-xl text-center text-black ">
              No Products Available
            </p>
          ) : (
            <div className=" flex gap-2  mb-16 px-4">
              {/* Product Rendering */}
              <div>
                <div className="flex  w-full flex-wrap place-content-evenly gap-2   ">
                  {renderingData?.map((product) => (
                    <ProductCard key={product.id} p={product} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default ProductListing;
