import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const Carts = useSelector((store) => store.cart?.addedCart);

  return (
    <div className="h-16  mt-0 bg-black w-full  flex justify-between text-white px-6 items-center font-bold text-2xl">
      <div
        onClick={() => {
          navigate("/productList");
        }}
        className="cursor-pointer"
      >
        E-COM
      </div>
      <div className="flex">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart 
          ({Carts?.length})

        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Header;
