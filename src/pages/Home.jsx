import React from 'react'
import './Home.scss'
import headerBg from '../img/header.png'
import DeviceProcessingTable from '../components/DeviceProcessingTable'
import PieChart1 from '../components/Yield/PieChart1'
import PieChart2 from '../components/Yield/PieChart2'
import PieChart3 from '../components/Yield/PieChart3'
import BarChart from '../components/ProductInventoryChart/BarChart'
import Diagram from '../components/Diagram'
import ProductSalesTable from '../components/ProductSalesTable'
import LineChart from '../components/Benefit/LineChart'
import ProductInventory from '../components/ProductInventory'
import InventoryCost from '../components/InventoryCost'

export default function Home () {
  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}>supAPS</header>
      <main>
        <section className='bordered section1'>
          <ProductInventory />
        </section>
        <section className='section2'>
          <DeviceProcessingTable />
        </section>
        <section className='section3'>
          <div className='bordered yield'>
            <h2>收率</h2>
            <div className='charts'>
              <PieChart1 />
              <PieChart2 />
              <PieChart3 />
            </div>
          </div>
        </section>
        <section className='section4'>
          <BarChart />
        </section>
        <section className='section5'>
          <ProductSalesTable />
        </section>
        <section className='section6'>
          <Diagram />
        </section>
        <section className='section7'>
          <InventoryCost/>
        </section>
        <section className='section8'>
          <LineChart />
        </section>
      </main>
      <footer>创新产品开发部门 郭森权</footer>
    </div>
  )
}
