import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import { BaseEchartsOptions } from '../../shared/base-echarts-options'
import './index.scss';

export default function ProductInventoryChart () {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    var options = {
      ...BaseEchartsOptions,
      grid: {
        x: px(45),
        y: px(40),
        x2: px(20),
        y2: px(40)
      },
      xAxis: {
        data: [
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区',
          '兰州新区'
        ],
        axisLabel: {
          fontSize: px(12),
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
          fontSize: px(12)
        }
      },
      color: ['#ffb248'],
      series: [
        {
          type: 'bar',
          data: [
            {
              value: 150,
              itemStyle: {
                color: '#3fb1e3'
              }
            },
            {
              value: 110,
              itemStyle: {
                color: '#6be6c1'
              }
            },
            {
              value: 30,
              itemStyle: {
                color: '#626c91'
              }
            },
            {
              value: 170,
              itemStyle: {
                color: '#a0a7e6'
              }
            },
            {
              value: 80,
              itemStyle: {
                color: '#c4ebad'
              }
            },
            {
              value: 200,
              itemStyle: {
                color: '#96dee8'
              }
            },
          ],
          showBackground: true,
          backgroundStyle: {
            color: '#ffb24820'
          }
        }
      ]
    }
    myChart.setOption(options)
  }, [])
  return (
    <div className='bordered product-inventory-chart'>
      <h2>产品库存</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
