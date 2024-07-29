type paramsType = {params:{profileId:string,reviewId:string}}

import { profile } from 'console'
import React from 'react'

function ReviewId({params}:paramsType) {
    console.log(params)
  return (
    <div>ReviewId</div>
  )
}

export default ReviewId