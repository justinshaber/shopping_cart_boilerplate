import type { Product } from '../types'

interface ProductDetailsProps {
  product: Product;
  onToggleEditForm: () => void;
  showEditButton: boolean;
}

export default function ProductDetails({product: {title, price, quantity}, onToggleEditForm, showEditButton }: ProductDetailsProps) {
  return (
    <>
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            {showEditButton && <button className="edit" onClick={onToggleEditForm}>Edit</button>}
          </div>
          <button className="delete-button"><span>X</span></button>
        </div>
      </li>
    </>
  )
}