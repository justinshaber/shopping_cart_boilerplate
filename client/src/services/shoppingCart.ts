import axios from 'axios'
import type { CartItem, Product, NewProduct } from '../types.ts'
import {z} from 'zod';

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number()
});

const getProductResponseSchema = z.array(productSchema);
const createProductResponseSchema = productSchema;

export const getProducts = async () => {
  try {
    const { data } = await axios.get<Product[]>('/api/products');
    return getProductResponseSchema.parse(data);
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
    return createProductResponseSchema.parse(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}