"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Count: {count}
      </h2>
      <div className="flex align-right gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
