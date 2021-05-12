import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { BaseEchartsOptions } from '../shared/base-echarts-options'

export default function Chart7 () {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    var categories = []
    for (var i = 0; i < 2; i++) {
      categories[i] = {
        name: '类目' + i
      }
    }
    var option = {}
    myChart.setOption(option)
  }, [])
  return (
    <div className='bordered guanxi'>
      <h2>双代号时标网络图</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
