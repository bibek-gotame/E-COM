import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from " react";
function Header() {
  const navigate = useNavigate();
  const Carts = useSelector((store) => store.cart?.addedCart);
  const inputName = useRef(null);

const getSearch = () => {
  const productName = productList?.filter(
    (p) =>
      p.title.toLowerCase().includes(inputName.current.value.toLowerCase()) ||
      p.brand.toLowerCase().includes(inputName.current.value.toLowerCase()) ||
      p.category.toLowerCase().includes(inputName.current.value.toLowerCase())
  );
  // setrenderingData(productName);
  console.log(inputName.current.value);

  // seterror("No product available");
};
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
      <div>
        <div className="flex gap-3 w-fit   bg-black px-4 py-2 border-2 ">
          <input
            ref={inputName}
            className="w-96 border-2 px-4 py-2"
            type="text"
            placeholder="Enter the Product Name"
          />
          <button
            onClick={getSearch}
            className="px-4 py-2 bg-green-600 rounded-sm text-white hover:text-green-600 hover:bg-white 
           font-bold text-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex">
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
