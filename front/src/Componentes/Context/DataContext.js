
import React, { createContext, useState, useEffect } from "react";
import useFetchDataProducts from "../Hooks/useApi";

export const dataContext = createContext();

 export function ProductList() {
  const { data } = useFetchDataProducts('http://localhost:5000/api/products');

  /* // Use hook to get quantity of items in cart
  const [quantity, setQuantity] = useState([]);

  function sumItemsQuantity(items) {
    setQuantity(Object.values(items).reduce((acc, { quantity }) => acc + quantity, 0));
  } */

}

const ProvData = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    setProductData();
  }, []);

  return (
    <dataContext.Provider value={{ data: productData ,cart,setCart}}>
      {children}
    </dataContext.Provider>
  );
};

export default ProvData;


