import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import Header from './components/Header'
import { useState } from 'react';



function App() {
  const [showAddButton, setShowAddButton] = useState(true);

  function handleToggleAddButton() {
    setShowAddButton(!showAddButton);
  }

  return (
    <>
      <div id="app">
        <Header />

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
