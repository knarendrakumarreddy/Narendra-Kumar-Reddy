import React from 'react';
import { useCart } from './CartContext'; 

const Kids = () => {
  const { cart, addToCart, removeFromCart } = useCart(); 

  const products = [
    { id: 'K-1', name: 'Kids T-shirt ', price: '₹400', image: 'https://img.freepik.com/premium-vector/red-shirt-with-picture-bear-letter-bdesign-cartoon-vector-illustration_637616-2475.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-2', name: 'Kids Shorts ', price: '₹420', image: 'https://img.freepik.com/premium-psd/kids-cotton-shorts-mockup_77323-650.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-3', name: 'Kids Hoodie ', price: '₹900', image: 'https://img.freepik.com/free-vector/front-hoodie-sweater-with-penguin-pattern_1308-64308.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-4', name: 'Kids Yellow Jacket', price: '₹1500', image: 'https://img.freepik.com/free-psd/stylish-kids-yellow-black-puffer-jacket-warm-winter-coat_191095-80567.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-5', name: 'Kids Pajamas ', price: '₹500', image: 'https://img.freepik.com/premium-photo/yellow-shirt-png-kids-apparel-with-galaxy-graphic-transparent-background_53876-949750.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-6', name: 'Kids Cap ', price: '₹300', image: 'https://img.freepik.com/free-photo/vertical-blonde-girl-wearing-brown-cap_181624-25910.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-7', name: 'Kids Running Shoes', price: '₹1000', image: 'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7526.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-8', name: 'Kids Socks ', price: '₹100', image: 'https://img.freepik.com/free-photo/baby_1203-6851.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-9', name: 'Kids Sweater ', price: '₹3000', image: 'https://img.freepik.com/premium-photo/autumn-cozy-still-life-with-handmade-pumpkin-sweater-leaves-warm-lights_370028-4366.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' },
    { id: 'K-10', name: 'Kids T-shirt ', price: '₹250', image: 'https://img.freepik.com/premium-psd/kid-wearing-tshirt-mockup-design_23-2149404836.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' }, // Changed ID from K-11 to K-10 to fill gap
    { id: 'K-11', name: 'Kids Denim Shorts', price: '₹800', image: 'https://img.freepik.com/free-psd/adorable-baby-denim-overalls-blue-jean-outfit-little-ones_191095-85718.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' }, // Changed ID from K-12 to K-11
    { id: 'K-12', name: 'Kids Casual Shoes', price: '₹300', image: 'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7526.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_hybrid&w=740' }, // Changed ID from K-13 to K-12
  ];

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Kids' Clothing</h2>
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <img
        src="https://cmsimages.shoppersstop.com/Eoss_salestrip_web_d824f4d4c7/Eoss_salestrip_web_d824f4d4c7.jpg"
        alt="Example"
        className="w-full h-auto rounded"
      />
    </div>
    <br></br>
    <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center"> Make-A-Splash Savings..</h2>
    <section className="flex gap-6 overflow-x-auto px-6 pb-16 max-w-6xl mx-auto scrollbar-hide">
  {[
    
    "https://cmsimages.shoppersstop.com/uspoloweb_4a2593e74b/uspoloweb_4a2593e74b.png",
    "https://cmsimages.shoppersstop.com/vitaminsweb_3f619715d1/vitaminsweb_3f619715d1.png",
    "https://cmsimages.shoppersstop.com/under14web_1f70495e67/under14web_1f70495e67.png",
    "https://cmsimages.shoppersstop.com/jack_and_jonesweb_60eabdf80a/jack_and_jonesweb_60eabdf80a.png"
    
  ].map((src, index) => (
    <div
      key={index}
      className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg flex-shrink-0 w-64"
    >
      <img
        src={src}
        alt={`Trending ${index + 1}`}
        className="w-full rounded-lg"
      />
    </div>
  ))}
</section>
    
    <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.price}</p>
            <button
              className={`mt-2 px-4 py-2 rounded text-white ${isInCart(product.id) ? 'bg-red-600' : 'bg-green-600'}`}
              onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product)}
            >
              {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Kids;