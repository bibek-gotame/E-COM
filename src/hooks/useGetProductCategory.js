import { useEffect } from "react";
// import { productListURL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addProductCategory } from "../utils/store/productSlice";



export const useGetProductCategory = () => {
    const productCategory = useSelector(store => store.productCategory)
    const dispatch = useDispatch()
    const getData = async () => {
        const data = await fetch('https://dummyjson.com/products/categories');
        const json = await data.json();
        // console.log(json);`
        dispatch(addProductCategory(json))
    };
    useEffect(() => {
        !productCategory && getData();
    }, []);

}