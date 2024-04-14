import { useDispatch } from "react-redux";
import { addProductDetails } from "../utils/store/productSlice";
import { useNavigate } from "react-router-dom";
import { addToCart, removeCart } from "../utils/store/cartSlice";
import { useState } from "react";
function ProductCard({ p }) {
  // const { description, price, images, title, thumbnail, rating } = p;
  const [toggleCartFlag, setToggleCartFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" border-2 w-80 flex flex-col justify-between border-black bg-slate-200 overflow-hidden rounded-xl ">
      <div
        onClick={() => {
          dispatch(addProductDetails(p));
          navigate("/productDetail");
        }}
      >
        <div className="p-2 h-[17rem]  ">
          {" "}
          <img
            className=" rounded-lg mx-auto h-full object-cover"
            src={p?.thumbnail}
            alt={p?.title}
          />
        </div>
        <div>
          <h1>{p?.title}</h1>
          <p>{p?.description}</p>
          <p>$ {p?.price}</p>
          <p>{p?.rating}</p>
        </div>
      </div>
      {!toggleCartFlag ? (
        <button
          onClick={() => {
            dispatch(addToCart(p));
            setToggleCartFlag(!toggleCartFlag);
          }}
          className="bg-black text-white py-2 w-full font-bold text-xl"
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(removeCart(p.id));
            setToggleCartFlag(!toggleCartFlag);
          }}
          className="bg-black text-white py-2 w-full font-bold text-xl"
        >
          Remove from cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
