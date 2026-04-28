import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './components/Index'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Contact from './components/Contact'
import About from './components/About'
import Checkout from './components/Checkout'
import Wishlist from './components/Wishlist'
import OrderConfirmation from './components/OrderConfirmation'
import AccountDashboard from './auth/AccountDashboard'
import PrivacyAndPolicy from './components/PrivacyAndPolicy'
import TermsAndConditions from './components/TermsAndCondition'
import Register from './auth/views/Register'
import Login from './auth/views/Login'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="gradient-bg">
      {/* Header always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop_checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order_confirmation" element={<OrderConfirmation />} />
        <Route path="/terms_conditions" element={<TermsAndConditions />} />
        <Route path="/privacy_policy" element={<PrivacyAndPolicy />} />
        <Route path="/account_dashboard/*" element={<AccountDashboard />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App