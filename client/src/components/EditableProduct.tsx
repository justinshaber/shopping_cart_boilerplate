import ProductDetails from './ProductDetails'
import EditProductForm from './EditProductForm'
import type { Product } from '../types'
import { useState } from 'react'

interface EditableProductProps {
  product: Product;
  onDeleteProduct: (productId: string) => void;
}

export default function EditableProduct({ product, onDeleteProduct }: EditableProductProps) {
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
      />
      {showEditForm && <EditProductForm product={product} onCloseEditForm={handleShowEditForm}/>}
    </>
  )
}