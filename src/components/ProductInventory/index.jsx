import React from 'react'
import './index.scss'
import inventory2 from '../../assets/img/inventory2.png';

export default function ProductInventory () {
  return (
    <div className='product-inventory'>
      <h2><img src={inventory2} alt=''/> 原料库存</h2>
      <div className='yuanliao1'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料1</span>
        <span className='bordered yuanliao inventory-value'>库存：12345</span>
      </div>
      <div className='yuanliao2'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料2</span>
        <span className='bordered yuanliao inventory-value'>库存：26654</span>
      </div>
      <div className='yuanliao3'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料3</span>
        <span className='bordered yuanliao inventory-value'>库存：36542</span>
      </div>
      <div className='yuanliao4'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>原料4</span>
        <span className='bordered yuanliao inventory-value'>库存：45678</span>
      </div>
    </div>
  )
}
