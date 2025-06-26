import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { cart } = useCart(); 

  function handleSearch(e) {
    if (e.key === "Enter") {
      const term = searchTerm.trim().toLowerCase();
      if (term === "men" || term === "mens") navigate("/men");
      else if (term === "women" || term === "womens") navigate("/women");
      else if (term === "kids") navigate("/kids");
      else alert("No results found for your search.");
      setSearchTerm("");
    }
  }

  return (
    <nav className="bg-gray-800 p-4 text-white flex flex-wrap items-center justify-between gap-4 text-lg">
      <div className="h-10 w-10">
        <img
          src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
          alt="Logo"
          className="rounded-full"
        />
      </div>

      <div className="flex-1 flex justify-center space-x-6">
        <Link to="/" className="hover:text-fuchsia-500">Home</Link>
        <Link to="/men" className="hover:text-fuchsia-500">Men</Link>
        <Link to="/women" className="hover:text-fuchsia-500">Women</Link>
        <Link to="/kids" className="hover:text-fuchsia-500">Kids</Link>
        <Link to="/cart" className="hover:text-fuchsia-500 relative">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      <div>
        <input
          type="search"
          placeholder="Search for products  "
          className="rounded-2xl text-center bg-pink-100 px-3 py-1 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          aria-label="Search products"
        />
      </div>

      <div className="flex space-x-4">
        <Link to="/login" className="hover:text-lime-500">Login</Link>
        <Link to="/profile" className="hover:text-lime-500">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;