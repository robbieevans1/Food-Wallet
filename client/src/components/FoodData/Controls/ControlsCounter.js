import React from 'react'
import '../fooddata-styles.css'

const ControlsCounter = ({total}) => {
  return (
    <div className='app__controls__counter'>
      <h2>Total Calories: <span>{total}</span></h2>
      <h2>C/O Ratio: <span>{total}</span></h2>
      <h2>C/P Ratio: <span>{total}</span></h2>
      <h2>C/F Ratio: <span>{total}</span></h2>
      <h2>Total Calories: <span>{total}</span></h2>
    </div>
  )
}

export default ControlsCounter