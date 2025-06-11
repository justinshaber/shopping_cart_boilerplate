import './public/stylesheets/main.css'
import ProductList from './components/ProductList'
import Header from './components/Header'
import ToggleableAddForm from './components/ToggleableAddForm.tsx'
import { useState, useEffect } from 'react'
import type { CartItem, Product, NewProduct } from './types.ts'
import { 
  createProduct, 
  getCart, 
  getProducts,
  deleteProduct,
  addToCart,
  checkout 
} from './services/shoppingCart.ts'


function App() {
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

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts(prev => prev.filter(prod => prod._id !== productId));
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddToCart = async (productId: string) => {
    const product = products.find(p => p._id === productId);
    const existingItem = cart.find(item => item.productId === productId);
    if (!product || product.quantity === 0) return;

    try {
      const { product: updatedProduct, item } = await addToCart(productId);
      setProducts((prev) => {
        return prev.map((product) => {
          if (product._id === updatedProduct._id) {
          return updatedProduct;
        } else {
          return product;
        }
        });
      });
      setCart((prev) => {
        if (existingItem) {
          return prev.map((cartItem) => {
            if (cartItem.productId === productId) {
              return item;
            } else {
              return cartItem;
            }
          }); 
        } else {
          return prev.concat(item);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleCheckout = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div id="app">
        <Header cart={cart} onCheckout={handleCheckout}/>
        <main>
          <ProductList
            products={products}
            onDeleteProduct={handleDeleteProduct}
            onAddToCart={handleAddToCart}
          />
          <ToggleableAddForm onSubmitProduct={handleSubmitProduct}/>
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