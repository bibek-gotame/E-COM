import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCategory } from "../utils/store/productSlice";
import { PRODUCT_CATEGORY_URL } from "../utils/constant";



export const useGetProductCategory = () => {
    const productCategory = useSelector(store => store.productCategory)
    const dispatch = useDispatch()
    const getData = async () => {
        const data = await fetch(PRODUCT_CATEGORY_URL);
        const json = await data.json();
        dispatch(addProductCategory(json))
    };

    useEffect(() => {
        !productCategory && getData();
    }, []);
    
}