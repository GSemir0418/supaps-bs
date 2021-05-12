import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { BaseEchartsOptions } from '../shared/base-echarts-options'

export default function Chart6 () {
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
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 23, 25, 12]
        }
      ]
    }
    myChart.setOption(options)
  }, [])
  return (
    <div className='bordered product-inventory'>
      <h2>产品库存</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
