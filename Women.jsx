import React from 'react';
import Slider from "react-slick";
import { useCart } from './CartContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Women = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const sliderImages = [
    'https://cmsimages.shoppersstop.com/EOSS_preview_sale_web_7ffc245564/EOSS_preview_sale_web_7ffc245564.png',
    'https://cmsimages.shoppersstop.com/libas_fashor_main_banner_web_25085273a8/libas_fashor_main_banner_web_25085273a8.png',
    'https://cmsimages.shoppersstop.com/static_web_Madame_7589ef6f18/static_web_Madame_7589ef6f18.png',
    'https://cmsimages.shoppersstop.com/kraus_pepe_main_banner_web_ac7d6542d1/kraus_pepe_main_banner_web_ac7d6542d1.png'
  ];

  const products = [
    { id: 'W-1', name: 'Women Dress ', price: '₹600', image: 'https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg' },
    { id: 'W-2', name: 'Women Skirt ', price: '₹300', image: 'https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17489.jpg' },
    { id: 'W-3', name: 'Women Top ', price: '₹500', image: 'https://img.freepik.com/free-photo/pretty-smiling-girl-spring-look-posing-with-left-hand_176420-8911.jpg' },
    { id: 'W-4', name: 'Women Leather Jacket', price: '₹900', image: 'https://img.freepik.com/free-photo/photo-woman-looking-away-black-leather-jacket-cap_114579-59398.jpg' },
    { id: 'W-5', name: 'Women Traditional Blouse', price: '₹2000', image: 'https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-traditional-sari-garment_23-2149565120.jpg' },
    { id: 'W-6', name: 'Women Jeans ', price: '₹1500', image: 'https://img.freepik.com/free-photo/young-woman-posing-street_1303-31808.jpg' },
    { id: 'W-7', name: 'Women Saree ', price: '₹5000', image: 'https://img.freepik.com/free-photo/celebration-navratri-deity_23-2151219980.jpg' },
    { id: 'W-8', name: 'Women Top ', price: '₹550', image: 'https://img.freepik.com/free-photo/walking-white-model-paper-cup-girl_1303-3233.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_items_boosted&w=740' },
    { id: 'W-9', name: 'Women Elegant Dress', price: '₹700', image: 'https://img.freepik.com/premium-photo/young-woman-elegant-dress_211539-8.jpg' },
    { id: 'W-10', name: 'Women Jacket (Traditional)', price: '₹800', image: 'https://img.freepik.com/free-photo/portrait-young-woman-wearing-tradition-sari-garment_52683-90221.jpg' },
    { id: 'W-11', name: 'Women Blouse ', price: '₹1000', image: 'https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-traditional-sari-garment_23-2149565120.jpg' },
    { id: 'W-12', name: 'Women Kurti ', price: '₹450', image: 'https://img.freepik.com/premium-photo/indian-girl-wear-blue-kurti-standing-with-indian-style_92735-14.jpg?ga=GA1.1.1211630516.1742621032&semt=ais_items_boosted&w=740' },
  ];

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">Women's Fashion Collection</h2>

      
      <Slider {...sliderSettings} className="mb-10">
        {sliderImages.map((src, index) => (
          <div key={index} className="px-2">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-100 object-cover rounded"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <img
        src="https://cmsimages.shoppersstop.com/Eoss_salestrip_web_d824f4d4c7/Eoss_salestrip_web_d824f4d4c7.jpg"
        alt="Example"
        className="w-full h-[100px] rounded"
      />
    </div>
    <br></br>
    <br></br>
    <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center"> Best Brand Picks..</h2>
     <section className="flex gap-6 overflow-x-auto px-6 pb-16 max-w-6xl mx-auto scrollbar-hide">
  {[
    
    "https://cmsimages.shoppersstop.com/Juniper_web_380b0ad4ca/Juniper_web_380b0ad4ca.png",
    "https://cmsimages.shoppersstop.com/Folksong_web_c160198875/Folksong_web_c160198875.png",
    "https://cmsimages.shoppersstop.com/Aurelia_web_10cd589e46/Aurelia_web_10cd589e46.png",
    "https://cmsimages.shoppersstop.com/Pepe_web_71316c86ac/Pepe_web_71316c86ac.png"
    
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

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-2 font-medium text-gray-700">{product.price}</p>
            <button
              onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product)}
              className={`mt-2 px-4 py-2 rounded text-white w-full ${
                isInCart(product.id) ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'
              }`}
            >
              {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
