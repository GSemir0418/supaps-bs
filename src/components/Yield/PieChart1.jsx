import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { BaseEchartsOptions } from '../../shared/base-echarts-options'
import './index.scss'
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
          color: [
            new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              { offset: 0, color: '#48D1CC' },

              { offset: 1, color: '#FF8C00' }
            ]),
            '#083c5a'
          ],
          xAxis: { show: false },
          yAxis: { show: false },
          legend: { show: false },
          name: '收率',
          type: 'pie',
          radius: ['60%', '75%'],
          avoidLabelOverlap: false,
          label: {
            show: false
          },

          labelLine: {
            show: false
          },
          data: [
            { value: 0.992, name: '收率' },
            { value: 0.008, name: '未知' }
          ]
        }
      ]
    }
    myChart.setOption(option)
  }, [])
  return (
    <div className='yield-piechart'>
      <div className='chart'>
        <div ref={divRef} className='main' />
        <div className='text'>99.2%</div>
      </div>
      <div className='legend'>精甲醇</div>
    </div>
  )
}
