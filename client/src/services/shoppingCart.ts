import axios from 'axios'
import type { CartItem, Product, NewProduct } from '../types.ts'

export const getProducts = async () => {
  try {
    const { data } = await axios.get<Product[]>('/api/products');
    return data
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const getCart = async () => {
  try {
    const { data } = await axios.get<CartItem[]>('/api/cart');
    return data
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const createProduct = async (newProduct: NewProduct) => {
  try {
    const { data } = await axios.post('/api/products/', {...newProduct});
    return data
  } catch (err) {
    console.log(err);
    throw err;
  }
}