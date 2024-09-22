import React from 'react'

function Image({product}) {
  return (
   <>
   <img
  class="fit-picture"
  src= {product.pathUrl}
  alt="best smart phone"
  style={{height:'150px'}}
  />

   </>
  )
}

export default Image


