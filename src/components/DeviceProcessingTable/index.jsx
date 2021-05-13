import React, { useState} from 'react'
import DeviceProcess from '../../api/deviceProcess'
// =39fa16ee-03c2-2359-3725-6fcd0e873cfb&FlowsheetId=39fa16ee-b3a0-d6a9-36c3-f1fd76ee02b7&ProcessingId=39fa2c14-7fcc-f4f4-84a4-aa546337e6d7
export default function DeviceProcessingTable () {
  
  function formatter (val) {
    return parseFloat(val).toFixed(2)
  }

  const [data, setData] = useState([])
  DeviceProcess.GetResultUnitLoadList(
    '39fa16ee-03c2-2359-3725-6fcd0e873cfb',
    '39fa16ee-b3a0-d6a9-36c3-f1fd76ee02b7',
    '39fa2c14-7fcc-f4f4-84a4-aa546337e6d7'
  ).then(v => {
    setData(v.data)
  })
  return (
    <div className='bordered deviceprocessing-t'>
      <h2>装置加工表</h2>
      <table>
        <thead>
          <tr>
            <th>装置</th>
            <th>加工量</th>
            <th>负荷</th>
            <th>产量</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
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
      </table>
    </div>
  )
}
