import EditableProduct from './EditableProduct'

const mockProducts = [
  {
    _id: "1",
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    _id: "2",
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 0,
    price: 649.99,
  },
  {
    _id: "3",
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    _id: "4",
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74,
  },
];

export default function ProductList() {
  const productArray = mockProducts.map(product => {
    return <EditableProduct product={product}/>
  });

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {productArray}
        </ul>
      </div>
    </>
  )
}