import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 py-16">
    <div className="text-center mb-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <img src="/path-to-phone-icon.png" alt="By Phone" className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2">By Phone</h2>
        <p className="text-gray-600 text-center">Mon-Fri 9am-6pm PST</p>
        <p className="text-gray-600 text-center">North America Toll-Free:</p>
        <p className="text-gray-600 text-center">1-877-389-1483</p>
        <p className="text-gray-600 text-center">International:</p>
        <p className="text-gray-600 text-center">1-604-637-0780</p>
      </div>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <img src="/path-to-new-case-icon.png" alt="Start a New Case" className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Start a New Case</h2>
        <p className="text-gray-600 text-center mb-4">Just send us your questions or concerns by starting a new case and we will give you the help you need.</p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">START HERE</button>
      </div>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <img src="/path-to-live-chat-icon.png" alt="Live Chat" className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
        <p className="text-gray-600 text-center mb-4">Chat with a member of our in-house team.</p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">START CHAT</button>
      </div>
    </div>
  </div>
  )
}

export default Contact