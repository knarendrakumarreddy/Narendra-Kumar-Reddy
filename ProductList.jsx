
import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'T-shirt', price: '$20', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Jeans', price: '$40', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Jacket', price: '$60', image: 'https://via.placeholder.com/100' },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4 shadow bg-white">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.price}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
