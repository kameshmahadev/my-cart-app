import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setFetchError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      // Increase quantity if item already in cart
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Open confirmation modal for new product
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  const handleConfirmAddToCart = () => {
    setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }]);
    setShowModal(false);
  };

  const handleCancelAddToCart = () => {
    setShowModal(false);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar
          cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsCartOpen={setIsCartOpen}
        />

        {showModal && (
          <Modal
            product={selectedProduct}
            onConfirm={handleConfirmAddToCart}
            onCancel={handleCancelAddToCart}
            cartItems={cartItems}
          />
        )}

        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemove={handleRemoveFromCart}
          />
        )}

        <main className="container mx-auto py-8">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  products={products}
                  loading={loading}
                  fetchError={fetchError}
                  onAddToCart={handleAddToCart}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route path="*" element={<p className="text-center text-gray-400">404 - Page not found</p>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
