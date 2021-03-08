import { createContext } from "react";

interface ProductContextProps {
  fetchProduct: Function,
  listProduct : any[]
}

const ProductValue = {
  fetchProduct: () => {},
  listProduct : []
}

export const ProductContext = createContext<ProductContextProps>(ProductValue)