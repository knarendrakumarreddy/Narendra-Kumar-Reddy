import React from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  console.log("Cart contents:", cart);

  const total = cart.reduce((sum, item) => {
    const priceValue = parseFloat(
      String(item.price).replace(/[^\d.]/g, '')  
    ) || 0;
    
    const quantity = item.quantity || 1;
    
    return sum + (priceValue * quantity);
  }, 0);

  // Navigate to payment page
  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => {
            const itemPrice = parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
            const itemQuantity = item.quantity || 1;
            const itemTotal = itemPrice * itemQuantity;
            
            return (
              <div
                key={item.id} 
                className="flex items-center justify-between bg-gray-100 p-4 rounded mb-4"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      ₹{itemPrice.toFixed(2)} × {itemQuantity} = ₹{itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="text-red-500 text-sm hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            )
          })}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
            <button 
              onClick={handleCheckout}
              className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}