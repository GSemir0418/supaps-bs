import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../../shared/px'
import { BaseEchartsOptions } from '../../shared/base-echarts-options'
import './index.scss'

export default function Chart7 () {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    var option = {
      ...BaseEchartsOptions,
      title: {
        text: '双代号时标网络图',
        show: false
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      color: ['#ca8622', '#bda29a', '#8B0000'],
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: px(90),
          roam: false, //放大缩小
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: px(25)
              }
            }
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [px(5), px(15)],
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: px(25)
              },
              formatter: '{c}'
            }
          },
          data: [
            {
              name: '节点1',
              x: 50,
              y: 300
            },
            {
              name: '节点2',
              x: 100,
              y: 400
            },
            {
              name: '节点3',
              x: 100,
              y: 200
            },
            {
              name: '节点4',
              x: 200,
              y: 300
            },
            {
              name: '节点5',
              x: 300,
              y: 400
            },
            {
              name: '节点6',
              x: 300,
              y: 300
            },
            {
              name: '节点7',
              x: 300,
              y: 200
            },
            {
              name: '节点8',
              x: 400,
              y: 400
            },
            {
              name: '节点9',
              x: 450,
              y: 200
            },
            {
              name: '节点10',
              x: 450,
              y: 300
            },
            {
              name: '节点11',
              x: 550,
              y: 400
            },
            {
              name: '节点12',
              x: 550,
              y: 300
            },
            {
              name: '节点13',
              x: 650,
              y: 200
            },
            {
              name: '节点14',
              x: 650,
              y: 300
            }
          ],
          links: [
            {
              source: 0,
              target: 1,
              value: 'C',
              label: {
                normal: {
                  show: true
                }
              }
            },
            {
              source: 0,
              target: 2,
              value: 'A'
            },
            {
              source: 0,
              target: 3,
              value: 'B',
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0,
                  color: '#ff4747'
                }
              }
            },
            {
              source: 1,
              target: 4,
              value: 'M'
            },
            {
              source: 2,
              target: 6,
              value: 'E'
            },
            {
              source: 3,
              target: 5,
              value: 'D',
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0,
                  color: '#ff4747'
                }
              }
            },
            {
              source: 3,
              target: 4,
              value: '',
              lineStyle: {
                normal: {
                  type: 'dotted',
                  width: 2,
                  curveness: 0.2,
                  color: '#ff4747'
                }
              }
            },
            {
              source: 5,
              target: 6,
              value: '',
              lineStyle: {
                normal: {
                  width: 2,
                  curveness: 0,
                  color: '#ff4747',
                  type: 'dotted'
                }
              }
            },
            {
              source: 4,
              target: 7,
              value: 'N'
            },
            {
              source: 5,
              target: 9,
              value: 'I'
            },
            {
              source: 6,
              target: 8,
              value: 'F',
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0,
                  color: '#ff4747'
                }
              }
            },
            {
              source: 7,
              target: 10,
              value: 'P'
            },
            {
              source: 8,
              target: 12,
              value: 'G',
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0,
                  color: '#ff4747'
                }
              }
            },
            {
              source: 8,
              target: 9,
              value: '',
              lineStyle: {
                normal: {
                  width: 2,
                  curveness: 0,
                  type: 'dotted'
                }
              }
            },
            {
              source: 9,
              target: 11,
              value: 'J'
            },
            {
              source: 10,
              target: 11,
              value: '',
              lineStyle: {
                normal: {
                  width: 2,
                  curveness: 0,
                  type: 'dotted'
                }
              }
            },
            {
              source: 11,
              target: 13,
              value: 'K'
            },
            {
              source: 12,
              target: 13,
              value: 'H',
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0,
                  color: '#ff4747'
                }
              }
            }
          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: px(2),
              curveness: 0,
              color: '#5dc2fe'
            }
          }
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
    }
  }, [])
  return (
    <div className='diagram'>
      <h2>双代号时标网络图</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  )
}
