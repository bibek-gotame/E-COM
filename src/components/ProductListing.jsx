import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductListing() {
  const productList = useSelector((store) => store.products?.productList);
  // console.log(productList);
  
  return (
    <div>
      <div className="flex gap-3 w-fit mx-auto mt-16 mb-16">
        <input
          className="w-96 border-2 px-4 py-2"
          type="text"
          placeholder="Enter the Product Name"
        />
        <button className="px-4 py-2 bg-green-600 rounded-md text-white font-bold text-lg">
          Search
        </button>
      </div>
      <div >
        <h1 className="text-xl font-bold pl-10  border-b-2 border-t-2 border-slate-500">
          Products
        </h1>
        {/* flex flex-wrap gap-4 */}
        <div className="flex flex-wrap place-content-evenly gap-4   px-2 pt-5 ">
          {/* <div > */}
          {productList?.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
