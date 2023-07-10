import React from 'react'
import { useCart } from 'react-use-cart'
const Itemcart = (props) => {
    const {addItem}= useCart();
  return (
    <div className='col-11 col-md-6 col-lg mx-0 mb-4 '>
    <div class="card p-0 overflow-hidden h-100 shadow ">
    <img src={props.img} class="card-img-top"/>
  <div class="card-body text-center">
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-title">Rs: {props.price}</h5>
    <p class='cart-text'>{props.desc}</p>
    
    <button class="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
  </div>
</div>

    </div>
  )
}

export default Itemcart