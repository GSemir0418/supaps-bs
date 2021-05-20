import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import { BaseEchartsOptions } from '../../shared/base-echarts-options'
import bar from '../../assets/img/bar.png'
import './index.scss'
//'#3fb1e3''#6be6c1''#626c91''#a0a7e6''#c4ebad''#96dee8'
export default function ProductInventoryChart () {
  const divRef = useRef(null)
  const myChart = useRef(null)
  // const testColors = {
  //   甲: 'red',
  //   乙: 'green',
  //   丙: 'blue',
  //   丁: 'pink',
  //   戊: '#FFFFFF',
  //   己: 'red'
  // }
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '甲', value: Math.random() * 10, color: 'red' },
        { name: '乙', value: Math.random() * 10, color: 'green' },
        { name: '丙', value: Math.random() * 10, color: 'blue' },
        { name: '丁', value: Math.random() * 10, color: 'pink' },
        { name: '戊', value: Math.random() * 10, color: '#FFFFFF' },
        { name: '己', value: Math.random() * 10, color: '#FFFFFF' }
      ]
      renderMyChart(newData)
    }, 1000)
  }, [])

  const renderMyChart = data => {
    var options = {
      ...BaseEchartsOptions,
      grid: {
        x: px(45),
        y: px(40),
        x2: px(20),
        y2: px(40)
      },
      xAxis: {
        data: data.map(i => i.name),
        axisLabel: {
          fontSize: px(18),
          formatter (val) {
            if (val.length > 2) {
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val
            }
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(18)
        }
      },
      color: ['#562ccad2'],
      // color:data.map(i=>i.color),
      series: [
        {
          type: 'bar',
          data: data.map(i => i.value),
          showBackground: true,
          
          backgroundStyle: {
            color: '#0a529920'
          }
        }
      ]
    }
    myChart.current.setOption(options)
  }

  //初始化图表
  useEffect(() => {
    myChart.current = echarts.init(divRef.current) //对myChart的ref的初始化
    renderMyChart([])
  }, [])
  return (
    <div className='bordered product-inventory-chart'>
      <h2>
        <img src={bar} alt='' /> 产品库存
      </h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
