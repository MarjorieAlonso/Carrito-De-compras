import React from 'react'
import { Link } from 'react-router-dom'
import "./BarrNav.css"

const BarrNav = () => {
  return (
    <div className='Barr-container'>
      <nav className='logo'>
        <h1>Bienvenidos a Find technology</h1>
        </nav>
      <Link className='carro' to={"/cart"}>🛒</Link>
    </div>
  )
}

export default BarrNav