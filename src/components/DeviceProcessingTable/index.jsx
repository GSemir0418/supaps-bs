import React, { useState, useEffect, useRef } from 'react'
import DeviceProcess from '../../api/deviceProcess'
import table from '../../assets/img/table.png';
import './index.scss'
// =39fa16ee-03c2-2359-3725-6fcd0e873cfb&FlowsheetId=39fa16ee-b3a0-d6a9-36c3-f1fd76ee02b7&ProcessingId=39fa2c14-7fcc-f4f4-84a4-aa546337e6d7
export default function DeviceProcessingTable () {
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
    childDom2.current.innerHTML = childDom1.current.innerHTML
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

  //
  function formatter (val) {
    return parseFloat(val).toFixed(2)
  }

  const [data, setData] = useState([])
  useEffect(() => {
    DeviceProcess.GetResultUnitLoadList(
      '39fa16ee-03c2-2359-3725-6fcd0e873cfb',
      '39fa16ee-b3a0-d6a9-36c3-f1fd76ee02b7',
      '39fa2c14-7fcc-f4f4-84a4-aa546337e6d7'
    ).then(v => {
      setData(v.data)
    })
  }, [])

  return (
    <div className='bordered deviceprocessing-t'>
      <h2><img src={table} alt=''/> 装置加工表</h2>
      <div className='tablebox'>
        <div className='tb1-header'>
          <table>
            <thead>
              <tr>
                <th>装置</th>
                <th>加工量</th>
                <th>负荷</th>
                <th>产量</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='tb1-body'>
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
                  <tr key={item.id}>
                    <td>{item.unitDes}</td>
                    <td>{formatter(item.loadTotal)}</td>
                    <td>{formatter(item.load)}</td>
                    <td>{formatter(item.yield)}</td>
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
