export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export type NewProduct = Omit<Product, "_id">;

export interface CartItem extends Product {
  productId: string;
}

export interface Cart {
  id: string;
  items: Product[];
}
