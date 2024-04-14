import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function ProductDetails() {
    const productDetail = useSelector((store) => store.products?.productDetails)
    const navigate = useNavigate()
    useEffect(()=>{
      if(productDetail == null){
 
        navigate('/productList') // should call inside the navigate
        console.log('cleared');
      }
    },[])
    // if(productDetail == null){
 
    //   navigate('/productList')
    //   console.log('cleared');
    // } else //! why not working 
 return  (
    <div className="px-6 pt-10">ProductDetails

      <div>
        <ProductCard p={productDetail}/>
      </div>
    </div>
  )
}



export default ProductDetails