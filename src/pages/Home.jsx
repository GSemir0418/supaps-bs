import React from 'react'
import './Home.scss'
import headerBg from '../img/header.png'
import DeviceProcessingTable from '../components/DeviceProcessingTable'
import PieChart1 from '../components/Yield/PieChart1'
import PieChart2 from '../components/Yield/PieChart2'
import PieChart3 from '../components/Yield/PieChart3'
import BarChart from '../components/ProductInventoryChart/BarChart'
// import Chart7 from '../components/Chart7'
import ProductSalesTable from '../components/ProductSalesTable'
import LineChart from '../components/Benefit/LineChart'

export default function Home () {
  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}>supAPS</header>

      <main>
        <section className='bordered section1'>
          <div className='product-inventory'>
            <div className='yuanliao1'>
              <span className='yuanliao spin'></span>
              <span className='yuanliao inventory-title'>原料1</span>
              <span className='bordered yuanliao inventory-value'>
                库存量1111
              </span>
            </div>
            <div className='yuanliao2'>
              <span className='yuanliao spin'></span>
              <span className='yuanliao inventory-title'>原料2</span>
              <span className='bordered yuanliao inventory-value'>
                库存量2222
              </span>
            </div>
            <div className='yuanliao3'>
              <span className='yuanliao spin'></span>
              <span className='yuanliao inventory-title'>原料3</span>
              <span className='bordered yuanliao inventory-value'>
                库存量3333
              </span>
            </div>
            <div className='yuanliao4'>
              <span className='yuanliao spin'></span>
              <span className='yuanliao inventory-title'>原料4</span>
              <span className='bordered yuanliao inventory-value'>
                库存量4444
              </span>
            </div>
          </div>
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
        <section className='section6'>{/* <Chart7 /> */}</section>
        <section className='bordered section7'></section>
        <section className='section8'>
          <LineChart />
        </section>
      </main>
    </div>
  )
}
