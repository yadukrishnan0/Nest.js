
type paramsType ={params:{profileId:string}}
import { products } from '@/utils/constants'
import React from 'react'

function  ProfileId({params}:paramsType) {
    const id:number =parseInt(params.profileId)
    const product =products.filter((product )=>{return product.id == id})
    
  return (
    <div>
   <div>{product[0].id}</div>
   <div>{product[0].name}</div>
   <div>{product[0].description}</div>
   <div>{product[0].category}</div>
   <div>{product[0].stock}</div>
   <div>
        <img src={product[0].imageUrl} alt={product[0].name} />
      </div>
    </div>
  )
}

export default  ProfileId