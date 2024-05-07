import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductRender, addsearchResult } from "../utils/store/productSlice";
import {  useState } from "react";
import {  CART_ICON_URL, SEARCH_ICON_URL, USER_ICON_URL } from "../utils/constant";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Carts = useSelector((store) => store.cart?.addedCart);
  const productList = useSelector((store) => store.products?.productList);
  const [inputName, setInputName] = useState('');

  const getSearch = () => {
    const input = inputName.toLowerCase();
    const searchProduct = productList?.filter((p) => {
      const productWords = p.title + " " + p.brand + " " + p.category;
      return new RegExp(input, "i").test(productWords);
    });
    dispatch(addProductRender(searchProduct));
    dispatch(addsearchResult(input));
    setInputName("");
  };

  return (
    <>
      <div className="h-16  mt-0  w-full  flex justify-between text-black shadow-md px-6 items-center font-bold ">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer md:text-2xl"
        >
          E-COM
        </div>

        <div className="hidden  md:flex w-fit mx-auto  ">
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-96 border border-black  text-black  px-6 py-2 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={getSearch}
            className="px-4 py-2 rounded-sm border border-black
           font-bold text-lg rounded-r-full bg-gray-100"
          >
            Search
          </button>
        </div>

        <div className="flex md:text-2xl gap-2 items-center">
          <div
            className="cursor-pointer flex items-center text-red-600 relative"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img
              src={CART_ICON_URL}
              alt="cart"
              className="w-[5rem] "
            />{" "}
            <p className="absolute top-0 md:top-[-0.4rem] right-[35%]">
              {Carts?.length !== 0 && Carts?.length}
            </p>
          </div>

          <img
            src={USER_ICON_URL}
            alt="user"
            className="w-8 h-8"
          />
        </div>
      </div>

    
      <div className="flex md:hidden mt-3 px-4  ">
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className=" w-[85%] border border-black  text-black  px-6 py-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={getSearch}
          className="min-w-[3rem]  rounded-sm border border-black
          font-bold text-lg rounded-r-full "
        >
          <img src={SEARCH_ICON_URL} alt="search" className="h-[1.5rem] object-cover"/>
        </button>
      </div>
    </>
  );
}

export default Header;
