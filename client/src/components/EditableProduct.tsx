import ProductDetails from './ProductDetails'
import EditProductForm from './EditProductForm'
import type { Product } from '../types'
import { useState } from 'react'

interface EditableProductProps {
  product: Product;
}

export default function EditableProduct({ product }: EditableProductProps) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => {
    setShowEditForm(!showEditForm);
  }

  return (
    <>
      <ProductDetails product={product} onShowEditForm={handleShowEditForm} showEditButton={!showEditForm}/>
      {showEditForm && <EditProductForm product={product} onCloseEditForm={handleShowEditForm}/>}
    </>
  )
}