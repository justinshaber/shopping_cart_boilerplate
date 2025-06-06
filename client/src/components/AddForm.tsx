import { useState } from 'react';
import type { NewProduct } from '../types';

type AddFormProps = {
  onToggleAddButton: () => void;
  onSubmitProduct: (newProduct: NewProduct, reset?: () => void) => Promise<void>;
}

export default function AddForm({ onToggleAddButton, onSubmitProduct }: AddFormProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleReset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }

  const handleSubmitProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmitProduct({title, price: Number(price), quantity: Number(quantity)}, handleReset);
  }

  return (
    <>
      <div className="add-form">
        <form onSubmit={handleSubmitProduct}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price:</label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              name="product-quantity"
              min="0"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="actions form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={onToggleAddButton}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}