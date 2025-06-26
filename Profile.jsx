import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LHQrTbLlNkcU3lIBXDM3NWbNPhEakSViGUPC_eM0KP0OWfAwozu3ztY&s"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Narendra Kumar Reddy</h2>
            <p className="text-gray-500">narendra@example.com</p>
            <p className="text-gray-500">+91 98765 43210</p>
          </div>
        </div>

        
        <hr className="my-6 border-gray-300" />

       
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/orders")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow"
          >
            My Orders
          </button>
          <button
            onClick={() => navigate("/wishlist")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl shadow"
          >
            Wishlist
          </button>
        </div>

        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Shipping Address</h3>
          <p className="text-gray-600">
            123, Lakshmi Nagar, Hyderabad, Telangana, India - 500001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
