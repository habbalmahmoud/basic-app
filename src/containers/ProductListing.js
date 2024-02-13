import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispacth = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        })
        dispacth(setProducts(response.data));
    }


    useEffect(() => {
        fetchProducts()
    },[])

    console.log(products);
    return (
        <div className="ui grid container" style={{marginTop:15}}>
            <ProductComponent />
        </div>
    )
}


export default ProductListing