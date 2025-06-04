// import { useState } from 'react'
import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import { useState } from 'react';



function App() {
  const [showAddButton, setShowAddButton] = useState(true);

  function handleToggleAddButton() {
    setShowAddButton(!showAddButton);
  }

  return (
    <>
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <div className="cart">
            <h2>Your Cart</h2>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <button className="checkout" disabled>Checkout</button>
          </div>
        </header>

        <main>
          <ProductList />
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
