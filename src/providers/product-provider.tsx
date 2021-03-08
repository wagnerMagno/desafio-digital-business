import React, { useState, useMemo, useContext , useEffect} from "react"
import { ProductContext } from './../contexts/ProductContext';



const ProductProvider = (props: any) => {
    const productMock: any[] = require('../json/productsMock.json')
    
    const [listProduct , setListProduct] = useState<any[]>([]);

    useEffect(() => {
        fetchProduct();
    })

    const fetchProduct = () => {
        setListProduct(productMock);
    }
    

    const ProductData = useMemo(() => {
        return {
            fetchProduct, listProduct
        }
    }, [listProduct]);

    return <ProductContext.Provider value={ProductData} {...props} />;
};

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
