import ProductDetails from './ProductDetails'
import EditProductForm from './EditProductForm'
import type { Product } from '../types'
import { useState } from 'react'

interface EditableProductProps {
  product: Product;
  onDeleteProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onUpdateProduct: (product: Product, callback?: () => void) => void;
}

export default function EditableProduct({ product, onDeleteProduct, onAddToCart, onUpdateProduct }: EditableProductProps) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => {
    setShowEditForm(!showEditForm);
  }

  return (
    <>
      <ProductDetails 
        product={product}
        onShowEditForm={handleShowEditForm}
        showEditButton={!showEditForm}
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
      {showEditForm && <EditProductForm
                          initialProduct={product}
                          onCloseEditForm={handleShowEditForm}
                          onUpdateProduct={onUpdateProduct}
                        />}
    </>
  )
}