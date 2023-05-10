import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from 'react'

const CartTotal = () => {
    const {cart}= useContext(dataContext);


    const total=cart.reduce((acum,elem)=> acum + elem.price, 0)
    return(
    <div className="CartTotal">
        <h3>Total a pagar :${total}</h3>
    </div>
  )
}

export default CartTotal