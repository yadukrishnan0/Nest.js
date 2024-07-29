import { products } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

function Products() {
  return (
    <div className='flex flex-col gap-4 '>
      {products.map((product) => {
        return (
          <div key={product.id} className='border-red-100 border-2 flex flex-col gap-5' >
            <div>name:{product.name}</div>
            <div>description:{product.description}</div>
            <div>price:{product.price}</div>
            <div>category:{product.category}</div>
            <div>stock:{product.stock}</div>
            <Link href={`/profile/${product.id}`}>
            <button className='bg-gray-300'>Buy Now</button>
            </Link>
            
          </div>
        )
      })}
    </div>
  )
}

export default Products
