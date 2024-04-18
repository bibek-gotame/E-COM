import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Cart() {
  const Carts = useSelector((store) => store.cart?.addedCart);
  if(Carts.length === 0 ){
    return (
      <div className="text-center font-bold text-3xl  text-black mt-10">
        No items are available in your cart
      </div>
    );
  } else
  return (
    <div>
      <div className="flex flex-wrap place-content-start gap-4  px-2 pt-5 ">
        {Carts.map((cart) => <ProductCard key={cart.id} p={cart} />)}
      </div>
    </div>
  );
}

export default Cart;
