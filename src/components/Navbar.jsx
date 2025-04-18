import React from 'react';

export default function Navbar({ cartCount = 0, searchTerm, setSearchTerm, setIsCartOpen }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyCartApp</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md mr-4 w-48"
      />

      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex items-center text-gray-700 hover:text-blue-600"
      >
        🛒
        <span className="ml-1">Cart</span>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md animate-bounce">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}
