"use client";
import { useCart } from "../../lib/cart-context";

const products = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Headphones", price: 200 },
  { id: "3", name: "Smartphone", price: 800 },
];

export default function ShopPage() {
  const { addItem, removeItem } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addItem(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeItem(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
