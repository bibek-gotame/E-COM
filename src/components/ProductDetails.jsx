import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const productDetail = useSelector((store) => store.products?.productDetails);
  const navigate = useNavigate();
// const {
//   availabilityStatus,
//   images , 
// }= productDetail
  if (productDetail == null) return navigate("/");

  return (
    <div className="px-20 pt-10">
      <h1 className="font-bold text-3xl">ProductDetails</h1>
      <div>

        <ProductCard p={productDetail} />
      </div>
    </div>
  );
}

export default ProductDetails;
