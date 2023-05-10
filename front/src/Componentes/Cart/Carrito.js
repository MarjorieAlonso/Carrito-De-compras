import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CarrElement from "./CarrElement"
import CartTotal from "./CartTotal"
import "./Carrito.css"

const Carrito = () => {
  const {cart}= useContext(dataContext);

  return cart.length > 0 ?(<>
  
  <CarrElement/>
    <CartTotal/>
  </>
    
  ):(
    <h2 className="Cart-message">Tu carrito esta vacio</h2>
  )
  
}

export default Carrito;