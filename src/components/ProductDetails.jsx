import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const productDetail = useSelector((store) => store.products?.productDetails);
  const navigate = useNavigate();

  if (productDetail == null) return navigate("/");

  return (
    <div className="px-6 pt-10">
      ProductDetails
      <div>
        <ProductCard p={productDetail} />
      </div>
    </div>
  );
}

export default ProductDetails;
