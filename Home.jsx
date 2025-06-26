import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true
  };

  return (
    
    <main
    
      className="min-h-screen bg-cover bg-center p-6 font-serif">
        
      
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-xl max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-4 cursor-crosshair">
          Welcome to ShopSite...
        </h1>
        <p className="text-lg text-green-700 mb-6 max-w-2xl mx-auto cursor-help">
          Discover the latest trends for Men, Women, and Kids. Shop now for fashion-forward collections....!
        </p>
        <div className="mb-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg overflow-hidden">
          <marquee 
            behavior="scroll" 
            direction="left" 
            scrollamount="20"
            className="text-lg font-bold flex items-center"
          >
             Flash Sale! Flat 50% OFF on Summer Collection  •    New Arrivals Every Week • Extra 10% OFF for First-Time Buyers •    Special Gifts on Orders Above ₹1999 •    Shop Trending Styles Now!
          </marquee>
        </div>
        
        

        <div className="mb-8 ">
          <Slider {...settings}>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
              alt="Men Fashion"
              className="w-full h-[350px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 cursor-grab"
            />
            <img
              src="https://img.freepik.com/premium-photo/indian-young-couple-shopping-bags-smart-phone-mobile-clicking-selfie-locating-store-standing-isolated-white-background-selective-focus_466689-40424.jpg"
              alt="Women Fashion"
              className="w-full h-[350px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 cursor-cell"
            />
            <img
              src="https://img.freepik.com/premium-photo/stylish-happy-excited-friends-with-shopping-bags-are-looking-together-smart-phone-chatting-about-sales-mall_283617-1412.jpg"
              alt="Kids Fashion"
              className="w-full h-[350px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 cursor-move"
            />
          </Slider>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 cursor-context-menu"> Latest Trending Offers...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
         </div>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-8 px-4">
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
    <img
      src="https://cmsimages.shoppersstop.com/Eoss_salestrip_web_d824f4d4c7/Eoss_salestrip_web_d824f4d4c7.jpg"
      alt="Fashion Sale Banner"
      className="w-full h-[100px] object-cover"
    />
  </div>
  
</div>
<br></br>
<br></br>
<div className="mb-8 px-2">
  <Slider {...settings}>
    <div>
      <img
        src="https://cmsimages.shoppersstop.com/CC_web_aa47d111a4/CC_web_aa47d111a4.png"
        alt="Men Fashion"
        className="w-full max-w-[1440px] h-[100px] md:h-[360px] lg:h-[380px] object-fill rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
      />
    </div>

    <div>
      <img
        src="https://cmsimages.shoppersstop.com/static_web_American_Eagle_ac6944db16/static_web_American_Eagle_ac6944db16.png"
        alt="Women Fashion"
        className="w-full max-w-[1440px] h-[100px] md:h-[360px] lg:h-[380px] object-fill rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
      />
    </div>

    <div>
      <img
        src="https://cmsimages.shoppersstop.com/biba_w_main_banner_web_a1b4aa9cc4/biba_w_main_banner_web_a1b4aa9cc4.png"
        alt="Kids Fashion"
        className="w-full max-w-[1440px] h-[100px] md:h-[360px] lg:h-[380px] object-fill rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
      />
    </div>
  </Slider>
</div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center"> Top Pics..</h2>
        
<section className="flex gap-6 overflow-x-auto px-6 pb-16 max-w-6xl mx-auto scrollbar-hide">
  {[
    
    "https://cmsimages.shoppersstop.com/USPA_web_15c1edaeb2/USPA_web_15c1edaeb2.png",
    "https://cmsimages.shoppersstop.com/Juniper_web_380b0ad4ca/Juniper_web_380b0ad4ca.png",
    "https://cmsimages.shoppersstop.com/under14web_1f70495e67/under14web_1f70495e67.png",
    
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
<div className="mb-8 ">
          <Slider {...settings}>
            <img
              src="https://cmsimages.shoppersstop.com/axis_bank_strip_web02_aeee6a2751/axis_bank_strip_web02_aeee6a2751.png"
              alt="Men Fashion"
              className="w-full h-[100px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 cursor-grab"
            />
            <img
              src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg"
              alt="Women Fashion"
              className="w-full h-[100px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 cursor-cell"
            />
            
          </Slider>
        </div>
<h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Shop With Us..</h2>
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-copy">
            <h3 className="text-xl font-bold text-blue-800 mb-2 cursor-text">🚚 Free Shipping</h3>
            <p className="text-gray-600 cursor-text">On all orders above ₹499. No hidden charges.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-no-drop">
            <h3 className="text-xl font-bold text-yellow-800 mb-2 cursor-text">🔄 Easy Returns</h3>
            <p className="text-gray-600 cursor-text">Return within 7 days with full refund guaranteed.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold text-green-800 mb-2 cursor-text">📞 Contact Support</h3>
            <p className="text-gray-600 cursor-text">24/7 live chat and email support available.</p>
          </div>
        </div>
        <br></br>
        <br></br>
        
      <h1 className='text-4xl mb-2 font-bold text-amber-800 cursor-context-menu'>Featured Collections..</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
  <Link to="/men" className="group">
    <div className="h-full bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-orange-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://cmsimages.shoppersstop.com/Bandeya_web_ef95761b1a/Bandeya_web_ef95761b1a.png"
          alt="Shop Men"
          className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
          Shop Men
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h3>
        <p className="text-white/90 mb-4">Trendy T-Shirts, Jackets, Jeans & more.</p>
        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-white/30 transition-all cursor-pointer">
          Explore Collection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </Link>

  <Link to="/women" className="group">
    <div className="h-full bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-pink-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://cmsimages.shoppersstop.com/TH_e7530f50bf/TH_e7530f50bf.png"
          alt="Shop Women"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
          Shop Women
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h3>
        <p className="text-white/90 mb-4">Elegant Kurtis, Tops, Sarees, Accessories.</p>
        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-white/30 transition-all cursor-pointer">
          Explore Collection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </Link>

  <Link to="/kids" className="group">
    <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-emerald-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmRy73VyUb7xLYN8Zr9eQsV32x-TFnCryd976XlO6KOJ9NCkDvK2rTJTipAwXFuKD5GjEIFXiv0tP0fp7F5g3pXSmTHCWrJmtqSjJJ79Q1NgqNhL3e-Brj"
          alt="Shop Kids"
          className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-600 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
          Shop Kids
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h3>
        <p className="text-white/90 mb-4">Colorful wear, comfy sets, and fun picks.</p>
        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-white/30 transition-all cursor-pointer">
          Explore Collection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
</div>



      </div>
    </main>
  );
};

export default Home;