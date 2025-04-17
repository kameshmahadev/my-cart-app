import React from 'react';

const CartModal = ({ cartItems, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-bold mb-2">🛒 Your Cart</h2>
        <p className="text-sm text-gray-500 mb-4">
          {cartItems.length === 0
            ? 'Your cart is empty.'
            : 'Review your items before checkout.'}
        </p>

        <div className="max-h-64 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Nothing here yet...</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-blue-600 text-sm font-semibold">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
