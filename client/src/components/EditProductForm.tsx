import type { Product } from '../types'

interface EditProductFormProps {
  product: Product;
  onCloseEditForm: () => void;
}

export default function EditProductForm({ product: {title, price, quantity}, onCloseEditForm }: EditProductFormProps) {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          value={title}
          aria-label="Product Name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          id="product-price"
          value={price}
          aria-label="Product Price"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="number"
          id="product-quantity"
          value={quantity}
          aria-label="Product Quantity"
        />
      </div>

      <div className="actions form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onCloseEditForm}>Cancel</button>
      </div>
    </form>
  )
}