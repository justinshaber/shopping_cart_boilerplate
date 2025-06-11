import EditableProduct from './EditableProduct'
import type { Product } from '../types'

type ProductListProps = {
  products: Product[];
  onDeleteProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
}

export default function ProductList({ products, onDeleteProduct, onAddToCart }: ProductListProps) {
  const productArray = products.map(product => {
    return <EditableProduct 
            key={product._id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onAddToCart={onAddToCart}
            />
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