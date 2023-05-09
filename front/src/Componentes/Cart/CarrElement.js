import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import React from 'react'

const CarrElement = () => {
    const { cart } = useContext(dataContext);
    return cart.map((product) => {
      return (
        <div className="ContCart" key={product._id}>
          <h3 className="name">{product.name}</h3>
          <img src={product.image} alt='img-product-card'/>
          <h4>{product.price}</h4>
        </div>
      );
    });
  };
  
export default CarrElement