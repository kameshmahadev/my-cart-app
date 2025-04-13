import React from 'react';

const CartView = ({ cartItems }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
                </div>
              </div>
              <div className="text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}

          <div className="text-right mt-4 text-xl font-semibold">
            Total: ${getTotalAmount()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
