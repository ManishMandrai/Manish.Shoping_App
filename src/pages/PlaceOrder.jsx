import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] bg-gray-50 p-6 rounded-lg shadow-lg mt-20 border border-gray-200">
      <div className="flex flex-col gap-6 w-full sm:max-w-md">
        <div className="text-xl sm:text-2xl text-gray-800 my-3">
          <Title text1={'Delivery'} text2={'Information'} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="text"
            placeholder="Street"
            required
          />
          <div className="flex gap-4">
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="text"
              placeholder="City"
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="number"
              placeholder="Pincode"
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="number"
              placeholder="Phone"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="mt-8 min-w-[300px]">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'Payment'} text2={'Method'} />
          <div className="flex gap-4 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 cursor-pointer rounded-lg ${method === 'stripe' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <p className={`min-w-3 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-500' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
              <p className="text-gray-600">Credit-Card</p>
            </div>
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 cursor-pointer rounded-lg ${method === 'razorpay' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <p className={`min-w-3 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-500' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
              <p className="text-gray-600">Paytm</p>
            </div>
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 cursor-pointer rounded-lg ${method === 'cod' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <p className={`min-w-3 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-500' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">Cash on Delivery</p>
            </div>
          </div>
        </div>

        <div className="w-full text-end mt-8">
          <button
            onClick={() => navigate('/orders')}
            className="bg-blue-600 text-white px-8 py-3 text-sm rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
