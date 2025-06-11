import type { Product } from '../types'
import { useState, useEffect } from 'react'

interface EditProductFormProps {
  initialProduct: Product;
  onCloseEditForm: () => void;
  onUpdateProduct: (product: Product, onCloseEditForm: () => void) => void;
}

export default function EditProductForm({ initialProduct, onCloseEditForm, onUpdateProduct }: EditProductFormProps) {
  const id = initialProduct._id;
  const [title, setTitle] = useState(initialProduct.title || "");
  const [price, setPrice] = useState(String(initialProduct.price || ""));
  const [quantity, setQuantity] = useState(String(initialProduct.quantity || ""));

  useEffect(() => {
      setQuantity(String(initialProduct.quantity));
    }, [initialProduct.quantity]);
  
  const handleUpdateProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onUpdateProduct({
      _id: id,
      title, 
      price: Number(price), 
      quantity: Number(quantity),
    }, onCloseEditForm);
  }
  
  return (
    <form onSubmit={handleUpdateProduct}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          value={title}
          onChange={e => setTitle(e.target.value)}
          aria-label="Product Name"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          id="product-price"
          min="0"
          step="0.01"
          value={price}
          onChange={e => setPrice(e.target.value)}
          aria-label="Product Price"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="number"
          id="product-quantity"
          min="0"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          aria-label="Product Quantity"
          required
        />
      </div>

      <div className="actions form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onCloseEditForm}>Cancel</button>
      </div>
    </form>
  )
}