import React from 'react';
import { Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, loading, fetchError, searchTerm }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-4xl text-gray-500" />
      </div>
    );
  }

  if (fetchError) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{fetchError}</span>
      </div>
    );
  }

  // 🔍 Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
