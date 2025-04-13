import React from 'react';

const Modal = ({ product, onConfirm, onCancel, onRemoveFromCart, cartItems }) => {
  const isInCart = cartItems?.some(item => item.id === product.id); // ✅ Check cart

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4">Add to Cart</h2>
        <p className="mb-6">
          Do you want to add <strong>{product.title}</strong> to the cart?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded transition"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded transition"
          >
            Cancel
          </button>

          {/* ✅ Show remove button ONLY if already in cart */}
          {isInCart && (
            <button
              onClick={() => onRemoveFromCart(product.id)}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded transition"
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
