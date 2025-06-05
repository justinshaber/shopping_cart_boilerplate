import ProductDetails from './ProductDetails'
import EditProductForm from './EditProductForm'
import type { Product } from '../types'
import { useState } from 'react'

interface EditableProductProps {
  product: Product;
}

export default function EditableProduct({ product }: EditableProductProps) {
  const [toggleEditForm, setToggleEditForm] = useState(false);

  const handleToggleEditForm = () => {
    setToggleEditForm(!toggleEditForm);
  }

  return (
    <>
      <ProductDetails product={product} onToggleEditForm={handleToggleEditForm} showEditButton={!toggleEditForm}/>
      {toggleEditForm && <EditProductForm product={product} onToggleEditForm={handleToggleEditForm}/>}
    </>
  )
}

/*

Editable Product
  toggle functionality

  ProductDetails
    Edit Button -> should toggle edit form on
  EditProductForm
    Cancel Button -> should toggle edit form off


Pass down the toggle button to ProductDetails and EditProductForm
  In children - include it as a prop
    ...where? in types? Or in prop types?
*/