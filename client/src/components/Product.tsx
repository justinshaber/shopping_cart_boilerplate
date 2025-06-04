type ProductProps = {
  name: string;
  price: number;
  quantity: number;
}

export default function Product({name, price, quantity}: ProductProps) {
  return (
    <>
      <li className="product">
        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="edit">Edit</button>
          </div>
          <button className="delete-button"><span>X</span></button>
        </div>
      </li>
    </>
  )
}