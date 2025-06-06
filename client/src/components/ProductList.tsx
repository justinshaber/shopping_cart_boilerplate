import EditableProduct from './EditableProduct'
import type { Product } from '../types'

type ProductListProps = {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const productArray = products.map(product => {
    return <EditableProduct key={product._id} product={product}/>
  });

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {productArray}
        </ul>
      </div>
    </>
  )
}