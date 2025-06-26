import React from 'react';
import Slider from "react-slick";
import { useCart } from './CartContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Men = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  
  const sliderImages = [
    'https://cmsimages.shoppersstop.com/Men_EOSS_preview_sale_web_40a2af1e44/Men_EOSS_preview_sale_web_40a2af1e44.png',
    'https://cmsimages.shoppersstop.com/static_web_Calvin_Klein_b248ff737e/static_web_Calvin_Klein_b248ff737e.png',
    'https://cmsimages.shoppersstop.com/celio_web_8e81699430/celio_web_8e81699430.png',
    'https://cmsimages.shoppersstop.com/static_web_Flying_Machine_4f053e0668/static_web_Flying_Machine_4f053e0668.png',
  ];

  const products = [
    {
      id: 'M-1', 
      name: 'Men Shirt',
      price: '₹2000',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/S24URUMST133/S24URUMST133_WHITE/S24URUMST133_WHITE.jpg_2000Wx3000H'
    },
    {
      id: 'M-2', 
      name: 'Men T-shirt',
      price: '₹450',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/S25FTM137ANT/S25FTM137ANT_NATURAL/S25FTM137ANT_NATURAL.jpg_2000Wx3000H'
    },
    {
      id: 'M-3', 
      name: 'Men Shirt',
      price: '₹1200',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/S24URUMST115/S24URUMST115_INDIGO/S24URUMST115_INDIGO.jpg_1000Wx1500H'
    },
    {
      id: 'M-4', 
      name: 'Men T-shirt',
      price: '₹500',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A23VFFT23006BK/A23VFFT23006BK_BLACK/A23VFFT23006BK_BLACK.jpg_2000Wx3000H'
    },
    {
      id: 'M-5', 
      name: 'Men Cargo Pants',
      price: '₹2500',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A24LMJN004486BU/A24LMJN004486BU_BLUE/A24LMJN004486BU_BLUE.jpg_2000Wx3000H'
    },
    {
      id: 'M-6', 
      name: 'Men Denim Shorts',
      price: '₹700',
      image: 'https://img.freepik.com/free-photo/casual-men-short-pants_1203-8186.jpg'
    },
    {
      id: 'M-7', 
      name: 'Men Sport Shorts',
      price: '₹200',
      image: 'https://img.freepik.com/free-photo/texture-blue-background-clothes-color_1203-6522.jpg'
    },
    {
      id: 'M-8', 
      name: 'Men Casual Shirts',
      price: '₹600',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/FA24ARRWES1062B/FA24ARRWES1062B_GREY/FA24ARRWES1062B_GREY.jpg_2000Wx3000H'
    },
    {
      id: 'M-9', 
      name: 'Men Formal Shirt',
      price: '₹900',
      image: 'https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg'
    },
    
    {
      id: 'M-11', 
      name: 'Men Patterned Shirt',
      price: '₹550',
      image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A24BZCSSBL98516/A24BZCSSBL98516_BLUE/A24BZCSSBL98516_BLUE.jpg_2000Wx3000H'
    },
    
  ];

  const getQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
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
      <h2 className="text-2xl font-bold mb-6">Men's Clothing</h2>

     
      <Slider {...sliderSettings} className="mb-8">
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


      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const quantity = getQuantity(product.id);
          return (
            <div key={product.id} className="border p-4 rounded shadow flex flex-col h-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="mb-2 w-full h-80 rounded"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="font-medium text-gray-800 mb-3">{product.price}</p>

              <div className="mt-auto">
                {quantity === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-white hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow"
                    >
                      <span className="text-lg font-bold">−</span>
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow"
                    >
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Men;
