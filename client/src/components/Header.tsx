import CartItems from './CartItems'
import type { CartItem } from '../types'

type HeaderProps = {
  cart: CartItem[];
  onCheckout: () => void;
}

export default function Header({ cart, onCheckout }: HeaderProps) {

  const handleCheckout = () => { onCheckout(); }
  const handleDisable = () => { return cart.length === 0; }

  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <CartItems cart={cart}/>
          <button className="checkout" onClick={handleCheckout} disabled={handleDisable()}>Checkout</button>
        </div>
      </header>
    </>
  )
}