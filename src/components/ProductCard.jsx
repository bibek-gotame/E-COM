import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../utils/store/productSlice";
import { useNavigate } from "react-router-dom";
import { addToCart, removeCart } from "../utils/store/cartSlice";

function ProductCard({ p }) {
  const cartItems = useSelector((store) => store.cart?.addedCart);
  const {thumbnail,title,description,price,rating,id,discountPercentage} = p
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = (id)=>{
      return cartItems.some((item) => item?.id === id);
  }
  
  return (
    <div className=" border-2 w-64 flex flex-col justify-between border-black bg-slate-200 overflow-hidden rounded-xl ">
      <div
        onClick={() => {
          dispatch(addProductDetails(p));
          navigate("/productDetail");
        }}
      >
        <div className="p-2 h-[15rem]  ">
          {" "}
          <img
            className=" rounded-lg mx-auto h-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>$ {price}</p>
          <p>{rating}</p>
          <p>{discountPercentage}</p>

        </div>
      </div>
      {isInCart(id) ? (
        <button
          onClick={() => {
            dispatch(removeCart(id));
          }}
          className="bg-black text-white py-2 w-full font-bold text-xl"
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addToCart(p));
          }}
          className="bg-black text-white py-2 w-full font-bold text-xl"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
