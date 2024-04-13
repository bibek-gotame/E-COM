import { useDispatch } from "react-redux";
import { addProductDetails } from "../utils/store/productSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ p }) {
  // const { description, price, images, title, thumbnail, rating } = p;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleProductDetail = (p) => {
    dispatch(addProductDetails(p));
    navigate('/productDetail')
  };
  return (
    <div
      onClick={() => {
        handleProductDetail(p);
      }}
      className=" border-2 w-[25rem]"
    >

      <div className="p-2  ">
        {" "}
        <img className=" rounded-lg " src={p?.thumbnail} alt={p?.title} />
      </div>
      <div>
        <h1>{p?.title}</h1>
        <p>{p?.description}</p>
        <p>Rs {p?.price}</p>
        <p>{p?.rating}</p>
      </div>
    </div>
  );
}

export default ProductCard;
