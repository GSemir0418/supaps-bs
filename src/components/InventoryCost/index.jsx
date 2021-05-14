import React from 'react'
import './index.scss'

export default function index () {
  return (
    <div className='bordered inventory-cost'>
      <h2>库存成本</h2>
      <table className='inventory-cost-t'>
        <tbody>
          <tr>
            <td>订货成本</td>
            <td>20000</td>
          </tr>
          <tr>
            <td>购入成本</td>
            <td>245684</td>
          </tr>
          <tr>
            <td>库存持有成本</td>
            <td>215337</td>
          </tr>
          <tr>
            <td>缺货成本</td>
            <td>213438</td>
          </tr>
          <tr>
            <td>物流成本</td>
            <td>215453</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
