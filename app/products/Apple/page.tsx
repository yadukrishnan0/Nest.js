import React from "react";

const Apple = () => {
  return (
    <div className="flex justify-center items-center bg-white py-16 px-8">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/1024x378"
            alt="Product Promotion"
            className="max-w-full h-auto"
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Get 3% Daily Cash back with Apple Card.
          </h2>
          <p className="mt-4 text-gray-600">
            And pay for your new iPhone over 24 months, interest-free when you
            choose Apple Card Monthly Installments.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Learn more &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apple;
