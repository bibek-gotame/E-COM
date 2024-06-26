import { useEffect } from "react";
import { PRODUCT_LIST_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addProductList } from "../utils/store/productSlice";



export const useGetProductList = () => {
    const productList = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const getData = async () => {
        const data = await fetch(PRODUCT_LIST_URL);
        const json = await data.json();
        dispatch(addProductList(json.products))
    };
    useEffect(() => {
        !productList && getData();
    }, []);

}