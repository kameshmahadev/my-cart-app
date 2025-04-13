import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
