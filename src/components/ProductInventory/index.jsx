import React from 'react'

export default function ProductInventory () {
  return (
    <div className='product-inventory'>
      <div className='yuanliao1'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料1</span>
        <span className='bordered yuanliao inventory-value'>库存量1111</span>
      </div>
      <div className='yuanliao2'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料2</span>
        <span className='bordered yuanliao inventory-value'>库存量2222</span>
      </div>
      <div className='yuanliao3'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料3</span>
        <span className='bordered yuanliao inventory-value'>库存量3333</span>
      </div>
      <div className='yuanliao4'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料4</span>
        <span className='bordered yuanliao inventory-value'>库存量4444</span>
      </div>
    </div>
  )
}
