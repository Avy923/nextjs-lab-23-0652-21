"use client";
import { useCart } from "../../lib/cart-context";

export default function CartSummary() {
  const { items, total } = useCart();
  return (
    <div className="ml-2">
      {items.length} items (${total})
    </div>
  );
}
