import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
    
    <div className="flex flex-col items-center text-center py-16 px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">LEARN MORE</button>
    </div>
    <div className="flex justify-center space-x-6 mt-16">
      <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path-to-your-image1.jpg')` }}></div>
      </div>
      <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path-to-your-image2.jpg')` }}></div>
      </div>
      <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path-to-your-image3.jpg')` }}></div>
      </div>
      <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path-to-your-image4.jpg')` }}></div>
      </div>
    </div>
  </div>
  )
}

export default About