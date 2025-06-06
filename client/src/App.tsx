import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import type { CartItem, Product } from './types.ts'
import axios from 'axios'

function App() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get<CartItem[]>('/api/cart');
        setCart(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCart();
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
