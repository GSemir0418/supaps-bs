import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import { BaseEchartsOptions } from '../../shared/base-echarts-options'
import './index.scss'

export default function Chart4 () {
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
            { value: 0.02, name: '收率' },
            { value: 0.98, name: '未知' }
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
        <div className='text'>2%</div>
      </div>
      <div className='legend'>工业级乙二醇</div>
    </div>
  )
}
