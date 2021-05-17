import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import line from '../../assets/img/line.png';
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
        x: px(60),
        y: px(40),
        x2: px(25),
        y2: px(40)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i => i.month),
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
          smooth: true,
          data: data.map(i => i.value),
          symbol: 'circle',
          symbolSize: px(12),
          itemStyle: {
            color: '#2f65f0'
          },
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#9608ed' },

              { offset: 1, color: '#2f65f0' }
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
        { month: '1', value: Math.random() },
        { month: '2', value: Math.random() },
        { month: '3', value: Math.random() },
        { month: '4', value: Math.random() },
        { month: '5', value: Math.random() },
        { month: '6', value: Math.random() },
        { month: '7', value: Math.random() },
        { month: '8', value: Math.random() },
        { month: '9', value: Math.random() },
        { month: '10', value: Math.random() },
        { month: '11', value: Math.random() },
        { month: '12', value: Math.random() }
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
      <h2><img src={line} alt=''/> 效益</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
