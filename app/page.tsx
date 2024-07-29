import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <header className="bg-transparent absolute top-0 left-0 w-full flex justify-between items-center p-5">
      <div className="text-white text-2xl font-bold">NICK</div>
      <nav>
        <ul className="flex space-x-6 text-white">
          <li><a href="#" className="hover:underline">HOME</a></li>
          <li><a href="#" className="hover:underline">SERVICES</a></li>
          <li><a href="#" className="hover:underline">WORK</a></li>
          <li><a href="#" className="hover:underline">ABOUT US</a></li>
          <li><a href="#" className="hover:underline">BLOGS</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
        </ul>
      </nav>
    </header>
    
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-lg mb-4">DESIGN * DEVELOPMENT * BRANDING</p>
        <h1 className="text-6xl font-bold mb-4">CREATIVE & EXPERIENCED</h1>
        <p className="text-xl mb-8">We are the one of the world's top creative design agencies</p>

        <div className="flex space-x-4">
          <Link href='/products'>
        
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Products</button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SHARE</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SUBSCRIBE</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default page