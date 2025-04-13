import React from 'react';
import PropTypes from 'prop-types';

export default function AddToCartModal({ isOpen, product, onClose, onConfirm }) {
  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm(product);
    } else {
      console.error('onConfirm is not a function');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add to Cart</h2>
        
        <p className="mb-2"><strong>Product:</strong> {product.title}</p>
        <p className="mb-4"><strong>Price:</strong> ${product.price}</p>

        <div className="flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

AddToCartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

AddToCartModal.defaultProps = {
  onConfirm: () => console.warn('onConfirm function is not provided'),
};
