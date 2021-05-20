import React, { useEffect, useRef } from 'react'
import { px } from '../../shared/px'
import * as echarts from 'echarts'
import './linechart.scss'

export default function LineChart1 () {
  const divRef1 = useRef(null)
  const divRef2 = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef1.current)
    var option = {
      grid: {
        x: px(60),
        y: px(40),
        x2: px(20),
        y2: px(40)
      },
      title: {
        text: '关键产品收率计划与实际对比',
        textStyle: {
          fontSize: px(28),
          fontFamily: 'Microsoft YaHei',
          color: '#85d0fc'
        },
        left:px(60)
      },
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 600
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['计划收率', '实际收率'],
        textStyle:{
          fontSize:px(18),
          color:'#85d0fc'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          fontSize: px(18)
        },
        data: [
          '2020-6',
          '2020-7',
          '2020-8',
          '2020-9',
          '2020-10',
          '2020-11',
          '2020-12',
          '2021-1',
          '2021-2',
          '2021-3',
          '2021-4',
          '2021-5',
          '2021-6',
          '2021-7',
          '2021-8',
          '2021-9',
          '2021-10',
          '2021-11',
          '2021-12',
          '2022-1',
          '2022-2'
        ]
      },
      yAxis: {
        type: 'value',
        splitLine: false,
        axisLabel: {
          fontSize: px(18)
        }
      },
      series: [
        {
          name: '计划收率',
          showSymbol: false,
          type: 'line',

          data: [
            170,
            182,
            148,
            160,
            290,
            200,
            310,
            340,
            305,
            190,
            270,
            150,
            138,
            282,
            191,
            300,
            290,
            280,
            250,
            292,
            250
          ]
        },
        {
          name: '实际收率',
          showSymbol: false,
          type: 'line',

          data: [
            150,
            170,
            140,
            154,
            240,
            180,
            290,
            280,
            270,
            240,
            280,
            250,
            300,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ]
        }
      ]
    }
    myChart.setOption(option)
  }, [])
  useEffect(() => {
    var myChart = echarts.init(divRef2.current)
    var option = {
      grid: {
        x: px(60),
        y: px(40),
        x2: px(20),
        y2: px(40)
      },
      title: {
        text: '关键产品产量计划与实际对比',
        textStyle: {
          fontSize: px(28),
          fontFamily: 'Microsoft YaHei',
          color: '#85d0fc'
        },
        left:px(60)
      },
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 600
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['计划产量', '实际产量'],
        textStyle:{
          fontSize:px(18),
          color:'#85d0fc'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          fontSize: px(18)
        },
        data: [
          '2020-6',
          '2020-7',
          '2020-8',
          '2020-9',
          '2020-10',
          '2020-11',
          '2020-12',
          '2021-1',
          '2021-2',
          '2021-3',
          '2021-4',
          '2021-5',
          '2021-6',
          '2021-7',
          '2021-8',
          '2021-9',
          '2021-10',
          '2021-11',
          '2021-12',
          '2022-1',
          '2022-2'
        ]
      },
      yAxis: {
        type: 'value',
        splitLine: false,
        axisLabel: {
          fontSize: px(18)
        }
      },
      series: [
        {
          name: '计划产量',
          showSymbol: false,
          type: 'line',

          data: [
            170,
            182,
            148,
            160,
            290,
            200,
            310,
            340,
            305,
            190,
            270,
            150,
            138,
            282,
            191,
            300,
            290,
            280,
            250,
            292,
            250
          ]
        },
        {
          name: '实际产量',
          showSymbol: false,
          type: 'line',

          data: [
            150,
            170,
            140,
            154,
            240,
            180,
            290,
            280,
            270,
            240,
            280,
            250,
            300,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ]
        }
      ]
    }
    myChart.setOption(option)
  }, [])
  return (
    <div className='contrastline'>
      <div ref={divRef1} className='linechart'></div>
      <div ref={divRef2} className='linechart'></div>
    </div>
  )
}
