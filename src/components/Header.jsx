import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductRender, addsearchResult } from "../utils/store/productSlice";
import { useRef } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Carts = useSelector((store) => store.cart?.addedCart);
  const productList = useSelector((store) => store.products?.productList);
  const inputName = useRef(null);
  const searchResult = useSelector((store) => store.products?.searchResult)


console.log(searchResult);
  const getSearch = () => {
    const input = inputName.current.value.toLowerCase();
    
    const searchProduct = productList?.filter((p) => {
      const productWords = p.title + " " + p.brand + " " + p.category;
      return productWords.includes(input);
      // return new RegExp( input, "i").test(productWords);
    });
    dispatch(addProductRender(searchProduct));
    dispatch(addsearchResult(input))
    inputName.current.value = "";
  };

  return (
    <div className="h-16  mt-0 bg-black w-full  flex justify-between text-white px-6 items-center font-bold ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer md:text-2xl"
      >
        E-COM
      </div>

      <div className="flex gap-3 w-fit mx-auto  ">
        <input
          ref={inputName}
          className="w-96 border-2 text-black  px-4 py-2"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={getSearch}
          className="px-4 py-2 bg-green-600 rounded-sm text-white hover:text-green-600 hover:bg-white 
           font-bold text-lg"
        >
          Search
        </button>
      </div>

      <div className="flex md:text-2xl">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ({Carts?.length})
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Header;
