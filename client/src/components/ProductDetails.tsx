import type { Product } from '../types'

interface ProductDetailsProps {
  product: Product;
  onShowEditForm: () => void;
  onDeleteProduct: (productId: string) => void;
  showEditButton: boolean;
}

export default function ProductDetails(
  {
    product: {_id, title, price, quantity}, 
    onShowEditForm,
    onDeleteProduct, 
    showEditButton 
  }: ProductDetailsProps) {

  const handleDeleteProduct = () => {
    onDeleteProduct(_id);
  }

  return (
    <>
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            {showEditButton && <button className="edit" onClick={onShowEditForm}>Edit</button>}
          </div>
          <button className="delete-button" onClick={handleDeleteProduct}><span>X</span></button>
        </div>
      </li>
    </>
  )
}