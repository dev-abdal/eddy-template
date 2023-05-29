import React from 'react'
import Image from 'next/image'
import cart from '../public/cart.svg'
const CartIcon = () => {
  return (
      <Image
             priority
              src={cart}
             /> 
  )
}

export default CartIcon