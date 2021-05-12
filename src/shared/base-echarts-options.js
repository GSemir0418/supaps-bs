// charts图表公共部分抽取
import { px } from './px'

export const BaseEchartsOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    x: px(50),
    y: px(50),
    x2: px(50),
    y2: px(50)
  }
}
