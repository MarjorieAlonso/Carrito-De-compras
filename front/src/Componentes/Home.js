import React from 'react'
import BarrNav from '../Navbar/BarrNav'
import Banner from './Banner/Banner'
import ProductDetail from './DetalleProduct/ProductDetail'
import "./DetalleProduct/PRoductDetail.css"

const Home = () => {
  return (
    <>
    <BarrNav/>
    <Banner/>
    <div className='productCard'>
    <ProductDetail/>
    </div>
    

    </>
  )
}

export default Home