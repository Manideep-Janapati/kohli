import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';

function Veg() {
  const vegProducts=useSelector(state => state.products.veg)
    const dispatch = useDispatch();
  const items =vegProducts.map((product,index)=>
    <li key={index}>
    <div className="product-item">
        <div className="product-info" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{product.name} - ${product.price.toFixed(2)}</span>
            <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    </div>
</li>

)

  return (
    <>
    <h1 style={{ color: 'blue', textAlign:'center'}}> Veg Items </h1>
    <ul style={{color:'black'}}>
      {items}
    </ul>
    </>
  )
}

export default Veg;
