import Product from './Product'

export default function ProductList() {
  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          <Product name="Garmin" price={29.99} quantity={4}/>
          <Product name="Amazon Kindle E-reader" price={79.99} quantity={5}/>
          <Product name="Apple 10.5-Inch iPad Pro" price={649.99} quantity={2}/>
          <Product name="Yamaha Portable Keyboard" price={155.99} quantity={0}/>
        </ul>
      </div>
    </>
  )
}