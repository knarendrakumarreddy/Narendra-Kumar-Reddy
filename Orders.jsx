import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 'M-1',
      date: '2025-06-15',
      total: '₹2000',
      items: 3,
      status: 'Delivered',
    },
    {
      id: 'M-4',
      date: '2025-06-12',
      total: '₹500.00',
      items: 1,
      status: 'Shipped',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Order #{order.id}
                </h2>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Date: {order.date}</p>
                <p>Total: {order.total}</p>
                <p>Items: {order.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
