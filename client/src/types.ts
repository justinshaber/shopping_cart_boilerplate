export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export type NewProduct = Omit<Product, "_id">;

// This is how the solution writes it, but I don't understand.
// I think this means now that the _id in the Product Interface now becomes the _id for CartItem
export interface CartItem extends Product {
  productId: string;
}

// my solution so far
export interface Cart {
  id: string;
  items: Product[];
}
