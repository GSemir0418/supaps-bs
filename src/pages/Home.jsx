import React from 'react'
import './Home.scss'
import headerBg from '../img/header.png'
import Chart2 from '../components/DeviceProcessingTable'
import Chart3 from '../components/Yield/PieChart1'
import Chart4 from '../components/Yield/PieChart2'
import Chart5 from '../components/Yield/PieChart3'
import Chart6 from '../components/ProductInventoryChart/BarChart'
// import Chart7 from '../components/Chart7'
import Chart8 from '../components/ProductSalesTable'
import Chart9 from '../components/Benefit/LineChart'

export default function Home () {
  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}>
        supAPS
      </header>

      <main>
        <section className='bordered section1'>
          <div className='yuanliaokucun'>
            <div className='yuanliao1'>
                <span className="spin">绝对定位</span>
                <span className="库存名称">绝对定位 参考text</span>
                <span className="bordered 库存量">边框效果 大小固定 绝对定位</span>
            </div>
            <div className='yuanliao2'></div>
            <div className='yuanliao3'></div>
            <div className='yuanliao4'></div>
          </div>
        </section>
        <section className='section2'>
          <Chart2 />
        </section>
        <section className='section3'>
          <div className='bordered yield'>
            <h2>收率</h2>
            <div className='charts'>
              <Chart3 />
              <Chart4 />
              <Chart5 />
            </div>
          </div>
        </section>
        <section className='section4'>
          <Chart6 />
        </section>
        <section className='section5'>
          <Chart8 />
        </section>
        <section className='section6'>{/* <Chart7 /> */}</section>
        <section className='bordered section7'></section>
        <section className='section8'>
          <Chart9 />
        </section>
      </main>
    </div>
  )
}
