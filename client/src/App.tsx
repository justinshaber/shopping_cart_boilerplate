import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import type { CartItem, Product } from './types.ts'
import { mockProducts, mockCart } from './data.ts'



function App() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
    setCart(mockCart);
  }, []);

  function handleToggleAddButton() {
    setShowAddButton(!showAddButton);
  }

  return (
    <>
      <div id="app">
        <Header cart={cart}/>

        <main>
          <ProductList products={products}/>
          {showAddButton ? 
            (<p>
              <button className="add-product-button" onClick={handleToggleAddButton}>
                Add A Product
              </button>
            </p>) : 
            (<AddForm onToggleAddButton={handleToggleAddButton}/>)
          }
        </main>
      </div>
    </>
  )
}

export default App
