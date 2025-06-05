import ProductDetails from './ProductDetails'
import EditProductForm from './EditProductForm'
import type { Product } from '../types'

interface EditableProductProps {
  product: Product;
}

export default function EditableProduct({ product }: EditableProductProps) {
  return (
    <>
      <ProductDetails {...product}/>
      <EditProductForm product={product}/>
    </>
  )
}