import CartItems from './CartItems'
import type { CartItem } from '../types'

type HeaderProps = {
  cart: CartItem[]
}

export default function Header({ cart }: HeaderProps) {
  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <CartItems cart={cart}/>
          <button className="checkout" disabled>Checkout</button>
        </div>
      </header>
    </>
  )
}