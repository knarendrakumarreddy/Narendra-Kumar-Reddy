import React from 'react';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 'M-1', 
      name: 'Men Shirt',
      price: '₹2000',
      image: 'https://t4.ftcdn.net/jpg/08/15/05/37/240_F_815053740_5ToVcoPYQnYGi1v5y22cwYn3gOvGGZyy.jpg'
    },
    {
      id: 'M-2', 
      name: 'Men T-shirt',
      price: '₹450',
      image: 'https://img.freepik.com/free-photo/young-handsome-man-posing-quarry_1303-28636.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_items_boosted&w=740'
    },
    {
      id: 'M-3', 
      name: 'Men Shirt',
      price: '₹1200',
      image: 'https://t4.ftcdn.net/jpg/07/82/31/93/240_F_782319340_DKHK9hfZMTMppXg8cKlI9dDOADP0jHdc.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
                <p className="text-fuchsia-600 font-medium mt-2">{item.price}</p>
                <button className="mt-4 w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
