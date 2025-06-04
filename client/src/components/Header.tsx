import CartItems from './CartItems'

export default function Header() {
  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <CartItems />
          <button className="checkout" disabled>Checkout</button>
        </div>
      </header>
    </>
  )
}