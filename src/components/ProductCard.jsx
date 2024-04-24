import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../utils/store/productSlice";
import { useNavigate } from "react-router-dom";
import { addToCart, removeCart } from "../utils/store/cartSlice";

function ProductCard({ p }) {
  const cartItems = useSelector((store) => store.cart?.addedCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  if (!p) return;
  const {
    thumbnail,
    title,
    description,
    price,
    rating,
    id,
    discountPercentage,
  } = p;

  const isInCart = (id) => {
    return cartItems.some((item) => item?.id === id);
  };
  return (
    <div className=" relative border-2 w-full flex flex-col justify-between border-black bg-slate-200 overflow-hidden rounded-xl ">
      <div
        onClick={() => {
          dispatch(addProductDetails(p));
          navigate("/productDetail");
        }}
        className="flex"
      >
        <div className="p-2  min-w-[25rem] max-w-[25rem] h-[15rem] ">
          {" "}
          <img
            className=" rounded-lg mx-auto w-full h-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>$ {price * 133}</p>
            <p>{rating}</p>
            <p>{discountPercentage}</p>
          </div>
        </div>
        {isInCart(id) ? (
          <button
            onClick={() => {
              dispatch(removeCart(id));
            }}
            className="bg-black text-white py-2 w-fit font-bold h-fit text-xl"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addToCart(p));
            }}
            className="bg-black absolute right-0 bottom-0 text-white py-2 w-fit h-fit font-bold text-xl"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
