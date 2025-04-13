import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyCartApp
      </Link>
      <Link
        to="/cart"
        className="relative flex items-center text-gray-700 hover:text-blue-600"
      >
        🛒
        <span className="ml-1">Cart</span>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md animate-bounce">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}
