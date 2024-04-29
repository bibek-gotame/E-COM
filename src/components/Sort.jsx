import { useDispatch, useSelector } from "react-redux";
import { addProductRender } from "../utils/store/productSlice";

function Sort({classs}) {
    const dispatch = useDispatch();

    const renderingData = useSelector((store) => store.products?.productRender);

    const PriceLH = ()=>{
        const data = [...renderingData].sort((a, b) => a.price - b.price);   
        dispatch(addProductRender(data));
    }
    const PriceHL = ()=>{
        const data = [...renderingData].sort((a, b) => b.price - a.price);   
        dispatch(addProductRender(data));
    }
    const RatingLH = ()=>{
        const data = [...renderingData].sort((a, b) => a.rating - b.rating);   
        dispatch(addProductRender(data));
    }
    const RatingHL = ()=>{
        const data = [...renderingData].sort((a, b) => b.rating - a.rating);   
        dispatch(addProductRender(data));
    }
  return (
    <div className={classs}>
         <div className= { classs + " sort font-bold items-center  gap-[2rem]"}>
          <h1>SORT BY</h1>
          <div className="flex flex-wrap items-center gap-2 ">
          <button onClick={PriceLH} className="border-4  px-4 py-1 hover:bg-black hover:text-white rounded-md">
            Price Low to High
          </button>
          <button onClick={PriceHL} className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md">
            Price High to Low
          </button>
          <button onClick={RatingLH} className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md">
            Rating Low to High
          </button>
          <button onClick={RatingHL} className="border-4  px-4 py-1  hover:bg-black hover:text-white rounded-md">
            Rating High to Low
          </button>
          </div>

        </div>
    </div>
  )
}

export default Sort