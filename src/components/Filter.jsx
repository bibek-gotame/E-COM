import { useDispatch, useSelector } from "react-redux";
import { addProductRender } from "../utils/store/productSlice";
import Button from "./button";
import { useState } from "react";

function Filter({ classs }) {
  const renderingData = useSelector((store) => store.products?.productRender);
  const dispatch = useDispatch();
  const [min, setMin] = useState(""); // ?set as string until pricing validation
  const [max, setMax] = useState("");
 

  const handleTopRate4_5 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 4.5);
    dispatch(addProductRender(topRatedProduct));
  };
  const handleTopRate4 = () => {
    const topRatedProduct = renderingData.filter((p) => p.rating >= 4);
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

  const handleDiscount = (dis) => {
    if (dis === "20") {
      const disProduct = renderingData.filter((p) => p.discountPercentage >= 20);
      dispatch(addProductRender(disProduct));
    } else if (dis === "15") {
      const disProduct = renderingData.filter((p) => p.discountPercentage >= 15);
      dispatch(addProductRender(disProduct));
    } else if (dis === "10") {
      const disProduct = renderingData.filter((p) => p.discountPercentage >= 10);
      dispatch(addProductRender(disProduct));
    } else if (dis === "5") {
      const disProduct = renderingData.filter((p) => p.discountPercentage >= 5);
      dispatch(addProductRender(disProduct));
    }
  };

  const handlePriceFilter = (min, max) => {
    const priceFilteredData = renderingData.filter(
      (d) => d.price <= max && d.price >= min
    );
    dispatch(addProductRender(priceFilteredData));
  };
  return (
    <div>
      {" "}
      <div
        className={
          classs + "  rounded-lg bg-black bg-opacity-10  h-fit    px-2  py-3 "
        }
      >
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
        <div className="price my-2">
          <h1 className="font-bold">Price</h1>
          <div className=" flex flex-wrap gap-2">
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
              />{" "}
            </div>

            <button
              onClick={() => handlePriceFilter(min, max)}
              className="border px-2 text-sm bg-gray-100 border-black rounded-sm hover:text-gray-200 hover:bg-black font-semibold"
            >
              search
            </button>
          </div>
        </div>

        <div className="discount my-2">
          <h1 className="my-2 font-bold">Discount</h1>
          <Button onClick={()=>{handleDiscount('20')}} title={"20% & more"} />
          <Button onClick={()=>{handleDiscount('15')}} title={"15% & more"} />
          <Button onClick={()=>{handleDiscount('10')}} title={"10% & more"} />
          <Button onClick={()=>{handleDiscount('5')}} title={"5% & more"} />
        </div>
      
      </div>
    </div>
  );
}

export default Filter;
