import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartView from './components/CartView.jsx';
import Modal from './components/Modal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setFetchError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
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
    setShowModal(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />

        {showModal && (
          <Modal
            product={selectedProduct}
            onConfirm={handleConfirmAddToCart}
            onCancel={handleCancelAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cartItems={cartItems} // just in case you want to use it later
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
                />
              }
            />
            <Route path="/cart" element={<CartView cartItems={cartItems} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
