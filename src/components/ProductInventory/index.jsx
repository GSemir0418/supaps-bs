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
        <span className='yuanliao inventory-title'>2#磨煤</span>
        <span className='bordered yuanliao inventory-value'>库存:5万吨</span>
      </div>
      <div className='yuanliao2'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>氮气</span>
        <span className='bordered yuanliao inventory-value'>库存:4万吨</span>
      </div>
      <div className='yuanliao3'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>混煤</span>
        <span className='bordered yuanliao inventory-value'>库存:6万吨</span>
      </div>
      <div className='yuanliao4'>
        <span className='yuanliao spin'></span>
        <span className='yuanliao spin spin1'></span>
        <span className='yuanliao inventory-title'>40%硝酸</span>
        <span className='bordered yuanliao inventory-value'>库存:10万吨</span>
      </div>
    </div>
  )
}
