import React from 'react'
import { Cart } from './components/Cart'
import { CartComponentContext } from './utils/CartComponentContext'

export const App = () => {
  return <>
    <div className='wrapper'>
    <CartComponentContext>
    <Cart></Cart>
    </CartComponentContext>
      

    </div>
    
    
  </>
}
