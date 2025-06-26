import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Function to parse price from different formats
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      // Handle both ₹ and $ symbols
      const cleaned = price.replace(/[^0-9.]/g, '');
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Calculate base total
  const baseTotal = cart.reduce((sum, item) => {
    const price = parsePrice(item.price);
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  
  const discountPercentage = 0.10; 
  const discountThreshold = 1000; 
  
  let discountAmount = 0;
  let finalTotal = baseTotal;
  
  let offerMessage = ` Offer: Get ${discountPercentage * 100}% off on orders above ₹${discountThreshold}!`;
  
  if (baseTotal >= discountThreshold) {
    discountAmount = baseTotal * discountPercentage;
    finalTotal = baseTotal - discountAmount;
    offerMessage = ` Offer Applied: ${discountPercentage * 100}% discount! You saved ₹${discountAmount.toFixed(2)}.`;
  }

  const handlePayment = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before paying.');
      return;
    }

    setPaymentProcessing(true);
    
    
    setTimeout(() => {
      setPaymentSuccess(true);
      setPaymentProcessing(false);
    }, 1500);
  };

  
  const confirmOrder = () => {
    clearCart();
    navigate('/');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Payment Summary</h2>
      
      {paymentSuccess ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4 text-green-500">✓</div>
          <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
          <p className="text-gray-700 mb-4">
            Your payment of ₹{finalTotal.toFixed(2)} has been processed successfully.
          </p>
          <button
            onClick={confirmOrder}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : cart.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🛒</div>
          <p className="text-gray-500 mb-2">Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="border-b pb-4">
            {cart.map((item) => {
              const price = parsePrice(item.price);
              const quantity = item.quantity || 1;
              const itemTotal = price * quantity;
              
              return (
                <div key={item.id} className="flex items-center justify-between py-3">
                  <div className="flex items-center flex-1">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-contain rounded-lg border bg-gray-50 mr-4"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>₹{price.toFixed(2)}</span>
                        {quantity > 1 && (
                          <>
                            <span className="mx-2">×</span>
                            <span>{quantity}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold">₹{itemTotal.toFixed(2)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{baseTotal.toFixed(2)}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total:</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {baseTotal < discountThreshold && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
              {offerMessage}
            </div>
          )}

          {discountAmount > 0 && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {offerMessage}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={paymentProcessing}
            className={`mt-6 w-full py-3 rounded-lg text-white font-medium transition-all
              ${paymentProcessing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-md hover:shadow-lg'
              }`}
          >
            {paymentProcessing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Payment...
              </span>
            ) : (
              `Pay ₹${finalTotal.toFixed(2)}`
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default Payment;