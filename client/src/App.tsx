import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import type { CartItem, Product, NewProduct } from './types.ts'
import { 
  createProduct, 
  getCart, 
  getProducts,
  deleteProduct, 
} from './services/shoppingCart.ts'


function App() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCart();
  }, []);

  const handleToggleAddButton = () => {
    setShowAddButton(!showAddButton);
  }

  // a reset function (resetting form values to empty) is passed as a callback that is invoked only when a product is created. If a product isn't added successfully, the form value isn't reset.
  const handleSubmitProduct = async (newProduct: NewProduct, callback?: () => void) => {
    try {
      const data = await createProduct(newProduct);
      setProducts(prev => prev.concat(data));
      if (callback) {
        callback(); 
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteProduct = async (productId: String) => {
    try {
      await deleteProduct(productId);
      setProducts(prev => prev.filter(prod => prod._id !== productId));
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div id="app">
        <Header cart={cart}/>

        <main>
          <ProductList products={products} onDeleteProduct={handleDeleteProduct}/>
          {showAddButton ? 
            (<p>
              <button className="add-product-button" onClick={handleToggleAddButton}>
                Add A Product
              </button>
            </p>) : 
            (<AddForm onToggleAddButton={handleToggleAddButton} onSubmitProduct={handleSubmitProduct}/>)
          }
        </main>
      </div>
    </>
  )
}

export default App


/*
  Zod - validate form data
  All inputs should be controlled - react decides what the values should be, not the DOM

  Define state of each form value

*/