
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext';
import "./PRoductDetail.css"
import useFetchDataProducts from "../Hooks/useApi";


function ProductDetail() {
  const { data } = useFetchDataProducts('http://localhost:5000/api/products');

  if (!data) {
    return null;
  }

  return (
    <div className='carta'>
      {data.map((product) => (
        <div className='carta' key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt='img-product-card'/>
          <h4>{product.price}</h4>
          <button>add to the cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
