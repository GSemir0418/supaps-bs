import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { BaseEchartsOptions } from '../shared/base-echarts-options'

export default function Chart3 () {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    var option = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          ...BaseEchartsOptions,
          color: ['#d95850', '#083c5a'],
          xAxis: { show: false },
          yAxis: { show: false },
          legend: { show: false },
          name: '收率',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'inside',
            textStyle: { color: 'white', fontSize: px(20) },
            formatter (val) {
              return val.value * 100 + '%'
            }
          },

          labelLine: {
            show: false
          },
          data: [
            { value: 0.5, name: '收率' },
            { value: 0.5, name: '未知' }
          ]
        }
      ]
    }
    myChart.setOption(option)
  }, [])
  return (
    <div className='yield-饼图1'>
      <div className='chart'>
        <div ref={divRef} className='main' />
        <div className='text'>50%</div>
      </div>
      <div className='legend'>业务</div>
    </div>
  )
}
