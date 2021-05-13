import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'

export default function LineChart () {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    var options = {
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      grid: {
        x: px(45),
        y: px(40),
        x2: px(20),
        y2: px(40)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter (val) {
            return val * 100 + '%'
          }
        }
      },
      series: [
        {
          name: '故意伤人',
          type: 'line',
          data: [
            0.15,
            0.13,
            0.11,
            0.13,
            0.14,
            0.15,
            0.16,
            0.18,
            0.21,
            0.19,
            0.17,
            0.16,
            0.15
          ],
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ebdba4'
              },
              {
                offset: 1,
                color: '#eb8146'
              }
            ])
          }
        }
      ]
    }
    myChart.setOption(options)
  }, [])
  return (
    <div className='bordered benefit'>
      <h2>效益</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
