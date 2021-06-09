import React, { useState, useRef, useEffect } from 'react'
// import DeviceProcess from '../../api/deviceProcess'
import table from '../../assets/img/table.png'
import './index.scss'

const fakeData = [
  { id: 'CS_CP',name:'醋酸',value:'8万吨',price:'2495.58yuan/t' },
  { id: 'YECGYJ_CP',name:'乙二醇（工业级）',value:'10万吨',price:'3539.82yuan/t' },
  { id: 'YECJZJ_CP',name:'乙二醇（聚酯级）',value:'10万吨',price:'3539.82yuan/t' },
  { id: 'JJC_CP',name:'精甲醇',value:'5万吨',price:'1893.81yuan/t' },
]

export default function Chart8 () {
  //
  const [isScrolle, setIsScrolle] = useState(true)

  // 滚动速度，值越小，滚动越快
  const speed = 50
  const warper = useRef()
  const childDom1 = useRef()
  const childDom2 = useRef()
  // 开始滚动
  useEffect(() => {
    // 多拷贝一层，让它无缝滚动
    // childDom2.current.innerHTML = childDom1.current.innerHTML
    let timer
    if (isScrolle) {
      timer = setInterval(
        () =>
          warper.current.scrollTop >= childDom1.current.scrollHeight
            ? (warper.current.scrollTop = 0)
            : warper.current.scrollTop++,
        speed
      )
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isScrolle])

  const hoverHandler = flag => setIsScrolle(flag)

  // function formatter (val) {
  //   return parseFloat(val).toFixed(2)
  // }

  const [data, setData] = useState(fakeData)
  // useEffect(() => {
  //   DeviceProcess.GetResultUnitLoadList(
  //     '39fa16ee-03c2-2359-3725-6fcd0e873cfb',
  //     '39fa16ee-b3a0-d6a9-36c3-f1fd76ee02b7',
  //     '39fa2c14-7fcc-f4f4-84a4-aa546337e6d7'
  //   ).then(v => {
  //     setData(v.data)
  //   })
  // }, [])

  return (
    <div className='bordered product-sales-t'>
      <h2>
        <img src={table} alt='' /> 产品销售表
      </h2>
      <div className='tablebox'>
        <div className='tb1-header'>
          <table >
            <thead style={{width:'px(500)'}}>
              <tr>
                <th>产品编码</th>
                <th style={{transform:'translate(-10%)'}}>产品名称</th>
                <th>产量</th>
                <th>产品单价</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='tb1-body' style={{width:'px(400)',transform:'translate(-1%)'}}>
          <table className='parent' ref={warper}>
            <tbody
              className='child'
              ref={childDom1}
              onMouseOver={() => {
                return hoverHandler(false)
              }}
              onMouseLeave={() => hoverHandler(true)}
            >
              {data.map(item => {
                return (
                  <tr key={item.index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              })}
            </tbody>
            <tbody className='child' ref={childDom2}></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
