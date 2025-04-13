import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

const CartModal = ({ cartItems, onClose, onRemove }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
          <DialogDescription>
            {cartItems.length === 0
              ? "Your cart is empty."
              : "Review your items before proceeding to checkout."}
          </DialogDescription>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <DialogFooter>
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Checkout
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;