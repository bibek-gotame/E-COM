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
    <div className=" relative  w-full flex flex-col justify-between bg-black bg-opacity-10 overflow-hidden rounded-xl  ">
      <div
        onClick={() => {
          dispatch(addProductDetails(p));
          navigate("/productDetail");
        }}
        className="flex"
      >
        <div className="p-2 min-w-[12rem] max-w-[12rem] h-[8rem] md:min-w-[15rem]  md:max-w-[15rem] md:h-[10rem]  lg:min-w-[25rem] lg:max-w-[25rem] md lg:h-[15rem]  mb-[3rem]">
          {" "}
          <img
            className=" rounded-lg mx-auto w-full h-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </div>

        <div className=" py-2 ">
          <h1>{title}</h1>
          <p className="hidden sm:inline-block ">{description}</p>
          <p>$ {price}</p>
          <p>Rating{rating}</p>
          <p>{discountPercentage}</p>
        </div>
      </div>
<div className=" space-x-6 bottom-1 left-2 px-3 ">
{isInCart(id) ? (
        <button
          onClick={() => {
            dispatch(removeCart(id));
          }}
          className="bg-black  rounded-lg  text-white py-2 w-fit font-bold h-fit text-xl"
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addToCart(p));
          }}
          className="bg-black  rounded-lg  text-white px-4 py-2 w-fit h-fit font-bold text-xl"
        >
          Add to Cart
        </button>
      )}
      <button className=" bg-green-400 px-6 py-2 font-bold rounded-lg text-xl">Buy</button>
</div>
      
    </div>
  );
}

export default ProductCard;
