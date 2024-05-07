import { useDispatch, useSelector } from "react-redux";
import { addProductRender } from "../utils/store/productSlice";
import Button from "./button";
import { useState } from "react";

function Filter({ containerClassName }) {
  const productList = useSelector((store) => store.products?.productList);
  const renderingData = useSelector((store) => store.products?.productRender);

  const dispatch = useDispatch();
  const [minMax, setMinMax] = useState({
    min: "",
    max: "",
  }); // ?set as string until pricing validation

  const Ratings = [4.5, 4, 3.5, 3];

  const handleTopRate = (rating) => {
    Ratings.map((rate) => {
      if (rating === rate) {
        const topRatedProduct = productList.filter(
          (product) => product.rating >= rating
        );
        dispatch(addProductRender(topRatedProduct));
      }
    });
  };
  const discounts = [20, 15, 10, 5];
  const handleDiscount = (dis) => {
    discounts.map((discount) => {
      if (dis === discount) {
        const disProduct = productList.filter(
          (p) => p.discountPercentage >= discount
        );
        dispatch(addProductRender(disProduct));
      }
    });
  };

  const handlePriceFilter = () => {
    const priceFilteredData = productList.filter(
      (d) => d.price <= minMax.max && d.price >= minMax.min
    );
    dispatch(addProductRender(priceFilteredData));
  };
  return (
    <div>
      {" "}
      <div
        className={
          containerClassName +
          "  rounded-lg bg-black bg-opacity-10  h-fit    px-2  py-3 "
        }
      >
        <h1 className="font-bold text-xl">
          Filters | Items ({renderingData.length})
        </h1>

        <div className="rating">
          <h1 className="font-bold my-2">Customer rating</h1>
          <Button
            onClick={() => {
              handleTopRate(4.5);
            }}
            title={"4.5 & Up"}
          />
          <Button
            onClick={() => {
              handleTopRate(4);
            }}
            title={"4 & Up"}
          />
          <Button
            onClick={() => {
              handleTopRate(3.5);
            }}
            title={"3.5 & Up"}
          />
          <Button
            onClick={() => {
              handleTopRate(4);
            }}
            title={"3 & Up"}
          />
        </div>
        <div className="price my-2">
          <h1 className="font-bold">Price</h1>
          <div className=" flex flex-wrap gap-2">
            <div className=" flex gap-2">
              <input
                value={minMax.min}
                onChange={(e) =>
                  setMinMax({
                    ...minMax,
                    min: e.target.value,
                  })
                }
                type="number"
                placeholder="min"
                className="w-24 border border-black   rounded-sm px-2 "
              />
              -
              <input
                value={minMax.max}
                onChange={(e) =>
                  setMinMax({
                    ...minMax,
                    max: e.target.value,
                  })
                }
                type="number"
                placeholder="max"
                className="w-24 border border-black   rounded-sm px-2 "
              />{" "}
            </div>

            <button
              onClick={() => handlePriceFilter()}
              className="border px-2 text-sm bg-gray-100 border-black rounded-sm hover:text-gray-200 hover:bg-black font-semibold"
            >
              search
            </button>
          </div>
        </div>

        <div className="discount my-2">
          <h1 className="my-2 font-bold">Discount</h1>
          <Button
            onClick={() => {
              handleDiscount(20);
            }}
            title={"20% & more"}
          />
          <Button
            onClick={() => {
              handleDiscount(15);
            }}
            title={"15% & more"}
          />
          <Button
            onClick={() => {
              handleDiscount(10);
            }}
            title={"10% & more"}
          />
          <Button
            onClick={() => {
              handleDiscount(5);
            }}
            title={"5% & more"}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
