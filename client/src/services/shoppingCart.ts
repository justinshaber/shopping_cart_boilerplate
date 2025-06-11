import axios from 'axios'
import type { CartItem, Product, NewProduct } from '../types.ts'
import {z} from 'zod';

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const cartItemSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
  productId: z.string(),
});

const getProductResponseSchema = z.array(productSchema);
const getCartResponseSchema = z.array(cartItemSchema);
const createProductResponseSchema = productSchema;
// const updatedProductResponseSchema = productSchema; // not used yet
const addToCartResponseSchema = z.object({
  product: productSchema,
  item: cartItemSchema,
});

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
    return getCartResponseSchema.parse(data);
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

export const deleteProduct = async (productId: String) => {
  try {
    await axios.delete(`/api/products/${productId}`);
    return null;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

type AddToCartResponse = {
  product: Product;
  item: CartItem;
}

export const addToCart = async (productId: string) => {
  try {
    const { data } = await axios.post<AddToCartResponse>("/api/add-to-cart", { productId });
    return addToCartResponseSchema.parse(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/*
Zod - user input or data returned from an outside API

edit product
  zod edit product
add to cart
  zod add to cart
cart checkout
  zod checkout
*/