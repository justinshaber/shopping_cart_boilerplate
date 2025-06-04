const mockItems = [
  {
    _id: "a1",
    productId: "1",
    title: "Amazon Kindle E-reader",
    quantity: 1,
    price: 79.99,
  },
  {
    _id: "a2",
    productId: "2",
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 3,
    price: 649.99,
  },
]

export default function CartItems() {
  const itemsList = mockItems.map(item => {
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
    )}
  );

  const cartTotal = mockItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {mockItems.length === 0  ? 
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