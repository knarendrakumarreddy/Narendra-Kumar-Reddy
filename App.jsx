import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Kids from './components/Kids'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Payment from './components/Payment'
import { CartProvider } from './components/CartContext'
import Cart from './components/Cart';
import Orders from './components/Orders'
import Wishlist from './components/Wishlist'


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/Payment' element={<Payment/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          
        </Routes>
        
  

        
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;