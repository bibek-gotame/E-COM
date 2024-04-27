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

      <div className="hidden md:flex w-fit mx-auto  ">
        <input
          ref={inputName}
          className="w-96 border-2 text-black  px-4 py-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={getSearch}
          className="px-4 py-2rounded-sm border
           font-bold text-lg rounded-r-full bg-gray-100"
        >
          Search
        </button>
      </div>

      <div className="flex md:text-2xl gap-2 items-center">
        <p
          className="cursor-pointer flex items-center text-red-600 relative"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img src="https://superawesomevectors.com/wp-content/uploads/2016/01/simple-black-shopping-cart-icon-800x566.jpg" alt="cart" className="w-[5rem] "/> <p className="absolute top-[-0.4rem] right-[35%]">{Carts?.length !== 0 && Carts?.length}</p>
        </p>

        <img src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="user" className="w-8 h-8" />
      </div>
    </div>
    <div className="flex md:hidden mt-2 px-4  ">
        <input
          ref={inputName}
          className=" w-[85%] border-2 text-black  px-4 py-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={getSearch}
          className="w-[15%] px-4 py-2rounded-sm border
           font-bold text-lg rounded-r-full bg-gray-100"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Header;
