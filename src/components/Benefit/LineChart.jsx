import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import './index.scss'

export default function LineChart () {
  const divRef = useRef(null)
  const myChart = useRef(null)

  const renderMyChart = data => {
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
        data: data.map(i=>i.name),
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
          type: 'line',
          data: data.map(i=>i.value),
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
                color: '#e69d87'
              }
            ])
          }
        }
      ]
    }
    myChart.current.setOption(options)
  }
  //动态获取数据
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { time: '1', value: Math.random() },
        { time: '2', value: Math.random() },
        { time: '3', value: Math.random() },
        { time: '4', value: Math.random() },
        { time: '5', value: Math.random() },
        { time: '6', value: Math.random() },
        { time: '7', value: Math.random() },
        { time: '8', value: Math.random() },
        { time: '9', value: Math.random() },
        { time: '10', value: Math.random() },
        { time: '11', value: Math.random() },
        { time: '12', value: Math.random() }
      ]
      renderMyChart(newData)
    }, 1500)
  }, [])
  //初始化数据
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    renderMyChart([])
  }, [])
  return (
    <div className='bordered benefit'>
      <h2>效益</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
