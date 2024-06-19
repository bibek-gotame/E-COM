import { useDispatch, useSelector } from "react-redux";
import { addProductRender } from "../utils/store/productSlice";

function ProductCategory() {
  const productCategory = useSelector(
    (store) => store.products?.productCategory
  );

  const productList = useSelector((store) => store.products?.productList);
  const dispatch = useDispatch();

  const getCategory = (p) => {
    const fileteredData = productList.filter((product) => product.category === p.slug);
    dispatch(addProductRender(fileteredData));
  };

  return (
    <div>
      <div className=" hidden md:flex gap-1 flex-wrap px-2 justify-center my-7">
        {productCategory &&
          productCategory?.map((p, i) => (
            <p
              onClick={() => getCategory(p)}
              key={i}
              className="rounded-md bg-black text-white hover:text-black hover:bg-white border-2 border-transparent hover:border-black font-semibold px-2 py-1 cursor-pointer "
            >
              {p.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default ProductCategory;
