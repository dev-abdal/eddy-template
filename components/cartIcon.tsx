import React from 'react'
import Image from 'next/image'
import cart from '../public/cart.svg'
const CartIcon = () => {
  return (
       <Image
       src={cart}
       alt='cart'
       />
    )
}

export default CartIcon