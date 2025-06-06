import type { CartItem } from '../types'

type CartItemsProps = {
  cart: CartItem[]
}

function CartItemDetails({ title, quantity, price }: CartItem) {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </>
  )
}

export default function CartItems({ cart }: CartItemsProps) {
  const itemsList = cart.map(item => {
    return (
      <CartItemDetails key={item._id} {...item} />
    )}
  );

  const cartTotal = Number(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2);

  return (
    <>
      {
        cart.length === 0  ? 
        (
          <div>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
          </div>
        ) : 
        (
          <table className="cart-items">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {itemsList}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="total">Total: {cartTotal}</td>
              </tr>
            </tfoot>
          </table>
        )
      }
    </>
  )
}