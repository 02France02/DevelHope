import React from 'react'

function Product({title, price}) {
  return (
    <div >
      <div>{title}</div>
      <p>{price}</p>
    </div>
  )
}

export default Product
