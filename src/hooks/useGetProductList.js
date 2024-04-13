import { useEffect } from "react";
import { productListURL} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addProductList } from "../utils/store/productSlice";



export const useGetProductList = () => {
    const dispatch = useDispatch()
    const getData = async () => {
        const data = await fetch(productListURL);
        const json = await data.json();
        // console.log(json);
dispatch(addProductList(json.products))
    };
    useEffect(() => {
        getData();
    }, []);

}