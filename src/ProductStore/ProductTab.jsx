// ProductTab.jsx
import Product from "./Product.jsx";

const products = [
  { id: 1, title: "Phone", price: 15000 },
  { id: 2, title: "Laptop", price: 65000 },
  { id: 3, title: "iPad", price: 150000 },
  { id: 4, title: "OldPhone", price: 0 } // example Out of stock
];

export default function ProductTab() {
  return (
    <section aria-label="product-list">
      {products.map((p) => (
        <Product key={p.id} title={p.title} price={p.price} />
      ))}
    </section>
  );
}
