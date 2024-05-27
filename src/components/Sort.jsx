import { useDispatch, useSelector } from "react-redux";
import { addProductRender } from "../utils/store/productSlice";

function Sort({ containerClassName }) {
  const dispatch = useDispatch();

  const renderingData = useSelector((store) => store.products?.productRender);
  const sortByCriteria = (criteria, sort) => {
    let sortData;
    if (criteria === "price") {
      sortData = [...renderingData].sort((a, b) =>
        sort === "asc" ? a.price - b.price : b.price - a.price
      );
    }
    if (criteria === "rating") {
      sortData = [...renderingData].sort((a, b) =>
        sort === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }
    dispatch(addProductRender(sortData));
  };

  return (
    <div className={containerClassName}>
      <div
        className={
          containerClassName + " sort font-bold items-center  gap-[2rem]"
        }
      >
        <h1>SORT BY</h1>
        <div className="flex flex-wrap items-center gap-2 ">
          <button
            onClick={() => sortByCriteria("price", "asc")}
            className="border-4  px-4 py-1 hover:bg-black hover:text-white rounded-md"
          >
            Price Low to High
          </button>
          <button
            onClick={() => sortByCriteria("price", "desc")}
            className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md"
          >
            Price High to Low
          </button>
          <button
            onClick={() => sortByCriteria("rating", "asc")}
            className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md"
          >
            Rating Low to High
          </button>
          <button
            onClick={() => sortByCriteria("rating", "desc")}
            className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md"
          >
            Rating High to Low
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
